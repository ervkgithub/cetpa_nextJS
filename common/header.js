import Link from "next/link";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

const Header = () => {
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
                <Link className="nav-link" href="/contact">
                  Cotact us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Logout
                </Link>
              </li>
            </ul>
            {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
