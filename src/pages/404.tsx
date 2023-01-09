import * as React from 'react'

import Seo from '../components/Seo'

const NotFoundPage = () => (
  <div className='container text-center my-5'>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
)

export default NotFoundPage

export const Head = () => (
  <Seo title='404: Not found' />
)

