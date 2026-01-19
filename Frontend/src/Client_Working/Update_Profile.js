import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ApiServices from '../Layouts/ApiServices';
import { toast, ToastContainer } from 'react-toastify';
import { ClipLoader } from 'react-spinners';

export default function Update_Profile() {
    const [Name, setName] = useState("");
    const [CompanyName, setCompanyName] = useState("");
    const [Address, setAddress] = useState("");
    const [Country, setCountry] = useState("");
    const [Contact, setContact] = useState("");
    const [Email, setEmail] = useState("");
    const [loading, setLoading] = useState(false); // Loader state

    const nav = useNavigate();

    useEffect(() => {
        let data = { _id: sessionStorage.getItem("clientId") };
        console.log(sessionStorage.getItem("clientId"));

        ApiServices.singleClient(data)
            .then((res) => {
                if (res.data.success) {
                  console.log("res is ", res);
                    setName(res.data.data.name);
                    setCompanyName(res.data.data.companyName);
                    setAddress(res.data.data.address);
                    setCountry(res.data.data.country);
                    setContact(res.data.data.contact);
                    setEmail(res.data.data.email);
                } else {
                    toast.error("Failed to fetch client details");
                }
            })
            .catch((err) => console.error("Error fetching client data:", err));
    }, []);

    const handleForm = (e) => {
        e.preventDefault();
        setLoading(true); // Start loader

        let data = {
            _id: sessionStorage.getItem("clientId"),
            name: Name,
            companyName: CompanyName,
            address: Address,
            country: Country,
            contact: Contact,
            email: Email,
        };

        ApiServices.updateClient(data)
            .then((res) => {
                setTimeout(() => {
                    setLoading(false); // Stop loader after 3 seconds

                    if (res.data.success) {
                      console.log("res is", res);
                        toast.success(res.data.message);
                        setName("");
                        setCompanyName("");
                        setAddress("");
                        setCountry("");
                        setContact("");
                        setEmail("");
                    } else {
                        toast.error(res.data.message);
                    }
                }, 3000); // Loader timeout
            })
            .catch((err) => {
                setLoading(false);
                console.error("Error updating profile:", err);
                toast.error("Something went wrong!");
            });
    };
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

            <div className="container-fluid contact bg-light py-5">
                <div className="container py-5">
                    <h1 className="display-4 mb-4 text-center">Update Profile</h1>
                    
                    {loading ? (
                        // Show Loader when submitting
                        <div style={loaderStyle}>
                            <ClipLoader color="black" loading={loading} size={100} />
                            {/* <p>Updating profile...</p> */}
                        </div>
                    ) : (
                        <div className="row g-5 align-items-center">
                            <div className="offset-md-3 col-md-6 text-center">
                                <form onSubmit={handleForm}>
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="name"
                                                    placeholder="Name" onChange={(e) => setName(e.target.value)}
                                                    value={Name} required />
                                                <label htmlFor="name">Name</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="companyName"
                                                    placeholder="Company Name" onChange={(e) => setCompanyName(e.target.value)}
                                                    value={CompanyName} required />
                                                <label htmlFor="companyName">Company Name</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="address"
                                                    placeholder="Address" onChange={(e) => setAddress(e.target.value)}
                                                    value={Address} required />
                                                <label htmlFor="address">Address</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="country"
                                                    placeholder="Country" onChange={(e) => setCountry(e.target.value)}
                                                    value={Country} required />
                                                <label htmlFor="country">Country</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="email"
                                                    placeholder="Email" onChange={(e) => setEmail(e.target.value)}
                                                    value={Email} required />
                                                <label htmlFor="email">Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="tel" className="form-control" id="contact"
                                                    placeholder="Contact" onChange={(e) => setContact(e.target.value)}
                                                    value={Contact} required />
                                                <label htmlFor="contact">Contact</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">
                                                Update Profile
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <ToastContainer />
        </>
    );
}
