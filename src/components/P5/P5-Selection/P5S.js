import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

import './P5S.css';
import { CharacterLinks } from './CharacterLinks';

class P5S extends React.Component {
    render() {
        return ( 
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <div className = "P5S-items" >
                <h1 className="p5-header">Persona 5</h1>
                
                <div className = "char-list">
                    {CharacterLinks.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link to={item.url}>
                                    <img src={item.image} className={item.cName} alt={item.alt}/>
                                </Link>
                            </li>
                        )
                    })}
                </div>
                <div className="p5-video-bg">
                    <video autoPlay loop muted><source src={"/p5-images/starlight.mp4"} type="video/mp4" /></video>
                </div>
            </div>
            </motion.div>
        )
    }
}

export default P5S