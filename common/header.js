import Link from "next/link";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import {useRouter} from 'next/router';

const Header = () => {

  const router = useRouter();

  const [loginStatus, setLoginStatus] = useState();
  useEffect(() => {
    setLoginStatus(localStorage.getItem("loginStatus"));
    console.log(loginStatus);
  });

  const logoutFn = () => {
    localStorage.removeItem("loginStatus");
    localStorage.removeItem("username");
    localStorage.removeItem("name");
    router.reload('/courses');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/altudo-logo.png" width="200" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/facilities">
                  Facilities
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/batches">
                  Courses/Batches
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/alluser">
                  All user
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/register">
                  Register
                </Link>
              </li>

              {!loginStatus && (
              <>  
              <li className="nav-item">
              <Link className="nav-link" href="/login">
                Login
              </Link>
            </li>  
              </>
               )}
               {loginStatus && (
              <>  
              <li className="nav-item">
                <Link className="nav-link" href="#" onClick={logoutFn}>
                  Logout
                </Link>
              </li>
              </>
               )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
