"use client";
import Link from "next/link";


export default function Team() {

    return (
        <>
            <main className="main">
                <div className="page-title accent-background">
                    <div className="container d-lg-flex justify-content-between align-items-center">
                        <h1 className="mb-2 mb-lg-0">Team</h1>
                        <nav className="breadcrumbs">
                            <ol>
                                <li><Link href="index.html">Home</Link></li>
                                <li className="current">Team</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <section id="team" className="team section">

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

            </main>
        </>
    );
}