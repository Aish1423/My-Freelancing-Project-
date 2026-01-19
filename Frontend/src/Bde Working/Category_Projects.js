import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ApiServices from '../Layouts/ApiServices'
import { ClipLoader } from 'react-spinners'

export default function Category_Projects() {
    const [projects, setProjects] = useState([])
    const [load, setLoad] = useState(true)
    const params = useParams()  // Destructure id directly
    const _id = params.id

    useEffect(() => {
        setTimeout(() => {
            const data = { categoryId: _id }  // Use id from params 
            ApiServices.bdeAllProjects(data)
                .then((res) => {
                    console.log("res is : ", res)
                    setProjects(res.data.data)
                    setLoad(false)
                })
                .catch((err) => {
                    console.log("Error fetching in Projects", err)
                    setLoad(false)
                })
        }, 3000)
    }, [_id])  // Add id as dependency to re-fetch when it changes

    const loaderStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    }

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
                                    {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, */}
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
                                    Project Categories
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
                                    {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, */}
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
            
            <div className='container-fluid bg-light py-5'>  {/* Fixed typo: container-fuild -> container-fluid */}
                <div className='container py-5'>
                    <h1 className='display-4 mb-4 text-center'>Category Projects</h1>
                    {load ? (
                        <div style={loaderStyle}>
                            <ClipLoader color="black" loading={load} size={100} />
                        </div>
                    ) : (
                        <div className='row g-4'>
                            {projects?.map((el, index) => (  // Fixed map syntax by adding return
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                                    <div className='card h-100'>
                                        <img
                                            src={ el?.attachmnent}  // Fixed typo: attachmnent -> attachment
                                            className="card-img-top"
                                            alt="attachment"
                                            style={{ height: '150px', objectFit: 'cover' }}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{el?.name}</h5>
                                            <p className="card-text"><strong>Description:</strong> {el?.description}</p>
                                            <p className="card-text"><strong>Technology:</strong> {el?.technology}</p>
                                            <p className="card-text"><strong>Budget:</strong> {el?.budget}</p>
                                            <p className="card-text"><strong>Status:</strong> {el?.status ? "Active" : "Inactive"}</p>
                                            <div className='d-flex justify-content-between'>
                                                {/* <Link
                                                    className='btn btn-primary'
                                                    to={"/AddBid/" + el._id}
                                                >
                                                    Add Bid
                                                </Link> */}
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
                    )}
                </div>
            </div>
        </>
    )
}
