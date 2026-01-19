import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ApiServices from '../Layouts/ApiServices';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function Add_Category() {
    var[name,setName]=useState("")
    var[thumbnail,setThumbnail]=useState("")
    const nav = useNavigate();
    function chnageImage(e){
        console.log(e.target.files[0]);
        setThumbnail(e.target.files[0])
    }

    const handleForm = (e)=> {
        e.preventDefault();
        let data = new FormData();
        data.append("name",name)
        data.append("thumbnail",thumbnail)
        // ApiServices.categoryAdd(data)
        ApiServices.AddCategory(data)
        .then((res)=>{
            console.log("after adding category res  ",res);
            if(res.data.success) {
                toast.success(res.data?.message)
                setName("")
                setThumbnail("")
            }
            else{
                toast.error(res.data.message)
            }
        })
        .catch(err=>{
            console.log(err)
            toast.error("Something went wrong!!")
        })
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
                    <h1 className="display-4 mb-4 text-center wow fadeInLeft">Add Category</h1>
                    <div className="row g-5 align-items-center">
                        <div className="offset-md-3 col-md-6 wow fadeInRight text-center" data-wow-delay="0.3s">
                            <form onSubmit={handleForm}>
                                <div className='row g-3'>
                                    <div className='col-12'>
                                        <div className='form-floating'>
                                            <input
                                                type='text'
                                                className='form-control'
                                                id='name'
                                                placeholder='Name'
                                                onChange={(e) => { setName(e.target.value) }}
                                                value={name}
                                            />
                                            <label htmlFor='name'>Name</label>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='form-floating'>
                                            <input
                                                type='file'
                                                className='form-control'
                                                id='thumbnail'
                                                placeholder='thumbnail'
                                                onChange={chnageImage}
                                            />
                                            <label htmlFor='thumbnail'>Thumbnail</label>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type='submit'>
                                                Add Category
                                            </button><br />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
