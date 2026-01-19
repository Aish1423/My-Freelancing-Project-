import React, { useEffect, useState } from 'react';
import ApiServices from '../Layouts/ApiServices';
import { Link, useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';

export default function View_AllProjects() {
    const [projectData, setProjectData] = useState([]);
    const [load, setLoad] = useState(true);
    const [deleteLoad, setDeleteLoad] = useState(false)
    const nav = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            ApiServices.projectAll({clientId:sessionStorage.getItem("clientId")})
                .then((res) => {
                    console.log("res is ", res);
                    setProjectData(res.data.data);
                    setLoad(false);
                })
                .catch((err) => {
                    console.log("err is", err);
                    setLoad(false);
                });
        }, 3000);
    }, []);
    function deleteFun(id){
        if(window.confirm("Are you sure to delete this Project ??")){
            setDeleteLoad(true)
            let data = {
                _id : id
            }
            ApiServices.deleteProject(data)
            .then((res)=>{
                console.log(res)
                toast.success(res.data.message)
                setTimeout(()=>{
                    ApiServices.projectAll()
                    .then((res)=>{
                        console.log("Response is :",res)
                        setProjectData(res.data.data)
                        setLoad(false)
                    })
                    .catch((err)=>{
                        console.log("res is ",err)
                        setLoad(false)
                    })
                    setDeleteLoad(false)
                },3000)
            })
            .catch((err)=>{
                console.log(err)
                toast.error("Something went wrong")
                setDeleteLoad(false)
            })
        }
    }

    const handleEditClick = (id) => {
        setLoad(true);
        setTimeout(() => {
            nav("/Client/UpdateProject/" + id);
        }, 2500);
    };

    const loaderStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    };

    const cardStyle = {
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
    };

    const hoverStyle = {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
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
                    
            <div className="container-fluid contact bg-light py-5">
                <div className="container py-5">
                    <h1 className="display-4 mb-4 text-center wow fadeInLeft">Manage Projects</h1>
                    {load || deleteLoad ? (
                        <div style={loaderStyle}>
                            <ClipLoader color="black" loading={load || deleteLoad} size={100} />
                        </div>
                    ) : (
                        <div className="row g-4">
                            {projectData.map((el, index) => (
                                <div
                                    className="col-12 col-sm-6 col-md-4 col-lg-3"
                                    key={index}
                                >
                                    <div
                                        className="card h-100"
                                        style={cardStyle}
                                        onMouseEnter={(e) =>
                                            (e.currentTarget.style.transform = hoverStyle.transform) ||
                                            (e.currentTarget.style.boxShadow = hoverStyle.boxShadow)
                                        }
                                        onMouseLeave={(e) =>
                                            (e.currentTarget.style.transform = 'scale(1)') ||
                                            (e.currentTarget.style.boxShadow = 'none')
                                        }
                                    >
                                        <img
                                            src={ el?.attachmnent}
                                            className="card-img-top"
                                            alt="attachment"
                                            style={{ height: '150px', objectFit: 'cover' }}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{el.name}</h5>
                                            <p className="card-text">
                                                <strong>Description:</strong> {el.description}
                                            </p>
                                            <p className="card-text">
                                                <strong>Budget:</strong> {el.budget}
                                            </p>
                                            <p className="card-text">
                                                <strong>Technology:</strong> {el.technology}
                                            </p>
                                            <p className="card-text">
                                                <strong>Status:</strong> {el.status ? "Active" : "Inactive"}
                                            </p>
                                            <div className="d-flex justify-content-between">
                                                <button
                                                    className="btn btn-success"
                                                    onClick={() => handleEditClick(el._id)}
                                                >
                                                    Edit
                                                </button>
                                                <Link className="btn btn-danger" onClick={()=> {deleteFun(el._id)}}>
                                                    Delete
                                                </Link>
                                                <Link
                                                    className="btn btn-primary"
                                                    to={"/Client/BidDetails/" + el._id}
                                                >
                                                    View <i className="fa fa-eye"></i>
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
    );
}
