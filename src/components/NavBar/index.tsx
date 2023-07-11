import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from 'gatsby-plugin-react-i18next';

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
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

  return (
    <header className={`header-area ${isSticky ? 'header-sticky' : ''}`}>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
            <Link to="/" className="navbar-brand" style={{ marginTop: '2rem' }} aria-label="Homepage Link">
              <Logo alt="Adoptium Logo" style={{ height: '2.5em' }} />
            </Link>
              <ul className="nav">
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
              <li className="has-sub">
                <a>Projects</a>
                <ul className="sub-menu">
                  <li><ExactNavLink className="dropdown-item" to="/temurin">Eclipse Temurin</ExactNavLink></li>
                  <li><ExactNavLink className="dropdown-item" to="/aqavit">Eclipse AQAvit</ExactNavLink></li>
                  <li><ExactNavLink className="dropdown-item" to="/jmc">Eclipse Mission Control</ExactNavLink></li>
                </ul>
              </li>
              <li className="has-sub">
                <a>Further Information</a>
                <ul className="sub-menu">
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
            <a className='menu-trigger' onClick={toggleDropdown}>
              <span>Menu</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </header>
  )
}

const toggleDropdown = () => {
  // toggle class to active
  const menuTrigger = document.querySelector('.menu-trigger');
  menuTrigger && menuTrigger.classList.toggle('active');
  // set nav to diospaly block
  const nav = document.querySelector('.nav');
  nav && nav.classList.toggle('active');

  // collapse all sub menus unless they have been clicked
  const subMenus = document.querySelectorAll('.sub-menu');
  // set all sub menus to display none
  subMenus.forEach(subMenu => {
    // @ts-ignore
    subMenu.style.display = 'none';
    // add event listener to each parent li that has a sub menu
    subMenu && subMenu.parentNode && subMenu.parentNode.addEventListener('click', () => {
      // toggle the display of the sub menu
      // @ts-ignore
      subMenu.style.display = subMenu.style.display === 'none' ? 'block' : 'none';
    });
  });
}

NavBar.propTypes = {
  siteTitle: PropTypes.string,
}

NavBar.defaultProps = {
  siteTitle: ``,
}

export default NavBar
