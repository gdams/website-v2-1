import * as React from 'react'
import LocalizedLink from '../../components/LocalizedLink'
import { FaArrowCircleRight } from 'react-icons/fa'

import Seo from '../../components/Seo'
import VersionSelector from '../../components/VersionSelector'
import ChecksumModal from '../../components/ChecksumModal'
import TemurinNightlyTable from '../../components/TemurinNightlyTable'
import { getAssetsForVersion } from '../../hooks'

const TemurinReleases = () => (
  <section className='py-5 text-center container'>
    <div className='row py-lg-5'>
      <div className='col-lg-10 col-md-8 mx-auto'>
        <h1 className='fw-light'>Nightly builds</h1>
        <div className='row align-items-center pt-2'>
          <div className='callout callout-default text-start'>
            Please be aware that this archive contains intermediate builds created as a development step towards a <LocalizedLink to='/temurin/releases'>full release</LocalizedLink>. Intermediate builds are ephemeral, and may disappear in the future.
            <br />
            <br />
            The following notice applies to intermediate builds:
            <br />
            &ldquo;This is an intermediate build made available for testing purposes only. The code is untested and presumed incompatible with the Java SE specification.
            You should not deploy or write to this code, but instead use the tested and certified Java SE compatible version of the code that is available at <a href='https://adoptium.net'>adoptium.net</a>.
            Redistribution of any Intermediate Build must retain this notice.&rdquo;
            <br />
            <br />
            <p class='text-warning'>These builds are unsupported and not for use in production.</p>
          </div>
          <div className='btn-group'>
            <LocalizedLink to='/temurin/releases' className='btn btn-primary m-3'>
              {/* <Trans>Latest Releases</Trans> <FaArrowCircleRight /> */}
            </LocalizedLink>
            <LocalizedLink to='/temurin/archive' className='btn btn-secondary m-3'>
              {/* <Trans>Release Archive</Trans> <FaArrowCircleRight /> */}
            </LocalizedLink>
          </div>
        </div>
      </div>
    </div>
    <VersionSelector updater={getAssetsForVersion} releaseType='ea' Table={TemurinNightlyTable} />
    <ChecksumModal />
  </section>
)

export default TemurinReleases

export const Head = () => (
  <Seo title='Nightly Builds' />
)
