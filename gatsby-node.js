const axios = require('axios');
const crypto = require('crypto');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const createMultilingualRedirects = require('./i18n-redirects');

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

  const releaseNoteTemplate = path.resolve('./src/templates/releaseNotesTemplate.tsx')

  const releaseNoteResults = await graphql(`
    {
      allReleaseNotes {
        group(field: version) {
          distinct(field: version)
        }
      }
    }
  `)

  releaseNoteResults.data.allReleaseNotes.group.forEach(({ distinct }) => {
    // Create page for each release note version
    createPage({
      path: `/temurin/release-notes/${distinct.toString()}`,
      component: releaseNoteTemplate,
      context: {
        version: distinct.toString()
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
  // fetch release versions from API
  let { data } = await axios.get('https://api.adoptium.net/v3/info/release_versions?page_size=100&release_type=ga&vendor=eclipse');
  const OPENJDK_API = 'https://bugs.openjdk.org/rest/api/latest';
  for (let version of data.versions) {
    let apiVersion
    let openjdkVersion = version.openjdk_version
    if (version.adopt_build_number) {
      continue; // skip versions that have an adopt_build_number
    }

    if (version.major === 8) {
      apiVersion = `openjdk8u${version.security}`;
    } else {
      apiVersion = `${version.major}.${version.minor}.${version.security}`;
    }

    if (version.patch) {
      apiVersion = `${apiVersion}.${version.patch}`;
    }

    if (version.security === 0) {
      apiVersion = version.major;
    }

    const url = `${OPENJDK_API}/search?jql=project=JDK AND fixVersion=${apiVersion}&maxResults=1000`;
    let { data } = await axios.get(url);
    // map into these results and create nodes
    data.issues.map((issue) => {
      // Create your node object
      const releaseNoteNode = {
        // Required fields
        id: issue.key,
        parent: `__SOURCE__`,
        internal: {
          type: `ReleaseNotes`, // name of the graphQL query --> allReleaseNotes {}
          // contentDigest will be added just after
          // but it is required
        },
        children: [],
        version: openjdkVersion,

        // Other fields that you want to query with graphQl
        title: issue.fields.summary,
        priority: issue.fields.priority.id,
        component: issue.fields.components,
        subcomponent: `${issue.fields.components[0].name}${issue.fields.customfield_10008?.name ? "/" + issue.fields.customfield_10008?.name : ''}`,
        link: `https://bugs.openjdk.org/browse/${issue.key}`,
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
    }
  )};

  return;
}