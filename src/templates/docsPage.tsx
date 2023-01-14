import { graphql } from 'gatsby'
import { convert } from 'html-to-text'
import React from 'react'
import { MDXProvider } from '@mdx-js/react';

import Layout from '../components/Layout';
import EditLink from '../components/EditLink'
import AuthorsList from '../components/AuthorList'
import Seo from '../components/Seo'

import { mdxComponents } from '../util/mdxComponents'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/css/v4-shims.min.css'

const MDXDocTemplate = ({ data, children, pageContext }) => {
  const { relativePath } = pageContext;
  const doc = data.mdx;
  const { fields, frontmatter, tableOfContents } = doc;
  const toc = frontmatter.toc;
  const pageAuthorList = frontmatter.authors || ''
  return (
    <Layout>
      <section className='py-5 px-3'>
        <div className='container-mdx row'>
          <div className='col-lg-3 hide-on-mobile'>
            {/* Leaving space for a table of contents (side bar) */}
          </div>
          <div className='col-lg-6 col-md-12'>
            <h1 className='pb-4 fw-light text-center'>{convert(frontmatter.title)}</h1>
            {toc && tableOfContents && (
              <details className='p-3 my-3 bg-grey'>
                <summary className="lead">Table of Contents</summary>
                <ul>
                  {tableOfContents.items.map((item, index) => (
                    <li key={index}><a href={item.url}>{item.title}</a></li>
                  ))}
                </ul>
              </details>
            )}
            <MDXProvider components={mdxComponents}>
              {children}
            </MDXProvider>
          <hr className='m-5' />
          <AuthorsList authors={pageAuthorList.split(',')} />
          <EditLink relativePath={relativePath} />
          </div>
          <div className='col-lg-3 hide-on-mobile'></div>
        </div>
      </section>
    </Layout>
  )
}

export default MDXDocTemplate;

export const Head = ({ data: { mdx: { frontmatter } } }) => {
  return (
    <Seo
      title={convert(frontmatter.title)}
    />
  );
};

export const pageQuery = graphql`
  query($locale: String!, $title: String!, $language: String!) {
    mdx(
      frontmatter: { title: { eq: $title } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        title
        description
      }
      fields {
        slug
      }
      frontmatter {
        authors
        toc
      }
      tableOfContents
    }
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
