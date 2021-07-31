import React from 'react'
import { useHistory } from 'react-router';


export default function Dashboard() {
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
                        <h1 className="text-light"><a href="">Admin Panel</a></h1>
                        
                    </div>
                    <nav className="nav-menu">
                        <ul>
                            <li className="active"><a href="" onClick={e => { handleRoute(e, '/') }}><i className="bx bx-home" /> <span>Home</span></a></li>
                            <li><a href="" onClick={e => { handleRoute(e, '/admin/about') }}><i className="bx bx-user" /> <span>About</span></a></li>
                            <li><a href="" onClick={e => { handleRoute(e, '/admin/skills') }}><i className="bx bx-file-blank" /> <span>Skills</span></a></li>
                            <li><a href="" onClick={e => { handleRoute(e, '/admin/portfolios') }}><i className="bx bx-book-content" /> Portfolios</a></li>
                            <li><a href="" onClick={e => { handleRoute(e, '/admin/addportfolio') }}><i className="bx bx-book-content" /> Add Portfolio</a></li>
                            <li><a href="" onClick={e => { handleRoute(e, '/admin/contact') }}><i className="bx bx-envelope" /> Contact</a></li>
                        </ul>
                    </nav>{/* .nav-menu */}
                    <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu" /></button>
                </div>
            </header>
        )
    }
