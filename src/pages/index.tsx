import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import LocalizedLink from '../components/LocalizedLink'
import useTranslations from '../components/useTranslations'
import Seo from '../components/Seo'
import LatestTemurin from '../components/LatestTemurin'

const IndexPage = () => {
  const { prebuiltOpenjdk, binariesForFree, intro } = useTranslations()

  return (
    <section id='home' className='home' style={{ overflowX: 'hidden' }}>
      <div className='container-flex'>
        <div className='main-banner row justify-content-center align-items-center'>
          <div className='col-md-6 p-md-5'>
            <div className='w-75 m-auto'>
              <div data-aos='zoom-in-up' className='aos-init aos-animate'>
                <div className='my-3 my-md-5 text-center text-md-start banner-title'>
                  <h1 className='display-4'>
                    {prebuiltOpenjdk}
                    <br />
                    {binariesForFree}
                  </h1>
                </div>
                <p className='mt-3 text-center text-md-start'>{intro}</p>
              </div>
              <LatestTemurin page='home' />
            </div>
          </div>
          <div className='col-md-6'>
            <StaticImage
              src='../images/servers-min.png'
              width={1000}
              alt='Image showing server, cloud and laptop'
              style={{ opacity: '0.999', mixBlendMode: 'luminosity' }}
            />
          </div>
        </div>
      </div>
      <div className='p-3 mt-4 mb-4 bg-light rounded-3 text-start'>
        <div className='container py-5'>
          {/* <h2 className='text-pink'><Trans>The Adoptium&reg; Working Group</Trans></h2> */}
          <p>
            {/* <Trans i18nKey='wg-description'>
              The Adoptium Working Group promotes and supports high-quality runtimes and associated technology for use across the Java ecosystem.
              Our vision is to meet the needs of Eclipse and the broader Java community by providing runtimes for Java-based applications. We
              embrace existing standards and a wide variety of hardware and cloud platforms.
            </Trans> */}
          </p>
          <div className='btn-group'>
            {/* <LocalizedLink to='/join' className='btn btn-lg btn-primary m-3 text-white'><Trans>Join the Working Group</Trans></LocalizedLink> */}
            {/* <LocalizedLink to='/members' className='btn btn-lg btn-secondary m-3'><Trans>View our Members</Trans></LocalizedLink> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndexPage

export const Head = () => (
  <Seo title='Home' />
)

