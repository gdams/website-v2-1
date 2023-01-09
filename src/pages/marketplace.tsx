import * as React from 'react'

import Seo from '../components/Seo'
import DownloadDropdowns from '../components/DownloadDropdowns'
import DownloadTable from '../components/MarketplaceDownloadTable'
import { getAllPkgsForVersion } from '../hooks'
import ChecksumModal from '../components/ChecksumModal'
import useTranslations from '../components/useTranslations'
import LinkText from '../components/LinkText'

const { marketplaceDescription } = useTranslations()

const DownloadPage = () => (

  <section className='py-5 text-center container'>
    <div className='row py-lg-5'>
      <div className='col-lg-8 col-md-8 mx-auto'>
        <h1 className='fw-light'>Adoptium&reg; Marketplace</h1>
        <p className='pt-3'>
          {marketplaceDescription}
        </p>
        <div className='row align-items-center pt-3'>
          <div className='col-6 col-md-4'>
            <img
              src='/images/aqavit-light.png'
              width={150}
              alt='AQAvit logo'
              className='img-fluid'
            />
          </div>
          <div className='col-12 col-sm-6 col-md-8 '>
            <p className='text-start'>
              {/* <Trans
                i18nKey='marketplace.aqavitDescription'
                defaults='The AQAvit open source test suite (<strong>A</strong>doptium <strong>Q</strong>uality <strong>A</strong>ssurance) can be found <aqavitLink>here</aqavitLink>. There is also a <blogPostLink>blog post and brief presentation</blogPostLink> that explains what testing is run and how it fits into the overall delivery pipeline.'
                components={{
                  aqavitLink: <LinkText href='https://github.com/Adoptium/aqa-tests' />,
                  blogPostLink: <LinkText href='https://blog.adoptopenjdk.net/2017/12/testing-java-help-count-ways' />
                }}
              /> */}
            </p>
          </div>
        </div>
      </div>
    </div>
    <DownloadDropdowns updaterAction={getAllPkgsForVersion} marketplace Table={DownloadTable} />
    <ChecksumModal />
  </section>
)

export default DownloadPage

export const Head = () => (
  <Seo title='Marketplace' />
)

