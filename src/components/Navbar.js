import React from "react";
import Logo from "../images/airbnb-logo.png"
import "./Navbar.css"
export default function Navbar () {
    return(
        <nav>
            <img className="nav--logo" src={Logo}/>
        </nav>
    )
}