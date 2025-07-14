"use client";
import Link from "next/link";


export default function About() {

    return (
        <>

            <main className="main">

                <div className="page-title accent-background" >
                    <div className="container d-lg-flex justify-content-between align-items-center">
                        <h1 className="mb-2 mb-lg-0">About</h1>
                        <nav className="breadcrumbs">
                            <ol>
                                <li><Link href="index.html">Home</Link></li>
                                <li className="current">About</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <section id="about" className="about section" style={{marginTop:'60px'}}>

                    <div className="container">

                        <div className="row position-relative">

                            <div className="col-lg-7 about-img" data-aos="zoom-out" data-aos-delay="200"><img src="assets/img/about.jpg" /></div>

                            <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
                                <h2 className="inner-title">Consequatur eius et magnam</h2>
                                <div className="our-story">
                                    <h4>Est 1988</h4>
                                    <h3>Our Story</h3>
                                    <p>Inventore aliquam beatae at et id alias. Ipsa dolores amet consequuntur minima quia maxime autem. Quidem id sed ratione. Tenetur provident autem in reiciendis rerum at dolor. Aliquam consectetur laudantium temporibus dicta minus dolor.</p>
                                    <ul>
                                        <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commo</span></li>
                                        <li><i className="bi bi-check-circle"></i> <span>Duis aute irure dolor in reprehenderit in</span></li>
                                        <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea</span></li>
                                    </ul>
                                    <p>Vitae autem velit excepturi fugit. Animi ad non. Eligendi et non nesciunt suscipit repellendus porro in quo eveniet. Molestias in maxime doloremque.</p>

                                    <div className="watch-video d-flex align-items-center position-relative">
                                        <i className="bi bi-play-circle"></i>
                                        <Link href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox stretched-link">Watch Video</Link>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>
                <section id="team" className="team section light-background">

                    
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Our Team</h2>
                        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                    </div>
                    <div className="container">

                        <div className="row gy-4">

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                                <div className="team-member">
                                    <div className="member-img">
                                        <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" />
                                            <div className="social">
                                                <Link href=""><i className="bi bi-twitter-x"></i></Link>
                                                <Link href=""><i className="bi bi-facebook"></i></Link>
                                                <Link href=""><i className="bi bi-instagram"></i></Link>
                                                <Link href=""><i className="bi bi-linkedin"></i></Link>
                                            </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Walter White</h4>
                                        <span>Chief Executive Officer</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                                <div className="team-member">
                                    <div className="member-img">
                                        <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" />
                                            <div className="social">
                                                <Link href=""><i className="bi bi-twitter-x"></i></Link>
                                                <Link href=""><i className="bi bi-facebook"></i></Link>
                                                <Link href=""><i className="bi bi-instagram"></i></Link>
                                                <Link href=""><i className="bi bi-linkedin"></i></Link>
                                            </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Sarah Jhonson</h4>
                                        <span>Product Manager</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                                <div className="team-member">
                                    <div className="member-img">
                                        <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" />
                                            <div className="social">
                                                <Link href=""><i className="bi bi-twitter-x"></i></Link>
                                                <Link href=""><i className="bi bi-facebook"></i></Link>
                                                <Link href=""><i className="bi bi-instagram"></i></Link>
                                                <Link href=""><i className="bi bi-linkedin"></i></Link>
                                            </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>William Anderson</h4>
                                        <span>CTO</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                                <div className="team-member">
                                    <div className="member-img">
                                        <img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" />
                                            <div className="social">
                                                <Link href=""><i className="bi bi-twitter-x"></i></Link>
                                                <Link href=""><i className="bi bi-facebook"></i></Link>
                                                <Link href=""><i className="bi bi-instagram"></i></Link>
                                                <Link href=""><i className="bi bi-linkedin"></i></Link>
                                            </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Amanda Jepson</h4>
                                        <span>Accountant</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>
                <section id="skills" className="skills section">


                    <div className="container section-title" data-aos="fade-up">
                        <h2>Our Skills</h2>
                        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                    </div>

                    <div className="container" data-aos="fade-up" data-aos-delay="100">

                        <div className="row skills-content skills-animation">

                            <div className="col-lg-6">

                                <div className="progress">
                                    <span className="skill"><span>HTML</span> <i className="val">100%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill"><span>CSS</span> <i className="val">90%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill"><span>JavaScript</span> <i className="val">75%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-6">

                                <div className="progress">
                                    <span className="skill"><span>PHP</span> <i className="val">80%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill"><span>WordPress/CMS</span> <i className="val">90%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill"><span>Photoshop</span> <i className="val">55%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>
                <section id="clients" className="clients section">


                    <div className="container section-title" data-aos="fade-up">
                        <h2>Clients</h2>
                        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                    </div>

                    <div className="container" data-aos="fade-up" data-aos-delay="100">

                        <div className="row g-0 clients-wrap">

                            <div className="col-xl-3 col-md-4 client-logo">
                                <img src="assets/img/clients/client-1.png" className="img-fluid" alt="" />
                            </div>

                            <div className="col-xl-3 col-md-4 client-logo">
                                <img src="assets/img/clients/client-2.png" className="img-fluid" alt="" />
                            </div>

                            <div className="col-xl-3 col-md-4 client-logo">
                                <img src="assets/img/clients/client-3.png" className="img-fluid" alt="" />
                            </div>

                            <div className="col-xl-3 col-md-4 client-logo">
                                <img src="assets/img/clients/client-4.png" className="img-fluid" alt="" />
                            </div>

                            <div className="col-xl-3 col-md-4 client-logo">
                                <img src="assets/img/clients/client-5.png" className="img-fluid" alt="" />
                            </div>

                            <div className="col-xl-3 col-md-4 client-logo">
                                <img src="assets/img/clients/client-6.png" className="img-fluid" alt="" />
                            </div>

                            <div className="col-xl-3 col-md-4 client-logo">
                                <img src="assets/img/clients/client-7.png" className="img-fluid" alt="" />
                            </div>

                            <div className="col-xl-3 col-md-4 client-logo">
                                <img src="assets/img/clients/client-8.png" className="img-fluid" alt="" />
                            </div>

                        </div>

                    </div>

                </section>

            </main>
        </>
    );
}