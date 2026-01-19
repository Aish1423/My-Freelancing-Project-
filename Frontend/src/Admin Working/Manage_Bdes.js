import React, { useEffect, useState } from 'react';
import ApiServices from '../Layouts/ApiServices';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { ClipLoader } from 'react-spinners';

export default function Manage_Bdes() {
  var [bdeData, setBdeData] = useState([]);
  var [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      ApiServices.bdeAll()
        .then((res) => {
          console.log("res is", res.data.data);
          setBdeData(res.data.data);
          setLoad(false);
        })
        .catch((err) => {
          console.log("err is", err);
          setLoad(false);
        });
    }, 3000);
  }, []);

  const changeStatusFalse = (_id) => {
    if (window.confirm("Are you sure to Change the Status??")) {
      console.log("soft False delete call", _id);
      let data = {
        _id: _id,
        status: "false"
      };
      setLoad(true);
      ApiServices.bdeStatus(data)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            toast.success(res.data.message);
          } else {
            toast.error(res.data.message);
          }
          setTimeout(() => {
            ApiServices.bdeAll()
              .then((res) => {
                console.log("res is", res.data.data);
                setBdeData(res.data.data);
                setLoad(false);
              })
              .catch((err) => {
                console.log("err is", err);
                setLoad(false);
              });
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something went wrong");
          setLoad(false);
        });
    };

  }

  const changeStatusTrue = (_id) => {
    if (window.confirm("Are you sure to Change the Status??")) {
      console.log("soft True delete call", _id);
      let data = {
        _id: _id,
        status: "true"
      };
      setLoad(true);
      ApiServices.bdeStatus(data)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            toast.success(res.data.message);
          } else {
            toast.error(res.data.message);
          }
          setTimeout(() => {
            ApiServices.bdeAll()
              .then((res) => {
                console.log("res is", res.data.data);
                setBdeData(res.data.data);
                setLoad(false);
              })
              .catch((err) => {
                console.log("err is", err);
                setLoad(false);
              });
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something went wrong");
          setLoad(false);
        });
    };

  }

  const loaderStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  };

  return (
    <>
     <div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="header-carousel-item-img-1">
                                <img src="/assets/img/carousel-1.jpg" className="d-block w-100" alt="Image" />
                            </div>
                            <div className='carousel-caption'>
                                <div className='carousel-caption-inner text-start p-3'>
                                    <h1 className='display-1 text-capitalize text-white mb-4 fadeInUp animate_animated' dataAnimation="fadeInUp" dataDelay="1.3s" style={{ animationDelay: "1.3s" }}>The most prestigious Investments company in worldwide.</h1>
                                    <p className='mb-5 fs-5 fadeInUp animate_animated' dataAnimation="fadeInUp" dataDelay="1.5s" style={{ animationDelay: "1.5s" }}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </p>
                                    <Link className='btn btn-primary rounded-pill py-3 px-5 mb-4 me-4 fadeInUp animate_animated' dataAnimation="fadeInUp" dataDelay="1.5s" style={{ animationDelay: "1.7s" }} to="">Apply Now</Link>
                                    <Link className='btn btn-primary rounded-pill py-3 px-5 mb-4 fadeInUp animate_animated' dataAnimation="fadeInUp" dataDelay="1.5s" style={{ animationDelay: "1.7s" }} to="">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="header-carousel-item-img-2">
                                <img src="/assets/img/carousel-2.jpg" className="d-block w-100" alt="Image" />
                            </div>
                            <div className='carousel-caption'>
                                <div className='carousel-caption-inner text-start p-3'>
                                    <h1 className='display-1 text-capitalize text-white mb-4 fadeInUp animate_animated' dataAnimation="fadeInUp" dataDelay="1.3s" style={{ animationDelay: "1.3s" }}>The most prestigious Investments company in worldwide.</h1>
                                    <p className='mb-5 fs-5 fadeInUp animate_animated' dataAnimation="fadeInUp" dataDelay="1.5s" style={{ animationDelay: "1.5s" }}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </p>
                                    <Link className='btn btn-primary rounded-pill py-3 px-5 mb-4 me-4 fadeInUp animate_animated' dataAnimation="fadeInUp" dataDelay="1.5s" style={{ animationDelay: "1.7s" }} to="">Apply Now</Link>
                                    <Link className='btn btn-primary rounded-pill py-3 px-5 mb-4 fadeInUp animate_animated' dataAnimation="fadeInUp" dataDelay="1.5s" style={{ animationDelay: "1.7s" }} to="">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="header-carousel-item-img-2">
                                <img src="/assets/img/carousel-3.jpg" className="d-block w-100" alt="Image" />
                            </div>
                            <div className='carousel-caption'>
                                <div className='carousel-caption-inner text-start p-3'>
                                    <h1 className='display-1 text-capitalize text-white mb-4 fadeInUp animate_animated' dataAnimation="fadeInUp" dataDelay="1.3s" style={{ animationDelay: "1.3s" }}>The most prestigious Investments company in worldwide.</h1>
                                    <p className='mb-5 fs-5 fadeInUp animate_animated' dataAnimation="fadeInUp" dataDelay="1.5s" style={{ animationDelay: "1.5s" }}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </p>
                                    <Link className='btn btn-primary rounded-pill py-3 px-5 mb-4 me-4 fadeInUp animate_animated' dataAnimation="fadeInUp" dataDelay="1.5s" style={{ animationDelay: "1.7s" }} to="">Apply Now</Link>
                                    <Link className='btn btn-primary rounded-pill py-3 px-5 mb-4 fadeInUp animate_animated' dataAnimation="fadeInUp" dataDelay="1.5s" style={{ animationDelay: "1.7s" }} to="">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
      <div className='container-fluid contact bg-light py-5'>
        <div className='container py-5'>
          <h1 className='display-4 mb-4 text-center wow fadeInLeft'>Manage BDE</h1>
          <div className='row g-5 align-items-center justify-content-center'>
            <div className='col-12'>
              {load ? (
                <div style={loaderStyle}>
                  <ClipLoader color='black' loading={load} size={100} />
                </div>
              ) : (
                <div className='table-responsive'>
                  <table className='table table-bordered wow fadeInRight'>
                    <thead>
                      <tr>
                        <th>Sr.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Status</th>
                        <th>View</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        bdeData?.map((el, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{el.name}</td>
                            <td>{el.email}</td>
                            <td>{el.contact}</td>
                            <td>{el.status === true ? "true" : "false"}</td>
                            <td>
                              <Link className="btn btn-primary" to={"/Admin/BdeBids/" + el._id} style={{ backgroundColor: "blue" }}>
                                View Bids <i className="fa fa-eye"></i>
                              </Link>
                            </td>
                            <td>
                              {el.status ? <Link className="btn btn-danger" style={{ backgroundColor: "red" }} onClick={() => { changeStatusFalse(el?._id) }}>Inactive</Link>
                                : <Link className="btn btn-success" style={{ backgroundColor: "green" }} onClick={() => { changeStatusTrue(el?._id) }}>Active</Link>}
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}


