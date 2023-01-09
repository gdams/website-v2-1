import React from 'react';
import { graphql } from 'gatsby';
import LocalizedLink from '../components/LocalizedLink';

import Seo from '../components/Seo';
import AuthorData from '../json/authors.json';
import ArticlePreview from '../components/ArticlePreview';

const BlogIndex = ({ data }) => {
  const posts = data.allMdx.edges;
  const nextPageNumber = data.allMdx.totalCount > 10 ? 2 : null;

  return (
    <section className='py-5 container'>
        <div className='row py-lg-5'>
            <div className='col-lg-9 col-md-9 mx-auto'>
                {posts.map(({ node }) => {
                    const title = node.frontmatter.title;
                    const author = AuthorData[node.frontmatter.author];

                    return (
                    <ArticlePreview
                        key={node.fields.slug}
                        author={author.name}
                        date={node.frontmatter.date}
                        postPath={node.fields.postPath}
                        title={title}
                        description={node.frontmatter.description}
                        identifier={node.frontmatter.author}
                        excerpt={node.excerpt}
                        tags={node.frontmatter.tags}
                    />
                    );
                })}
                <div>
                    <ul
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        flexDirection: 'row-reverse',
                        listStyle: 'none',
                        padding: 0,
                    }}
                    >
                    <li>
                        {nextPageNumber && (
                        <LocalizedLink to={`/blog/page/${nextPageNumber}`} rel='next'>
                            Next page →
                        </LocalizedLink>
                        )}
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
};

export default BlogIndex;

export const Head = () => (
    <Seo title='All Posts' />
)
  

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: {frontmatter: {date: DESC}}, limit: 10) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
            postPath
          }
          frontmatter {
            author
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`;
