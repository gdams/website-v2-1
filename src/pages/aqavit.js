import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Seo from '../components/Seo'

const AqavitHome = () => (
  <Layout>
    <Seo title='Eclipse AQAvit' />
    <section className='py-5 text-center container'>
      <div className='row py-lg-5'>
        <div className='col-lg-10 col-md-8 mx-auto'>
          <h1 className='fw-light'>Eclipse AQAvit</h1>
          <div className='row align-items-center pt-3'>
            <div className='col-6 col-md-4'>
              <img
                src='../../images/aqavit-light.png'
                width={200}
                alt='AQAvit logo'
                className='img-fluid'
              />
            </div>
            <div className='col-12 col-sm-6 col-md-8'>
              <p className='text-start'>
                Eclipse AQAvit™ is the quality and runtime branding evaluation project for Java SE runtimes and associated technology.
                During a release it takes a functionally complete Java runtime and ensures that all the additional qualities are present that make it suitable for production use.
                These quality criteria include good performance, exceptional security, resilience and endurance, and the ability to pass a wide variety of application test suites.
                In addition to verifying that functionally complete runtimes are release ready, the AQA tests may also serve to verify new functionality during runtime development.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 mb-4 bg-dark rounded-3 text-start">
        <div className="container-fluid py-5 text-white">
          <h2>AQAvit Certification</h2>
          <p>The AQAvit project was created to “make quality certain to happen.” AQAvit certification is achieved through the process of running and passing a prescribed and versioned set of tests in the AQAvit test suite.</p>
          <a href="/docs/aqavit-certification" className="btn btn-outline-light" type="button">Learn how to get certified</a>
        </div>
      </div>
      <div className="p-3 mb-4 bg-light rounded-3 text-start">
        <div className="container-fluid py-5">
          <h2>Why AQAvit?</h2>
          <p>The AQAvit project gets its name from Adoptium Quality Assurance ‘AQA’ and ‘vit’ for vitality and speed. As the project engages with vendors and enterprise consumers, the test suite is expanded and improved to keep pace with the latest Java releases and to continuously raise the quality bar through collaboration and rigour.</p>
        </div>
      </div>
    </section>
  </Layout>
)

export default AqavitHome

export const query = graphql`
  query ($language: String!) {
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
