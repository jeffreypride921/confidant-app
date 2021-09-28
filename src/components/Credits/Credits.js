import React from "react";
import {motion} from "framer-motion";
import './Credits.css';

class Credits extends React.Component{
    render(){
        return(
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}}  exit={{opacity: 0}} transition={{duration: 1}}>
            <div className="CreditsItems">
                <h1 className="credits-header">Credits</h1>
                <p className="author">Created by Jeffrey Pride</p>
                <div className="credit-list">
                    <p>Inspired from "Persona 5 Confidant Guide" by Adam Beck on HardcoreGamer</p>
                    <p>Home Page Background - "Pedestrians Crossing Road in Tokyo at Night" provided by Videvo</p>
                    <p>P5 and P5R Page Backgrounds - "Coloured Bokeh with Starlights" prvoided by Videvo</p>
                    <p>Game Logos and charcter artwork all belong to Atlus</p>
                </div>
                <p className="contact">Contact Email: jeffreypride921@gmail.com</p>
            </div>
            </motion.div>
        )
    }
}

export default Credits