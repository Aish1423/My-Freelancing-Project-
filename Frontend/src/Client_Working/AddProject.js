import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ApiServices from '../Layouts/ApiServices'
import { toast, ToastContainer } from 'react-toastify'

export default function AddProject() {
    var [Name, setName] = useState("")
    var [Category, setCategory] = useState([])
    var [SelectedCategory, setSelectedCategory] = useState("") // For selected category
    var [Description, setDescription] = useState("")
    var [Budget, setBudget] = useState("")
    var [Technology, setTechnology] = useState("")
    var [attachmnent, setAttachment] = useState("")

    useEffect(() => {
        ApiServices.categoryAll()
            .then((res) => {
                console.log(res);
                setCategory(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const nav = useNavigate();
    function chnageImage(e) {
        console.log(e.target.files[0]);
        setAttachment(e.target.files[0])
    }

    const handleForm = (e) => {
        e.preventDefault();
        let data = new FormData();
        data.append("name", Name)
        data.append("categoryId", SelectedCategory) 
        data.append("description", Description)
        data.append("budget", Budget)
        data.append("technology", Technology)
        data.append("clientId",sessionStorage.getItem("clientId"))
        data.append("attachmnent",attachmnent)

        ApiServices.projectAdd(data)
            .then((res) => {
                console.log(res);
                if (res.data.success) {
                    toast.success(res.data.message)
                    setName("")
                    setSelectedCategory("") 
                    setDescription("")
                    setBudget("")
                    setTechnology("")
                    setAttachment("")
                } else {
                    toast.error(res.data.message)
                }
            })
            .catch(err => {
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
                    <h1 className="display-4 mb-4 text-center wow fadeInLeft">Add Project</h1>
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
                                                value={Name}
                                            />
                                            <label htmlFor='name'>Name</label>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='form-floating'>
                                            <select
                                                className='form-control'
                                                id='category'
                                                onChange={(e) => { setSelectedCategory(e.target.value) }} // Use setSelectedCategory
                                                value={SelectedCategory} // Use SelectedCategory
                                            >
                                                <option value="">Select Category</option>
                                                {
                                                    Category.map((el) => (
                                                        <option key={el._id} value={el._id}>{el.name}</option>
                                                    ))
                                                }
                                            </select>
                                            <label htmlFor='category'>Category</label>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='form-floating'>
                                            <input
                                                type='text'
                                                className='form-control'
                                                id='description'
                                                placeholder='Description'
                                                onChange={(e) => { setDescription(e.target.value) }}
                                                value={Description}
                                            />
                                            <label htmlFor='description'>Description</label>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='form-floating'>
                                            <input
                                                type='text'
                                                className='form-control'
                                                id='budget'
                                                placeholder='Budget'
                                                onChange={(e) => { setBudget(e.target.value) }}
                                                value={Budget}
                                            />
                                            <label htmlFor='budget'>Budget</label>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='form-floating'>
                                            <input
                                                type='text'
                                                className='form-control'
                                                id='technology'
                                                placeholder='Technology'
                                                onChange={(e) => { setTechnology(e.target.value) }}
                                                value={Technology}
                                            />
                                            <label htmlFor='technology'>Technology</label>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='form-floating'>
                                            <input
                                                type='file'
                                                className='form-control'
                                                id='attachment'
                                                placeholder='attachmnent'
                                                onChange={chnageImage}
                                            />
                                            <label htmlFor='attachment'>attachmnent</label>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type='submit'>
                                                Add Project
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