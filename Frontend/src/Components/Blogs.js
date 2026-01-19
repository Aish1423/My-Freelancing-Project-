import React from 'react'
import { Link } from 'react-router-dom'

export default function Blogs() {
    return (
        <>
            {/* Blog Start */}
            <div className="container-fluid blog pb-5">
                <div className="container pb-5">
                    <div
                        className="text-center mx-auto pb-5 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 800 }}
                    >
                        <h4 className="text-primary">Our Blogs</h4>
                        <h1 className="display-4">Latest Articles &amp; News from the Blogs</h1>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <div
                            className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            <div
                                className="blog-item bg-light rounded p-4"
                                style={{ backgroundImage: "url(img/bg.png)" }}
                            >
                                <div className="mb-4">
                                    <h4 className="text-primary mb-2">Investment</h4>
                                    <div className="d-flex justify-content-between">
                                        <p className="mb-0">
                                            <span className="text-dark fw-bold">On</span> Mar 14, 2024
                                        </p>
                                        <p className="mb-0">
                                            <span className="text-dark fw-bold">By</span> Mark D. Brock
                                        </p>
                                    </div>
                                </div>
                                <div className="project-img">
                                    <img
                                        src="/assets/img/blog-1.jpg"
                                        className="img-fluid w-100 rounded"
                                        alt="Image"
                                    />
                                    <div className="blog-plus-icon">
                                        <Link
                                            to="img/blog-1.jpg"
                                            data-lightbox="blog-1"
                                            className="btn btn-primary btn-md-square rounded-pill"
                                        >
                                            <i className="fas fa-plus fa-1x" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="my-4">
                                    <Link to="#" className="h4">
                                        Revisiting Your Investment &amp; Distribution Goals
                                    </Link>
                                </div>
                                <Link className="btn btn-primary rounded-pill py-2 px-4" to="#">
                                    Explore More
                                </Link>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
                            data-wow-delay="0.3s"
                        >
                            <div
                                className="blog-item bg-light rounded p-4"
                                style={{ backgroundImage: "url(img/bg.png)" }}
                            >
                                <div className="mb-4">
                                    <h4 className="text-primary mb-2">Business</h4>
                                    <div className="d-flex justify-content-between">
                                        <p className="mb-0">
                                            <span className="text-dark fw-bold">On</span> Mar 14, 2024
                                        </p>
                                        <p className="mb-0">
                                            <span className="text-dark fw-bold">By</span> Mark D. Brock
                                        </p>
                                    </div>
                                </div>
                                <div className="project-img">
                                    <img
                                        src="/assets/img/blog-2.jpg"
                                        className="img-fluid w-100 rounded"
                                        alt="Image"
                                    />
                                    <div className="blog-plus-icon">
                                        <Link
                                            to="img/blog-2.jpg"
                                            data-lightbox="blog-2"
                                            className="btn btn-primary btn-md-square rounded-pill"
                                        >
                                            <i className="fas fa-plus fa-1x" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="my-4">
                                    <Link to="#" className="h4">
                                        Dimensional Fund Advisors Interview with Director
                                    </Link>
                                </div>
                                <Link className="btn btn-primary rounded-pill py-2 px-4" to="#">
                                    Explore More
                                </Link>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
                            data-wow-delay="0.5s"
                        >
                            <div
                                className="blog-item bg-light rounded p-4"
                                style={{ backgroundImage: "url(img/bg.png)" }}
                            >
                                <div className="mb-4">
                                    <h4 className="text-primary mb-2">Consulting</h4>
                                    <div className="d-flex justify-content-between">
                                        <p className="mb-0">
                                            <span className="text-dark fw-bold">On</span> Mar 14, 2024
                                        </p>
                                        <p className="mb-0">
                                            <span className="text-dark fw-bold">By</span> Mark D. Brock
                                        </p>
                                    </div>
                                </div>
                                <div className="project-img">
                                    <img
                                        src="/assets/img/blog-3.jpg"
                                        className="img-fluid w-100 rounded"
                                        alt="Image"
                                    />
                                    <div className="blog-plus-icon">
                                        <Link
                                            to="img/blog-3.jpg"
                                            data-lightbox="blog-3"
                                            className="btn btn-primary btn-md-square rounded-pill"
                                        >
                                            <i className="fas fa-plus fa-1x" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="my-4">
                                    <Link to="#" className="h4">
                                        Interested in Giving Back this year? Here are some tips
                                    </Link>
                                </div>
                                <Link className="btn btn-primary rounded-pill py-2 px-4" to="#">
                                    Explore More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Blog End */}
        </>

    )
}
