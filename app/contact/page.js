"use client";
import Link from "next/link";

export default function Blog() {

    return (
        <>

            <main class="main">
                <div class="page-title accent-background">
                    <div class="container d-lg-flex justify-content-between align-items-center">
                        <h1 class="mb-2 mb-lg-0">Contact</h1>
                        <nav class="breadcrumbs">
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li class="current">Contact</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <section id="contact" class="contact section">

                    <div class="mb-5">
                    </div>

                    <div class="container" data-aos="fade">

                        <div class="row gy-5 gx-lg-5">

                            <div class="col-lg-4">

                                <div class="info">
                                    <h3>Get in touch</h3>
                                    <p>We’d love to hear from you! Whether you have a question, need support, or want to collaborate, feel free to reach out to our team.</p>

                                    <div class="info-item d-flex">
                                        <i class="bi bi-geo-alt flex-shrink-0"></i>
                                        <div>
                                            <h4>Location:</h4>
                                            <p>Faisalabad Punjab, Pakistan</p>
                                        </div>
                                    </div>

                                    <div class="info-item d-flex">
                                        <i class="bi bi-envelope flex-shrink-0"></i>
                                        <div>
                                            <h4>Email:</h4>
                                            <p>codediumnet@gmail.com</p>
                                        </div>
                                    </div>

                                    <div class="info-item d-flex">
                                        <i class="bi bi-phone flex-shrink-0"></i>
                                        <div>
                                            <h4>Call:</h4>
                                            <p>+92 320 20433 00</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div class="col-lg-8">
                                <form action="#" method="post" role="form" class="php-email-form">
                                    <div class="row">
                                        <div class="col-md-6 form-group">
                                            <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required="" />
                                        </div>
                                        <div class="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required="" />
                                        </div>
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required="" />
                                    </div>
                                    <div class="form-group mt-3">
                                        <textarea class="form-control" name="message" placeholder="Message" required="" ></textarea>
                                    </div>
                                    <div class="my-3">
                                        <div class="loading">Loading</div>
                                        <div class="error-message"></div>
                                        <div class="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div class="text-center"><button type="submit">Send Message</button></div>
                                </form>
                            </div>

                        </div>

                    </div>

                </section>

            </main>
        </>
    );
}