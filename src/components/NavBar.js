import React from "react";
import logo from "../cover.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; 

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">  
            <a className="navbar-brand" className="logo" href="#"><img src={ logo } alt="logo..."/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={ {color:"#fff"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About Me</a>
                        </li>
                        <li className="nav-item">
        <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
        <a className="nav-link" href="#">How</a>
                        </li>
                        <li className="nav-item">
        <a className="nav-link" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
        <a className="nav-link" href="#">Contacts</a>
      </li>
     
    </ul>
   
                </div>
            </div> 
</nav>
    )
}

export default NavBar
