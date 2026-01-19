import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    let navigate = useNavigate()
    useEffect(() => {
        const token = sessionStorage.getItem("token")
        // const userType = sessionStorage.getItem("userType")

        setIsLoggedIn(!!token)

        // if (userType !== "3") {
        //     navigate("/Login")
        // }
    }, [navigate])

    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        if (confirmLogout) {
            sessionStorage.clear();
            setIsLoggedIn(false);
            navigate("/Login");
        }
    };
    return (
        <>
            {/* Topbar Start */}
            <div className="container-fluid topbar px-0 d-none d-lg-block">
                <div className="container px-0">
                    <div className="row gx-0 align-items-center" style={{ height: 45 }}>
                        <div className="col-lg-8 text-center text-lg-start mb-lg-0">
                            <div className="d-flex flex-wrap">
                                <Link to="#" className="text-muted me-4">
                                    <i className="fas fa-map-marker-alt text-primary me-2" />
                                    Find A Location
                                </Link>
                                <Link to="#" className="text-muted me-4">
                                    <i className="fas fa-phone-alt text-primary me-2" />
                                    +91 9779040691
                                </Link>
                                <Link to="#" className="text-muted me-0">
                                    <i className="fas fa-envelope text-primary me-2" />
                                    aishwaryaknant16@gmail.com
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center text-lg-end">
                            <div className="d-flex align-items-center justify-content-end">
                                <Link
                                    to="#"
                                    className="btn btn-primary btn-square rounded-circle nav-fill me-3"
                                >
                                    <i className="fab fa-facebook-f text-white" />
                                </Link>
                                <Link
                                    to="#"
                                    className="btn btn-primary btn-square rounded-circle nav-fill me-3"
                                >
                                    <i className="fab fa-twitter text-white" />
                                </Link>
                                <Link
                                    to="#"
                                    className="btn btn-primary btn-square rounded-circle nav-fill me-3"
                                >
                                    <i className="fab fa-instagram text-white" />
                                </Link>
                                <Link
                                    to="#"
                                    className="btn btn-primary btn-square rounded-circle nav-fill me-0"
                                >
                                    <i className="fab fa-linkedin-in text-white" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}


            {/* Navbar & Hero Start */}
            <div className="container-fluid sticky-top px-0">
                <div
                    className="position-absolute bg-dark"
                    style={{ left: 0, top: 0, width: "100%", height: "100%" }}
                ></div>
                <div className="container px-0">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-white py-3 px-4">
                        <Link to="/" className="navbar-brand p-0">
                            <h1 className="text-primary m-0">
                                <i className="fas fa-donate me-3" />
                                SkillLinker 
                            </h1>
                            {/* <img src="img/logo.png" alt="Logo"> */}
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse"
                        >
                            <span className="fa fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0">
                                <Link to="/" className="nav-item nav-link active">
                                    About
                                </Link>
                                {/* <Link to="/Bde/ViewAllClient" className="nav-item nav-link">
                                    Clients
                                </Link> */}
                                <Link to="/ManageBdeCategory" className="nav-item nav-link active">
                                    Category
                                </Link>
                                <Link to="/ViewAllProject" className="nav-item nav-link">
                                    Projects
                                </Link>
                                {/* <div className="nav-item dropdown">
                                    <Link
                                        to="#"
                                        className="nav-link dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                    >
                                        Bid
                                    </Link>
                                    <div className="dropdown-menu m-0">
                                        <Link to="" className="dropdown-item">
                                            Add
                                        </Link>
                                        <Link to="" className="dropdown-item">
                                            All
                                        </Link>
                                        <Link to="" className="dropdown-item">
                                            View Single Bid
                                        </Link>
                                        <Link to="" className="dropdown-item">
                                            Update Bid
                                        </Link>
                                    </div>
                                </div> */}
                                <Link to={"/BidHistory"} className="nav-item nav-link">
                                    Bid History
                                </Link>
                                <div className="nav-item dropdown">
                                    <Link
                                        to=""
                                        className="nav-link dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                    >
                                        Profile
                                        {/* <i class="bi bi-person"></i> */}
                                    </Link>
                                    <div className="dropdown-menu m-0">
                                        <Link to="/UpdateBde" className="dropdown-item">
                                            Update Profile
                                        </Link>
                                        <Link to="/ChangePassword" className="dropdown-item">
                                            Change Password
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center flex-nowrap pt-xl-0">
                                {/* <button
                                    className="btn btn-primary btn-md-square mx-2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#searchModal"
                                >
                                    <i className="fas fa-search" />
                                </button> */}
                                {/* <Link
                                    to="/AddBde"
                                    className="btn btn-primary rounded-pill text-white py-2 px-4 ms-2 flex-wrap flex-sm-shrink-0"
                                >
                                    Register
                                </Link> */}
                                {!isLoggedIn ? (
                                    <Link to="/Login" className='btn btn-primary rounded-pill text-white py-2 px-4 ms-2 flex-wrap flex-sm-shrink-0'>Login</Link>
                                ) : (
                                    <button onClick={handleLogout} className="btn btn-primary rounded-pill text-white py-2 px-4 ms-2 flex-wrap flex-sm-shrink-0">
                                        Logout
                                    </button>
                                )}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* Navbar & Hero End */}
            {/* Modal Search Start */}
            <div
                className="modal fade"
                id="searchModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h4 className="modal-title mb-0" id="exampleModalLabel">
                                Search by keyword
                            </h4>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body d-flex align-items-center">
                            <div className="input-group w-75 mx-auto d-flex">
                                <input
                                    type="search"
                                    className="form-control p-3"
                                    placeholder="keywords"
                                    aria-describedby="search-icon-1"
                                />
                                <span id="search-icon-1" className="input-group-text p-3">
                                    <i className="fa fa-search" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal Search End */}
        </>

    )
}
