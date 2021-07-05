import React from 'react'
import { useHistory } from 'react-router';

export default function Header() {
  const routerHistory = useHistory();
  const handleRoute = (e, url) => {
    e.preventDefault();    
    routerHistory.push(url)
  }

  
  return (
    <header id="header">
      <div className="d-flex flex-column">
        <div className="profile">
          <img src="styles/assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle" />
          <h1 className="text-light"><a href="index.html">Shantanu Jana</a></h1>
          <div className="social-links mt-3 text-center">
            <a href="/#" className="twitter"><i className="bx bxl-twitter" /></a>
            <a href="/#" className="facebook"><i className="bx bxl-facebook" /></a>
            <a href="/#" className="instagram"><i className="bx bxl-instagram" /></a>
            <a href="/#" className="linkedin"><i className="bx bxl-linkedin" /></a>
          </div>
        </div>
        <nav className="nav-menu">
          <ul>
            <li className="active"><a href="index.html"><i className="bx bx-home" /> <span>Home</span></a></li>
            <li><a href="" onClick={e => { handleRoute(e, '/about') }}><i className="bx bx-user" /> <span>About</span></a></li>
            <li><a href="" onClick={e => { handleRoute(e, '/skills') }}><i className="bx bx-file-blank" /> <span>Skills</span></a></li>
            <li><a href="" onClick={e => { handleRoute(e, '/portfolio') }}><i className="bx bx-book-content" /> Portfolio</a></li>
            <li><a href="" onClick={e => { handleRoute(e, '/contact') }}><i className="bx bx-envelope" /> Contact</a></li>
          </ul>
        </nav>{/* .nav-menu */}
        <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu" /></button>
      </div>
    </header>
  )
}
