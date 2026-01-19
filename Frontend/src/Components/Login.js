import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { toast, ToastContainer } from 'react-toastify';
import ApiServices from '../Layouts/ApiServices';

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [load, setLoad] = useState(false);
  const nav = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    setLoad(true);
    let data = { email, password };
    
    ApiServices.login(data)
      .then((res) => {
        if (res.data.success) {
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("_id", res.data.data?._id);
          sessionStorage.setItem("email", res.data.data?.email);
          sessionStorage.setItem("userType", res.data.data?.userType);
          sessionStorage.setItem("clientId", res.data.data?.clientId);
          sessionStorage.setItem("bdeId", res.data.data?.bidderId);
          toast.success(res.data.message);

          setTimeout(() => {
            if (res.data.data.userType === 1) nav("/Admin");
            if (res.data.data.userType === 2) nav("/Client");
            if (res.data.data.userType === 3) nav("/");
            setLoad(false);
          }, 3000);
        } else {
          toast.error(res.data.message);
          setLoad(false);
        }
      })
      .catch(() => {
        toast.error("Something went wrong!!");
        setLoad(false);
      });
  };

  const loaderStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: "50%"
  };

  return (
    <>
      <div className="container-fluid contact bg-light py-5">
        <div className="container py-5">
          <ClipLoader color='black' loading={load} size={100} cssOverride={loaderStyle}/>
          <ToastContainer/>
          <div className="row g-5 align-items-center">
            <div className="offset-md-3 col-md-6 wow fadeInRight text-center" data-wow-delay="0.3s">
              {!load && (
                <>
                  <h1 className="display-4 mb-4 text-center wow fadeInLeft">
                    Login
                  </h1>
                  <form onSubmit={handleForm}>
                    <div className="row g-3 align-items-center">
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Your Email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                          />
                          <label htmlFor="email">Your Email</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                          />
                          <label htmlFor="password">Password</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100 py-3" type='submit'>
                          Login
                        </button>
                        <p>Don't Have an Account Yet? <Link to="/AddBde">Register</Link></p>
                      </div>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}