import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import './Home.css';
import P5_logo from "./images/P5_logo.png";
import P5R_logo from "./images/P5R_logo.png";
import Tokyo from "./images/tokyo.mp4";

class Home extends React.Component{

    render(){
        return(
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2.5}}>
            <motion.div exit={{opacity: 0}} transition={{duration: 1}}>
            <nav className='HomeItems'>
                <div className="header-box">
                    <h1 className="home-header">The Confidant Guide for Persona 5 / Persona 5 Royal</h1>
                </div>
                <div className="home-logos">
                    <Link to="/p5">
                        <img src={P5_logo} className="p5-logo" alt="P5"/>
                    </Link>
                    <Link to="/p5r">
                        <img src={P5R_logo} className="p5r-logo" alt="P5R" />
                    </Link>
                </div>
                <div className="video-bg">
                    <video autoPlay loop muted><source src={Tokyo} type="video/mp4"/></video>
                </div>
            </nav>
            </motion.div>
            </motion.div>
        )
    }

}

export default Home