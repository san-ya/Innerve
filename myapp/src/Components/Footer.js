import React from "react";
import './Footer.css';
import { FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
    return(
        <footer>
            <p>Copyright by Innerve, IGDTUW @ {new Date().getFullYear()}</p>
            <p>Follow us!!</p>
            <div className = "socMedia">
                <span><a href = "https://twitter.com/innerveigdtuw"><FaTwitter href = "https://twitter.com/innerveigdtuw" /></a></span>
                <span><a href = "https://www.instagram.com/innerveigdtuw/?hl=en"><FaInstagram href = "https://www.instagram.com/innerveigdtuw/?hl=en"/></a></span>
            </div>
        </footer>
    )
};

export default Footer;