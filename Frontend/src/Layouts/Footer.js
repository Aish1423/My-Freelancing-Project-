import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* Footer Start */}
      <div
        className="container-fluid footer py-5 wow fadeIn"
        data-wow-delay="0.2s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <div className="footer-item">
                  <h4 className="text-white mb-4">Newsletter</h4>
                  <p className="mb-3"></p>
                  <div className="position-relative mx-auto rounded-pill">
                    <input
                      className="form-control rounded-pill w-100 py-3 ps-4 pe-5"
                      type="text"
                      placeholder="Enter your email"
                    />
                    <button
                      type="button"
                      className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2"
                    >
                      SignUp
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Explore</h4>
                <Link to="#">
                  <i className="fas fa-angle-right me-2" /> Home
                </Link>
                <Link to="#">
                  <i className="fas fa-angle-right me-2" /> Services
                </Link>
                <Link to="#">
                  <i className="fas fa-angle-right me-2" /> About Us
                </Link>
                <Link to="#">
                  <i className="fas fa-angle-right me-2" /> Latest Projects
                </Link>
                {/* <Link to="#">
              <i className="fas fa-angle-right me-2" /> testimonial
            </Link>
            <Link to="#">
              <i className="fas fa-angle-right me-2" /> Our Team
            </Link>
            <Link to="#">
              <i className="fas fa-angle-right me-2" /> Contact Us
            </Link> */}
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Contact Info</h4>
                <Link to="">
                  <i className="fa fa-map-marker-alt me-2" /> O7 Services, Bus
                  Stand Jalandhar, Punjab, India
                </Link>
                <Link to="">
                  <i className="fas fa-envelope me-2" />{" "}
                  aishwaryaknant16@gmail.com
                </Link>
                <Link to="">
                  <i className="fas fa-envelope me-2" /> angellaish0@gmail.com
                </Link>
                <Link to="">
                  <i className="fas fa-phone me-2" /> +91 9779040691
                </Link>
                <Link to="" className="mb-3">
                  <i className="fas fa-print me-2" /> +91 7889214240
                </Link>
                <div className="d-flex align-items-center">
                  {/* <Link className="btn btn-light btn-md-square me-2" to="">
                <i className="fab fa-facebook-f" />
              </Link> */}
                  <Link
                    className="btn btn-light btn-md-square me-2"
                    to="https://github.com/Aish1423"
                  >
                    <i className="fab fa-github" />
                  </Link>
                  <Link className="btn btn-light btn-md-square me-2" to="">
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link
                    className="btn btn-light btn-md-square me-0"
                    to="https://www.linkedin.com/in/aishwarya-313171256/"
                  >
                    <i className="fab fa-linkedin-in" />
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item-post d-flex flex-column">
            <h4 className="text-white mb-4">Popular Post</h4>
            <div className="d-flex flex-column mb-3">
              <p className="text-uppercase text-primary mb-2">Investment</p>
              <Link to="#" className="text-body">
                Revisiting Your Investment &amp; Distribution Goals
              </Link>
            </div>
            <div className="d-flex flex-column mb-3">
              <p className="text-uppercase text-primary mb-2">Business</p>
              <Link to="#" className="text-body">
                Dimensional Fund Advisors Interview with Director
              </Link>
            </div>
            <div className="footer-btn text-start">
              <Link to="#" className="btn btn-light rounded-pill px-4">
                View All Post <i className="fa fa-arrow-right ms-1" />
              </Link>
            </div>
          </div>
        </div> */}
          </div>
        </div>
      </div>
      {/* Footer End */}
      {/* Copyright Start */}
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-start mb-md-0">
              <span className="text-body">
                <Link to="#" className="border-bottom text-primary">
                  SkillLinker
                </Link>
                , All right reserved.
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end text-body">
              Designed By{" Aishwarya "}
              {/* Distributed By{" "} */}
              <Link className="border-bottom text-primary" to=""></Link>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright End */}
    </>
  );
}
