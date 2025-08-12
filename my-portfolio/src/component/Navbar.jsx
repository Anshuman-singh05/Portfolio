import React from 'react';
import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Step 1: Icons import karo

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">My Portfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Step 2: ms-auto ke saath align-items-center add karo */}
          <ul className="navbar-nav ms-auto align-items-center">
            {["home", "about", "projects", "blog", "contact"].map((section) => (
              <li className="nav-item" key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  activeClass="active" // Active link ko highlight karne ke liye
                  spy={true}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
            
            {/* Step 3: Social media links add karo */}
            <li className="nav-item ms-lg-3">
              <a 
                href="https://github.com/your-github-username" // Apna GitHub username daalo
                target="_blank" 
                rel="noopener noreferrer" 
                className="nav-link"
                title="GitHub"
              >
                <FaGithub size={22} />
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="https://linkedin.com/in/your-linkedin-profile" // Apna LinkedIn profile daalo
                target="_blank" 
                rel="noopener noreferrer" 
                className="nav-link"
                title="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
