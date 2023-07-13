import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from 'gatsby-plugin-react-i18next';
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

import './style.scss';

// @ts-ignore
import Logo from '../../images/adoptium-logo-dark.svg';

const isActive = ({ isCurrent }) => {
  return isCurrent && { className: "active" }
}

const ExactNavLink = props => (
  <Link getProps={isActive}{...props} />
)

const NavBar = (): JSX.Element => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
  
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleSubMenuClick = (name: string) => {
    // only make changes when in isMenuOpen is true
    if (isMenuOpen) {
      setActiveSubMenu(prevState => prevState === name ? null : name);
    }
  };

  return (
    <header className={`header-area ${isSticky ? 'header-sticky' : ''}`}>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
            <Link to="/" className="navbar-brand" style={{ marginTop: '2rem' }} aria-label="Homepage Link">
              <Logo alt="Adoptium Logo" style={{ height: '2.5em' }} />
            </Link>
              <ul className={`nav ${isMenuOpen ? 'active' : ''}`}>
              <li>
                <ExactNavLink
                  to="/"
                >
                  Home
                </ExactNavLink>
              </li>
              <li>
                <ExactNavLink
                  to="/marketplace"
                >
                  Marketplace
                </ExactNavLink>
              </li>
              <li>
                <ExactNavLink
                  to="/docs"
                >
                  Documentation
                </ExactNavLink>
              </li>
              <li>
                <ExactNavLink
                  to="/docs/faq"
                >
                  FAQ
                </ExactNavLink>
              </li>
              <li className="has-sub" onClick={() => handleSubMenuClick("Projects")}>
                <a>Projects{activeSubMenu === 'Projects' ? <RiArrowDropUpLine size={30}/> : <RiArrowDropDownLine size={30} />}</a>
                <ul className={`sub-menu ${activeSubMenu === 'Projects' ? 'active' : ''}`}>
                  <li><ExactNavLink className="dropdown-item" to="/temurin">Eclipse Temurin</ExactNavLink></li>
                  <li><ExactNavLink className="dropdown-item" to="/aqavit">Eclipse AQAvit</ExactNavLink></li>
                  <li><ExactNavLink className="dropdown-item" to="/jmc">Eclipse Mission Control</ExactNavLink></li>
                </ul>
              </li>
              <li className="has-sub" onClick={() => handleSubMenuClick("Further Information")}>
                <a>Further Information{activeSubMenu === 'Further Information' ? <RiArrowDropUpLine size={30}/> : <RiArrowDropDownLine size={30} />}</a>
                <ul className={`sub-menu ${activeSubMenu === 'Further Information' ? 'active' : ''}`}>
                  <li><ExactNavLink className="dropdown-item" to="/support">Support</ExactNavLink></li>
                  <li><ExactNavLink className="dropdown-item" to="/news">News & Events</ExactNavLink></li>
                  <li><ExactNavLink className="dropdown-item" to="/about">About</ExactNavLink></li>
                  <li><ExactNavLink className="dropdown-item" to="/members">Members</ExactNavLink></li>
                  <li><ExactNavLink className="dropdown-item" to="/sponsors">Sponsors</ExactNavLink></li>
                  <li><ExactNavLink className="dropdown-item" to="/temurin/buttons">Promote</ExactNavLink></li>
                  <li><a className="dropdown-item" href="https://api.adoptium.net">API</a></li>
                  <li><ExactNavLink className="dropdown-item" to="/blog">Blog</ExactNavLink></li>
                  <li><ExactNavLink className="dropdown-item" to="/support-us">Support Us</ExactNavLink></li>
                  <li><a className="dropdown-item" href="https://status.adoptium.net">Status</a></li>
                </ul>
              </li>
            </ul>
            <a
              className={`menu-trigger ${isMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="menu-trigger"
            >
              <span>Menu</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </header>
  )
}

NavBar.propTypes = {
  siteTitle: PropTypes.string,
}

NavBar.defaultProps = {
  siteTitle: ``,
}

export default NavBar
