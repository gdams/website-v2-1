const axios = require('axios');
const crypto = require('crypto');
const Parser = require('rss-parser');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const createMultilingualRedirects = require('./i18n-redirects');

let parser = new Parser();

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Create Asciidoc pages.
  const asciidocTemplate = path.resolve('./src/templates/asciidocTemplate.tsx')

  const asciidocResults = await graphql(`
    {
      allAsciidoc {
        edges {
          node {
            id
            fields {
              slug
            }
            parent {
              ... on File {
                relativePath
                absolutePath
              }
            }
          }
        }
      }
    }
  `)

  asciidocResults.data.allAsciidoc.edges.forEach(({ node }) => {
    const articleNodes = asciidocResults.data.allAsciidoc.edges
    createMultilingualRedirects(actions, articleNodes, node)
    // Create page for each asciidoc file
    createPage({
      path: node.fields.slug,
      component: asciidocTemplate,
      context: {
        id: node.id
      }
    })
  })
}

exports.onCreateNode = async ({ node, actions, getNode, loadNodeContent }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Asciidoc') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value
    })
  }
}

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;
  // List of versions to get release notes for
  const versions = ['openjdk8u342', '11.0.16', '17.0.4', '18.0.2' ]
  const baseUrl = 'https://bugs.openjdk.org/sr';
  for (let version of versions) {
    const url = `${baseUrl}/jira.issueviews:searchrequest-rss/temp/SearchRequest.xml?jqlQuery=project+%3D+JDK+AND+fixVersion+%3D+${version}&tempMax=1000`;
    const res = await parser.parseURL(url);

    // map into these results and create nodes
    res.items.map((issue) => {
      // Create your node object
      const releaseNoteNode = {
        // Required fields
        id: `${issue.link.replace(/^.*\/([^/]*)/, "$1")}`, // fetch bug id from URL
        parent: `__SOURCE__`,
        internal: {
          type: `ReleaseNotes`, // name of the graphQL query --> allReleaseNotes {}
          // contentDigest will be added just after
          // but it is required
        },
        children: [],
        version: version,

        // Other fields that you want to query with graphQl
        title: issue.title,
        link: issue.link,
        // etc...
      }

      // Get content digest of node. (Required field)
      const contentDigest = crypto
        .createHash(`md5`)
        .update(JSON.stringify(releaseNoteNode))
        .digest(`hex`);
      // add it to userNode
      releaseNoteNode.internal.contentDigest = contentDigest;

      // Create node with the gatsby createNode() API
      createNode(releaseNoteNode);
    });
  }

  return;
}