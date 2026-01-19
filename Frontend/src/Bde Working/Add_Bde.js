import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ApiServices from '../Layouts/ApiServices'
import { toast, ToastContainer } from 'react-toastify'

export default function Add_Bde() {
    var [name, setName] = useState("")
    var [email, setEmail] = useState("")
    var [password, setPassword] = useState("")
    var [Category, setCategory] = useState([]) 
    var [SelectedCategory, setSelectedCategory] = useState("") 
    var [contact, setContact] = useState("")

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

    const handleForm = (e) => {
        e.preventDefault();
        let data = {
            name: name,
            email: email,
            password: password,
            preferenceId: SelectedCategory, // Use preferenceId instead of category
            contact: contact
        };
        ApiServices.addBde(data)
            .then((res) => {
                console.log(res);
                if (res.data.success) {
                    toast.success(res.data.message)
                    setName("")
                    setEmail("")
                    setPassword("")
                    setSelectedCategory("")
                    setContact("")
                } else {
                    toast.error(res.data.message)
                }
            })
            .catch(err => {
                console.log(err);
                toast.error("Something went wrong!!");
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
                    <ToastContainer />
                    <h1 className='display-4 mb-4 text-center wow fadeInLeft'>Add BDE</h1>
                    <div className='row g-5 align-items-center'>
                        <div className='offset-md-3 col-md-6 wow fadeInRight text-center' data-wow-delay='0.3s'>
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
                                                type='email'
                                                className='form-control'
                                                id='email'
                                                placeholder='Email'
                                                onChange={(e) => { setEmail(e.target.value) }}
                                                value={email}
                                            />
                                            <label htmlFor='email'>Email</label>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='form-floating'>
                                            <input
                                                type='password'
                                                className='form-control'
                                                id='password'
                                                placeholder='Password'
                                                onChange={(e) => { setPassword(e.target.value) }}
                                                value={password}
                                            />
                                            <label htmlFor='password'>Password</label>
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
                                                type='phone'
                                                className='form-control'
                                                id='phone'
                                                placeholder='Phone'
                                                onChange={(e) => { setContact(e.target.value) }}
                                                value={contact}
                                            />
                                            <label htmlFor='contact'>Contact</label>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <div className='col-12'>
                                            <button className='btn btn-primary w-100 py-3' type='submit'>
                                                Add BDE
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