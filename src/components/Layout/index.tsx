import * as React from 'react'
import PropTypes from 'prop-types'
import SSRProvider from 'react-bootstrap/SSRProvider'

import NavBar from '../NavBar'
import Banner from '../Banner'
import Footer from '../Footer'
import './layout.scss'

const LocaleContext = React.createContext({locale: {}})

const Layout = ({ children, pageContext: { locale } }) => (
  <LocaleContext.Provider value={{ locale }}>
    <SSRProvider>
      <div
        className='container-fluid p-0'
        style={{
          backgroundColor: 'var(--bg)',
          color: 'var(--text-normal)',
          transition: 'color 0.2s ease-out, background 0.2s ease-out'
        }}
      >
        <NavBar />
        <Banner />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </SSRProvider>
  </LocaleContext.Provider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export { Layout, LocaleContext }
