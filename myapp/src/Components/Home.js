import React from 'react';
import Picture1 from '../assets/pic1.jpg';
import '../Components/Home.css';
import { NavLink } from "react-router-dom";

const Home = props => {
    return (
        <>
            <header className = "header">
                <nav className = "headerContents">
                    <NavLink to = "/events">EVENTS</NavLink>
                    <NavLink to = "/gallery">GALLERY</NavLink>
                    <NavLink to = "/sponsors">SPONSORS</NavLink>
                    <NavLink to = "/social-campaign">SOCIAL CAMPAIGN</NavLink>
                    <NavLink to = "/meet-the-team">MEET THE TEAM</NavLink>
                </nav>
            </header>
            <img src = {Picture1} className = "Image1" alt = "neon"/>
        </>
    );
}

export default Home;