// components/Navbar.js
import React from 'react';
import Link from "next/link";

const Navbar = () => {
    return (
        <header id="header" className="header d-flex align-items-center sticky-top">
        <div className="container position-relative d-flex align-items-center">
          <Link href="/" className="logo d-flex align-items-center me-auto">
            <h1 className="sitename">Codedium</h1><span>.</span>
          </Link>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li><Link href="/" className="active">Home</Link></li>
              <li className="dropdown">
                <Link href="/about"><span>About</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                <ul>
                  <li><Link href="/team">Team</Link></li>
                  <li><Link href="/testimonials">Testimonials</Link></li>
                </ul>
              </li>
              <li><Link href="/services">Services</Link></li>
       
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </header>
    );
};

export default Navbar;