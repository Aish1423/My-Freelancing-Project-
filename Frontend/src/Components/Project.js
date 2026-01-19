import { Link } from 'react-router-dom'

export default function Project() {
  return (
    <>
  {/* Project Start */}
  <div className="container-fluid project">
    <div className="container">
      <div
        className="text-center mx-auto pb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 800 }}
      >
        <h4 className="text-primary">Our Projects</h4>
        <h1 className="display-4">Explore Our Latest Projects</h1>
      </div>
      <div
        className="project-carousel owl-carousel wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="project-item h-100 wow fadeInUp" data-wow-delay="0.1s">
          <div className="project-img">
            <img
              src="/assets/img/projects-1.jpg"
              className="img-fluid w-100 rounded"
              alt="Image"
            />
          </div>
          <div className="project-content bg-light rounded p-4">
            <div className="project-content-inner">
              <div className="project-icon mb-3">
                <i className="fas fa-chart-line fa-4x text-primary" />
              </div>
              <p className="text-dark fs-5 mb-3">Business Growth</p>
              <Link to="#" className="h4">
                Freelancing Website Business Growth For Your Company 
              </Link>
              <div className="pt-4">
                <Link className="btn btn-light rounded-pill py-3 px-5" to="#">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="project-item h-100 wow fadeInUp" data-wow-delay="0.3s">
          <div className="project-img">
            <img
              src="/assets/img/projects-1.jpg"
              className="img-fluid w-100 rounded"
              alt="Image"
            />
          </div>
          <div className="project-content bg-light rounded p-4">
            <div className="project-content-inner">
              <div className="project-icon mb-3">
                <i className="fas fa-signal fa-4x text-primary" />
              </div>
              <p className="text-dark fs-5 mb-3">Marketing Strategy</p>
              <Link to="#" className="h4">
                 
              </Link>
              <div className="pt-4">
                <Link className="btn btn-light rounded-pill py-3 px-5" to="#">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="project-item h-100">
          <div className="project-img">
            <img
              src="/assets/img/projects-1.jpg"
              className="img-fluid w-100 rounded"
              alt="Image"
            />
          </div>
          <div className="project-content bg-light rounded p-4">
            <div className="project-content-inner">
              <div className="project-icon mb-3">
                <i className="fas fa-signal fa-4x text-primary" />
              </div>
              <p className="text-dark fs-5 mb-3">Marketing Strategy</p>
              <Link to="#" className="h4">
                {/* Product Sailing Marketing Strategy For Improve Business */}
              </Link>
              <div className="pt-4">
                <Link className="btn btn-light rounded-pill py-3 px-5" to="#">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Project End */}
</>

  )
}
