import * as React from 'react'
import { graphql } from 'gatsby'
import { Link, Trans } from 'gatsby-plugin-react-i18next'
import { HiUserGroup } from 'react-icons/hi'
import { AiOutlineForm } from 'react-icons/ai'
import { FaStore } from 'react-icons/fa'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import LatestTemurin from '../components/LatestTemurin'

const IndexPage = ({data}) => {
  const latestLTS = data.mostRecentLts.version
  // return (
  //   <Layout>
  //     <section id='home' className='home' style={{ overflowX: 'hidden' }}>
  //       <div className='container-flex'>
  //         <div className='main-banner row justify-content-center align-items-center'>
  //           <div className='col-md-6 p-md-5'>
  //             <div className='w-75 m-auto'>
  //               <div data-aos='zoom-in-up' className='aos-init aos-animate'>
  //                 <div className='my-3 my-md-5 text-center text-md-start banner-title'>
  //                   <h1 className='display-4'>
  //                     <Trans>Prebuilt OpenJDK</Trans>
  //                     <br />
  //                     <Trans>Binaries for Free!</Trans>
  //                   </h1>
  //                 </div>
  //                 <p className='mt-3 text-center text-md-start'>
  //                   <Trans i18nKey='Intro'>
  //                     Java&trade; is the world's leading programming language and platform. The Adoptium Working Group promotes and supports high-quality, TCK certified runtimes and associated technology for use across the Java ecosystem. Eclipse Temurin is the name of the OpenJDK distribution from Adoptium.
  //                   </Trans>
  //                 </p>
  //               </div>
  //               <LatestTemurin latestLTS={latestLTS} page='home' />
  //             </div>
  //           </div>
  //           <div className='col-md-6'>
  //             <StaticImage
  //               src='../images/servers-min.png'
  //               width={1000}
  //               alt='Image showing server, cloud and laptop'
  //               style={{ opacity: '0.999', mixBlendMode: 'luminosity' }}
  //             />
  //           </div>
  //         </div>
  //       </div>
  //       <div className='p-3 mt-4 mb-4 bg-light rounded-3 text-start'>
  //         <div className='container py-5'>
  //           <h2 className='text-pink'><Trans>The Adoptium&reg; Working Group</Trans></h2>
  //           <p>
  //             <Trans i18nKey='wg-description'>
  //               The Adoptium Working Group promotes and supports high-quality runtimes and associated technology for use across the Java ecosystem.
  //               Our vision is to meet the needs of Eclipse and the broader Java community by providing runtimes for Java-based applications. We
  //               embrace existing standards and a wide variety of hardware and cloud platforms.
  //             </Trans>
  //           </p>
  //           <div className='btn-group'>
  //             <Link to='/join' className='btn btn-lg btn-primary m-3 text-white'><Trans>Join the Working Group</Trans></Link>
  //             <Link to='/members' className='btn btn-lg btn-secondary m-3'><Trans>View our Members</Trans></Link>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </Layout>
  // )
  return (
    <Layout>
      <div className="main-banner" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="caption header-text">
                <h6>ECLIPSE ADOPTIUM&reg;</h6>
                <div className="line-dec"></div>
                <p className="h4">
                  <Trans
                    i18nKey='Prebuilt OpenJDK'
                    defaults='Prebuilt <em>OpenJDK</em>'
                    components={{
                      em: <em />,
                    }}
                  />
                  <br />
                  <Trans
                    i18nKey='Binaries for Free!'
                    defaults='Binaries <span>for Free!</span>'
                    components={{
                      span: <span />,
                    }}
                  />
                </p>
                <p>
                  <Trans i18nKey='Intro'>
                    Java&trade; is the world's leading programming language and platform. The Adoptium Working Group promotes and supports high-quality, TCK certified runtimes and associated technology for use across the Java ecosystem. Eclipse Temurin is the name of the OpenJDK distribution from Adoptium.
                  </Trans>
                </p>
                <LatestTemurin latestLTS={latestLTS} page='home' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services section mb-5" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-heading">
                    <h2 className='text-pink'><Trans>The Adoptium Working Group</Trans></h2>
                    <div className="line-dec"></div>
                    <p><Trans>Find out how you can get involved in the Adoptium Working Group.</Trans></p>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="service-item">
                    <AiOutlineForm size={50} color='#FF1364'/>
                    <Link to="/join"><p className="h4"><Trans>Join the Working Group</Trans></p></Link>
                    <p>Take the first step in joining this Eclipse Foundation working group by reaching out to our membership team.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="service-item">
                    <HiUserGroup size={50} color='#FF1364'/>
                    <Link to="/members"><p className="h4"><Trans>View our Members</Trans></p></Link>
                    <p>The Adoptium Working Group promotes and supports high-quality runtimes and associated technology for use across the Java ecosystem.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="service-item">
                    <FaStore size={50} color='#FF1364'/>
                    <Link to="/marketplace"><p className="h4"><Trans>The Adoptium Marketplace</Trans></p></Link>
                    <p>The Adoptium Marketplace offers easy access to high-quality OpenJDK Java binaries.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="service-item">
                    <img
                      src='/images/aqavit-icon.png'
                      width={50}
                      alt='AQAvit logo'
                    />
                    <Link to="/aqavit"><p className="h4">Eclipse AQAvit™</p></Link>
                    <p>Learn about how the AQAvit project thorougly tests every binary produced by the Temurin project.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <Seo title='Home' />
)

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
    mostRecentLts {
      version
    }
  }
`
