import React from 'react'
import { Link } from 'react-router-dom'

export default function Service() {
  return (
    <>
  {/* Services Start */}
  <div className="container-fluid service py-5">
    <div className="container py-5">
      <div
        className="text-center mx-auto pb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 800 }}
      >
        <h4 className="text-primary">Our Services</h4>
        <h1 className="display-4">
          {" "}
          Offering the Best Consulting &amp; Investa Services
        </h1>
      </div>
      <div className="row g-4 justify-content-center text-center">
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="service-item bg-light rounded">
            <div className="service-img">
              <img
                src="/assets/img/service-1.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div className="service-content text-center p-4">
              <div className="service-content-inner">
                <Link to="#" className="h4 mb-4 d-inline-flex text-start">
                  <i className="fas fa-donate fa-2x me-2" /> Business Strategy
                  Invesments
                </Link>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Earum nobis est sapiente natus officiis maxime
                </p>
                <Link className="btn btn-light rounded-pill py-2 px-4" to="#">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="service-item bg-light rounded">
            <div className="service-img">
              <img
                src="/assets/img/service-2.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div className="service-content text-center p-4">
              <div className="service-content-inner">
                <Link to="#" className="h4 mb-4 d-inline-flex text-start">
                  <i className="fas fa-donate fa-2x me-2" /> Consultancy &amp;
                  Advice
                </Link>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Earum nobis est sapiente natus officiis maxime
                </p>
                <Link className="btn btn-light rounded-pill py-2 px-4" to="#">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="service-item bg-light rounded">
            <div className="service-img">
              <img
                src="/assets/img/service-4.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div className="service-content text-center p-4">
              <div className="service-content-inner">
                <Link to="#" className="h4 mb-4 d-inline-flex text-start">
                  <i className="fas fa-donate fa-2x me-2" /> Invesments Planning
                </Link>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Earum nobis est sapiente natus officiis maxime
                </p>
                <Link className="btn btn-light rounded-pill py-2 px-4" to="#">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.7s"
        >
          <div className="service-item bg-light rounded">
            <div className="service-img">
              <img
                src="/assets/img/service-3.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div className="service-content text-center p-4">
              <div className="service-content-inner">
                <Link to="#" className="h4 mb-4 d-inline-flex text-start">
                  <i className="fas fa-donate fa-2x me-2" /> Private Client
                  Investment
                </Link>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Earum nobis est sapiente natus officiis maxime
                </p>
                <Link className="btn btn-light rounded-pill py-2 px-4" to="#">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <Link
            className="btn btn-primary rounded-pill py-3 px-5 wow fadeInUp"
            data-wow-delay="0.1s"
            to="#"
          >
            Services More
          </Link>
        </div>
      </div>
    </div>
  </div>
  {/* Services End */}
</>

  )
}
