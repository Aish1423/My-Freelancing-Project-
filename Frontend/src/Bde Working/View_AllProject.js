import React, { useEffect, useState } from 'react'
import ApiServices from '../Layouts/ApiServices'
import { Link } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'

export default function View_AllProject() {
    const [projectData, setProjectData] = useState([])
    const [load, setLoad] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            ApiServices.ViewAllProjects()
                .then((res) => {
                    console.log("res is", res.data.data)
                    setProjectData(res.data.data)
                    setLoad(false)
                })
                .catch((err) => {
                    console.log("error is", err)
                    setLoad(false)
                })
        }, 3000)
    }, [])

    const loaderStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    }

    return (
        <>
            {load ? (
                <div style={loaderStyle}>
                    <ClipLoader color='black' loading={load} size={100} />
                </div>
            ) : (
                <div>
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
                            <h1 className='display-4 mb-4 text-center'>Manage Projects</h1>
                            <div className='row g-4'>
                                {projectData?.map((el, index) => (
                                    <div className='col-12 col-sm-6 col-md-4 col-lg-3' key={index}>
                                        <div className='card h-100'>
                                            <img
                                                src={el?.categoryId?.thumbnail}
                                                className='card-img-top'
                                                alt='thumbnail'
                                                style={{ height: '150px', objectFit: 'cover' }}
                                            />
                                            <div className='card-body'>
                                                <h5 className='card-title'>{el.name}</h5>
                                                <p className='card-text'><strong>Category:</strong> {el.categoryId?.name}</p>
                                                <p className='card-text'><strong>Budget:</strong> {el.budget}</p>
                                                <p className='card-text'><strong>Client:</strong> {el.clientId?.name}</p>
                                                <p className='card-text'><strong>Status:</strong> {el.status ? "Active" : "Inactive"}</p>
                                                <div className='d-flex justify-content-between'>
                                                    <Link
                                                        className='btn btn-primary'
                                                        to={{
                                                            pathname: `/AddBid/${el._id}/${el.clientId?._id}`,
                                                            state: { clientId: el.clientId?._id }  // Pass clientId via state
                                                        }}
                                                    >
                                                        Add Bid
                                                    </Link>
                                                    <Link
                                                        className="btn btn-primary"
                                                        to={"/ViewBids/" + el._id}
                                                    >
                                                        View Bids <i className="fa fa-eye"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
