import React from "react";
import Typed from "react-typed"; 

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Web Development and Websites Promotions</h1>
                <Typed className="typed-text"
                    strings={["Web Design", "Web Development", "Projects Management"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop />
                <a href="#" className="btn-main-offer">Contact Me</a>

            </div>
        </div>
    )
}

export default Header
