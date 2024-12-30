import React from "react";
import { Link, NavLink } from 'react-router-dom';

function NavigationBar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand ms-auto" to="/">Kevin's Personal Website</Link>
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
              <ul className="navbar-nav ms-auto">
                <li className="nav-item me-4">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item me-4">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item me-4">
                  <Link className="nav-link" to="/skills">Skills</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
}

export default NavigationBar;