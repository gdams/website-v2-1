import { graphql } from 'gatsby'
import { convert } from 'html-to-text'
import React from 'react'
import { MDXProvider } from '@mdx-js/react';

import EditLink from '../components/EditLink'
import AuthorsList from '../components/AuthorList'
import InstallTabs from '../components/InstallTabs'
import Seo from '../components/Seo'

import { mdxComponents } from '../util/mdxComponents'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/css/v4-shims.min.css'

const MDXDocTemplate = ({ data, children, pageContext }) => {
  const { relativePath } = pageContext;
  const doc = data.mdx;
  const { fields, frontmatter } = doc;
  const pageAuthorList = frontmatter.authors || ''
  return (
    <section className='py-5 px-3'>
      <div className='asciidoc-container container-adoc row' id='asciidoc-container'>
        <div className='col-lg-3 hide-on-mobile'>
          {/* Leaving space for a table of contents (side bar) */}
        </div>
        <div className='asciidoc col-lg-6 col-md-12'>
          <h1 className='pb-4 fw-light text-center'>{convert(frontmatter.title)}</h1>
          {fields.slug === '/installation/' && (
            <section className='adopt-demo-container hide-on-mobile my-5'>
              <div className='adopt-demo mx-auto'>
                <InstallTabs />
              </div>
            </section>
          )}
          <MDXProvider components={mdxComponents}>
            {children}
          </MDXProvider>
        <hr className='m-5' />
        <AuthorsList authors={pageAuthorList.split(',')} />
        <EditLink relativePath={`mdx-docs/${relativePath}`} />
        </div>
        <div className='col-lg-3 hide-on-mobile'></div>
      </div>
    </section>
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
  query($locale: String!, $title: String!) {
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
      }
    }
  }
`
