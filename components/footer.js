// components/Navbar.js
import React from 'react';
import Link from "next/link";
import Script from 'next/script'

const Footer = () => {
  return (
    <>
<footer id="footer" className="footer dark-background">
  <div className="container footer-top">
    <div className="row gy-4">
      {/* Company Info */}
      <div className="col-lg-4 col-md-6 footer-about">
        <Link href="/" className="logo d-flex align-items-center">
          <span className="sitename">Company</span>
        </Link>
        <div className="footer-contact pt-3">
          <p>Faisalabad</p>
          <p>Punjab, Pakistan</p>
          <p className="mt-3">
            <strong>Phone:</strong> <span>+92 3202043300</span>
          </p>
          <p>
            <strong>Email:</strong> <span>codediumnet@gmail.com</span>
          </p>
        </div>
        <div className="social-links d-flex mt-4">
          <Link href="#"><i className="bi bi-twitter-x"></i></Link>
          <Link href="#"><i className="bi bi-facebook"></i></Link>
          <Link href="#"><i className="bi bi-instagram"></i></Link>
          <Link href="#"><i className="bi bi-linkedin"></i></Link>
        </div>
      </div>

      {/* Useful Links */}
      <div className="col-lg-2 col-md-3 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About us</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/">Terms of service</Link></li>
          <li><Link href="/">Privacy policy</Link></li>
        </ul>
      </div>

      {/* Our Services */}
      <div className="col-lg-2 col-md-3 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><Link href="/services">Web Design</Link></li>
          <li><Link href="/services">Web Development</Link></li>
          <li><Link href="/services">Product Management</Link></li>
          <li><Link href="/services">Marketing</Link></li>
          <li><Link href="/services">Graphic Design</Link></li>
        </ul>
      </div>

      {/* Newsletter */}
      <div className="col-lg-4 col-md-12 footer-newsletter">
        <h4>Our Newsletter</h4>
        <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
        <form action="/index.php" method="post" className="php-email-form">
          <div className="newsletter-form d-flex">
            <input type="email" name="email" className="form-control me-2" placeholder="Your email" required />
            <input type="submit" value="Subscribe" className="btn btn-primary" />
          </div>
          <div className="loading">Loading</div>
          <div className="error-message"></div>
          <div className="sent-message">Your subscription request has been sent. Thank you!</div>
        </form>
      </div>
    </div>

    {/* Copyright */}
    <div className="container text-center mt-4">
      <p>
        © <span>Copyright</span> <strong className="px-1 sitename">2025 Codedium</strong>
        <span> All Rights Reserved</span>
      </p>
    </div>
  </div>
</footer>


      {/* Scripts */}
      <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/php-email-form/validate.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/aos/aos.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/glightbox/js/glightbox.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/waypoints/noframework.waypoints.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/swiper/swiper-bundle.min.js" strategy="afterInteractive" />
      {/* <Script src="/assets/js/main.js" strategy="afterInteractive" /> */}
    </>
  );
};

export default Footer;