import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ about, isLoading }) => {
  const [homeActive, setHomeActive] = useState(false);
  const [aboutActive, setAboutActive] = useState(false);
  const [projectsActive, setProjectsActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  useEffect(() => {
    setHomeActive(false);
    setAboutActive(false);
    setProjectsActive(false);
    setContactActive(false);
  }, []);

  const handleHomeNavbar = () => {
    setProjectsActive(false);
    setAboutActive(false);
    setContactActive(false);
    setHomeActive(true);
  };

  const handleAboutNavbar = () => {
    setProjectsActive(false);
    setHomeActive(false);
    setContactActive(false);
    setAboutActive(true);
  };

  const handleProjectsNavbar = () => {
    setHomeActive(false);
    setAboutActive(false);
    setContactActive(false);
    setProjectsActive(true);
  };

  const handleContactNavbar = () => {
    setHomeActive(false);
    setAboutActive(false);
    setProjectsActive(false);
    setContactActive(true);
  };

  const handleBrandClick = () => {
    setHomeActive(false);
    setAboutActive(false);
    setProjectsActive(false);
    setContactActive(false);
  };

  return !isLoading ? (
    <div className="navbar-bg">
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid ps-5 m-0 d-flex flex-row">
          <Link
            to="/"
            className="text-decoration-none"
            onClick={handleBrandClick}
          >
            <div className="align-items-center">
              <p className="navbar-brand fs-1 text-white p-0 m-0">Jason Chan</p>
            </div>
          </Link>
          <div className="d-flex flex-row justify-content-end rounded bg-white pt-0 mt-0">
            <button
              className="navbar-toggler border-0 w-100"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div className="d-flex flex-row justify-content-end">
                <span className="navbar-toggler-icon"></span>
              </div>
            </button>
          </div>

          <div
            className="collapse navbar-collapse justify-content-end me-2 m-0 p-0 navbar-dropdown ps-2"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-0 align-items-center pe-3">
              <li className="nav-item" key="navbar-home">
                <Link
                  to="/"
                  className="nav-link fs-5 text-white"
                  onClick={handleHomeNavbar}
                >
                  <p
                    className={`fs-5 text-white d-flex flex-column justify-content-center align-items-center m-0 p-0 px-1 mt-1 navbar-text ${
                      homeActive ? "navbar-active" : null
                    }`}
                  >
                    Home
                  </p>
                </Link>
              </li>
              <li className="nav-item" key="navbar-about">
                <Link
                  to="/about"
                  className="nav-link fs-5 text-white"
                  onClick={handleAboutNavbar}
                >
                  <p
                    className={`fs-5 text-white d-flex flex-column justify content-center align-items-center m-0 p-0 px-1 mt-1 navbar-text ${
                      aboutActive ? "navbar-active" : null
                    }`}
                  >
                    About
                  </p>
                </Link>
              </li>
              <li className="nav-item" key="navbar-projects">
                <Link
                  to="/projects"
                  className="nav-link fs-5 text-white"
                  onClick={handleProjectsNavbar}
                >
                  <p
                    className={`fs-5 text-white d-flex flex-column justify content-center align-items-center m-0 p-0 px-1 mt-1 navbar-text ${
                      projectsActive ? "navbar-active" : null
                    }`}
                  >
                    Projects
                  </p>
                </Link>
              </li>
              <li className="nav-item" key="navbar-contact">
                <Link
                  to="/contact"
                  className="nav-link fs-5 text-white"
                  onClick={handleContactNavbar}
                >
                  <p
                    className={`fs-5 text-white d-flex flex-column justify content-center align-items-center m-0 p-0 px-1 mt-1 navbar-text ${
                      contactActive ? "navbar-active" : null
                    }`}
                  >
                    Contact
                  </p>
                </Link>
              </li>
              <li className="nav-item" key="navbar-linkedin">
                <a href={about.linkedin} target="_blank" rel="noreferrer">
                  <img
                    src={require("../icons/linkedin.png")}
                    title="Linkedin - Opens in new tab"
                    alt="linkedin icon"
                    className="m-md-0 p-md-0 me-md-3 pt-2 mb-2 mt-1 pb-md-2 mt-md-1 ms-md-2"
                  />
                </a>
              </li>
              <li className="nav-item" key="navbar-github">
                <a href={about.github} target="_blank" rel="noreferrer">
                  <img
                    src={require("../icons/github.png")}
                    title="Github - Opens in new tab"
                    alt="github icon"
                    className="m-md-0 p-md-0 me-md-3 pt-2 mb-2 mt-1 pb-md-2 mt-md-1"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  ) : (
    <p className="pt-5">Page is Loading...</p>
  );
};

export default Navbar;
