import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      {/* About Start */}
      <div className="container-fluid about bg-light py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div
              className="col-lg-6 col-xl-5 wow fadeInLeft"
              data-wow-delay="0.1s"
            >
              <div className="about-img">
                {/* <img
              src="/assets/img/about-3.png"
              className="img-fluid w-100 rounded-top bg-white"
              alt="Image"
            />
            <img
              src="/assets/img/about-2.jpg"
              className="img-fluid w-100 rounded-bottom"
              alt="Image"
            /> */}
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-7 wow fadeInRight"
              data-wow-delay="0.3s"
            >
              <h4 className="text-primary">About Us</h4>
              <h1 className="display-5 mb-4">
                The Better Freelancing company in worldwide.
              </h1>
              <p className="text ps-4 mb-4">
                A freelancing website is an online platform that connects
                freelancers (independent contractors) with clients who need
                various services. These services can range from web development,
                graphic design, writing, and marketing to more specialized tasks
                like legal consulting or engineering. Freelancers create
                profiles showcasing their skills, experience, and portfolios,
                while clients post job listings or projects they need help with.
                The platform typically facilitates communication, project
                management, and payment processing between freelancers and
                clients, often taking a commission or fee for the service.
              </p>
              <div className="row g-4 justify-content-between mb-5">
                <div className="col-lg-6 col-xl-5">
                  <p className="text-dark">
                    <i className="fas fa-check-circle text-primary me-1" />{" "}
                    Strategy &amp; Consulting
                  </p>
                  <p className="text-dark mb-0">
                    <i className="fas fa-check-circle text-primary me-1" /> Idea
                    Process
                  </p>
                </div>
                <div className="col-lg-6 col-xl-7">
                  <p className="text-dark">
                    <i className="fas fa-check-circle text-primary me-1" />{" "}
                    problem Solving Rules
                  </p>
                  <p className="text-dark mb-0">
                    <i className="fas fa-check-circle text-primary me-1" />{" "}
                    Partnerships
                  </p>
                </div>
              </div>
              <div className="row g-4 justify-content-between mb-5">
                <div className="col-xl-5">
                  <Link
                    to="#"
                    className="btn btn-primary rounded-pill py-3 px-5"
                  >
                    Discover More
                  </Link>
                </div>
                {/* <div className="col-xl-7 mb-5">
              <div className="about-customer d-flex position-relative">
                <img
                  src="/assets/img/customer-img-1.jpg"
                  className="img-fluid btn-xl-square position-absolute"
                  style={{ left: 0, top: 0 }}
                  alt="Image"
                />
                <img
                  src="/assets/img/customer-img-2.jpg"
                  className="img-fluid btn-xl-square position-absolute"
                  style={{ left: 45, top: 0 }}
                  alt="Image"
                />
                <img
                  src="/assets/img/customer-img-3.jpg"
                  className="img-fluid btn-xl-square position-absolute"
                  style={{ left: 90, top: 0 }}
                  alt="Image"
                />
                <img
                  src="/assets/img/customer-img-1.jpg"
                  className="img-fluid btn-xl-square position-absolute"
                  style={{ left: 135, top: 0 }}
                  alt="Image"
                />
                <div
                  className="position-absolute text-dark"
                  style={{ left: 220, top: 10 }}
                >
                  <p className="mb-0">5m+ Trusted</p>
                  <p className="mb-0">Global Customers</p>
                </div>
              </div>
            </div> */}
              </div>
              <div className="row g-4 text-center align-items-center justify-content-center">
                <div className="col-sm-4">
                  <div className="bg-primary rounded p-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <span
                        className="counter-value fs-1 fw-bold text-dark"
                        data-toggle="counter-up"
                      >
                        32
                      </span>
                      <h4
                        className="text-dark fs-1 mb-0"
                        style={{ fontWeight: 600, fontSize: 25 }}
                      >
                        k+
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="text-white mb-0">Project Complete</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="bg-dark rounded p-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <span
                        className="counter-value fs-1 fw-bold text-white"
                        data-toggle="counter-up"
                      >
                        21
                      </span>
                      <h4
                        className="text-white fs-1 mb-0"
                        style={{ fontWeight: 600, fontSize: 25 }}
                      >
                        +
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="mb-0">Years Of Experience</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="bg-primary rounded p-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <span
                        className="counter-value fs-1 fw-bold text-dark"
                        data-toggle="counter-up"
                      >
                        97
                      </span>
                      <h4
                        className="text-dark fs-1 mb-0"
                        style={{ fontWeight: 600, fontSize: 25 }}
                      >
                        +
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="text-white mb-0">Team Members</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </>
  );
}
