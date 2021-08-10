import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { get } from '../../services/HttpClient';

export default function Header() {

  const [info, setInfo] = useState([]);

  const routerHistory = useHistory();

  const handleRoute = (e, url) => {
    e.preventDefault();    
    routerHistory.push(url)
  }

  useEffect(() => {
    get('getabout').then(res => setInfo(res[0]));
  }, [])
  
  return (
    <header id="header">
      <div className="d-flex flex-column">
        <div className="profile">
          <img src={info.image} alt="" className="img-fluid rounded-circle" />
          <h1 className="text-light"><a href="index.html">{info.name}</a></h1>
          <div className="social-links mt-3 text-center">
            <a href="/#" className="twitter"><i className="bx bxl-twitter" /></a>
            <a href="/#" className="facebook"><i className="bx bxl-facebook" /></a>
            <a href="/#" className="github"><i className="bx bxl-github" /></a>
            <a href="/#" className="linkedin"><i className="bx bxl-linkedin" /></a>
          </div>
        </div>
        <nav className="nav-menu">
          <ul>
            {/* <li className="active"><a href="index.html"><i className="bx bx-home" /> <span>Home</span></a></li> */}
            <li><a href="" onClick={e => { handleRoute(e, '/') }}><i className="bx bx-home" /> <span>Home</span></a></li>
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
