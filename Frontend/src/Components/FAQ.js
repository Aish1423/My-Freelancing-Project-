import React from 'react'
import { Link } from 'react-router-dom'

export default function FAQ() {
  return (
    <>
  {/* FAQ Start */}
  <div className="container-fluid faq py-5">
    <div className="container py-5">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
          <div className="pb-5">
            <h4 className="text-primary">FAQs</h4>
            <h1 className="display-4">Get the Answers to Common Questions</h1>
          </div>
          <div className="accordion bg-light rounded p-4" id="accordionExample">
            <div className="accordion-item border-0 mb-4">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button text-dark fs-5 fw-bold rounded-top"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseTOne"
                >
                  What Does a Financial Advisor Do?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body my-2">
                  <h5>Dolor sit amet consectetur adipisicing elit.</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    nemo impedit, sapiente quis illo quia nulla atque maxime
                    fuga minima ipsa quae cum consequatur, sit, delectus
                    exercitationem odit officiis maiores! Neque, quidem corrupti
                    modi architecto eos saepe incidunt dignissimos rerum.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item border-0 mb-4">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed text-dark fs-5 fw-bold rounded-top"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What industries do you specialize in?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body my-2">
                  <h5>Dolor sit amet consectetur adipisicing elit.</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    nemo impedit, sapiente quis illo quia nulla atque maxime
                    fuga minima ipsa quae cum consequatur, sit, delectus
                    exercitationem odit officiis maiores! Neque, quidem corrupti
                    modi architecto eos saepe incidunt dignissimos rerum.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item border-0 mb-4">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed text-dark fs-5 fw-bold rounded-top"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Can you guarantee for growth?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body my-2">
                  <h5>Dolor sit amet consectetur adipisicing elit.</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    nemo impedit, sapiente quis illo quia nulla atque maxime
                    fuga minima ipsa quae cum consequatur, sit, delectus
                    exercitationem odit officiis maiores! Neque, quidem corrupti
                    modi architecto eos saepe incidunt dignissimos rerum.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item border-0 mb-0">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed text-dark fs-5 fw-bold rounded-top"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  What makes your business plans so special?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body my-2">
                  <h5>Dolor sit amet consectetur adipisicing elit.</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    nemo impedit, sapiente quis illo quia nulla atque maxime
                    fuga minima ipsa quae cum consequatur, sit, delectus
                    exercitationem odit officiis maiores! Neque, quidem corrupti
                    modi architecto eos saepe incidunt dignissimos rerum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
          <div className="faq-img RotateMoveRight rounded">
            <img
              src="/assets/img/faq-img.jpg"
              className="img-fluid rounded w-100"
              alt="Image"
            />
            <Link
              className="faq-btn btn btn-primary rounded-pill text-white py-3 px-5"
              to="#"
            >
              Read More Q &amp; A <i className="fas fa-arrow-right ms-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* FAQ End */}
</>

  )
}
