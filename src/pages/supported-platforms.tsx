import * as React from 'react'
import { graphql } from 'gatsby'

import { FaCheck, FaTimes, FaDocker } from 'react-icons/fa'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

import versions from '../json/supported-versions.json'
import { versionsActive } from '../util/defaults'

const SupportedPlatformsPage = () => {
    const validator = (platform, version) => {
        switch(true) {
            case (platform.exclude && platform.exclude.includes(version)):
                return <FaTimes />
            case (platform.include && platform.include.includes(version)):
                return <FaCheck />
            case (platform.include && !platform.include.includes(version)):
                return <FaTimes />
            case (platform.docker):
                return <><FaCheck/> <FaDocker /></>
            default:
                return <FaCheck/>
        }
    }
    return (
    <Layout>
        <section className='py-5 text-center container'>
            <div className='row py-lg-5'>
                <div className='col-lg-12 col-md-10 mx-auto'>
                    <h1 className='fw-light'>Temurin&trade; Supported Platforms</h1>
                    <p className='lead text-muted text-start'>This section lists the operating systems that are supported with the latest release of Eclipse Temurin.</p>
                    <p className='lead text-muted text-start pt-2'><FaCheck/> - Supported, <FaDocker/> - Docker image available, <FaTimes/> - Not supported</p>
                        <table className="table table-hover py-2">
                            <thead className='bg-grey'>
                                <tr>
                                    <th className="tableblock halign-center valign-middle" rowSpan={2}><p className="tableblock">Operating System</p></th>
                                    <th className="tableblock halign-center valign-top" colSpan={versionsActive.length}><p className="tableblock">Eclipse Temurin Version</p></th>
                                </tr>
                                <tr>
                                    { versionsActive.map((version, index) => (
                                        <th key={`verion-list-${index}`} className="tableblock halign-center valign-middle">
                                            <p className="tableblock">{version}</p>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            { Object.keys(versions).map((os) => (
                                <tbody key={os}>
                                    <tr className='bg-grey'>
                                        <th className="tableblock halign-center valign-middle" colSpan={5}><p className="tableblock">{os}</p></th>
                                    </tr>
                                    {Object.keys(versions[os]).map((platform) => (
                                        <tr key={`${os}-${platform}`}>
                                            <td className="tableblock halign-center valign-middle"><p className="tableblock">{platform}</p></td>
                                            { versionsActive.map((version, index) => (
                                                <td key={index} className="tableblock halign-center valign-middle">
                                                    <p className="tableblock">
                                                        {validator(versions[os][platform], version)}
                                                    </p>
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            ))}
                        </table>
                    <div className='text-start pt-3'>
                        <p>1. These builds should work on any distribution with glibc version 2.12 or higher.</p>
                        <p>2. These builds should work on any distribution with glibc version 2.17 or higher.</p>
                        <p>3. JDK8 on s390 has no JIT so is unsupported.</p>
                        <p>4. These builds should work on macOS 10.12 or higher.</p>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
    )
}   

export default SupportedPlatformsPage

export const Head = () => (
  <Seo title='Temurin Supported Platforms' />
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
  }
`
