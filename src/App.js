import React from 'react';
import './App.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'; 

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Credits from './components/Credits/Credits';
import P5S from './components/P5/P5-Selection/P5S';
import P5RS from './components/P5R/P5R-Selection/P5RS';
import Chariot from './components/P5/P5-Confidants/Chariot';
import Death from './components/P5/P5-Confidants/Death';
import Devil from './components/P5/P5-Confidants/Devil';
import Emperor from './components/P5/P5-Confidants/Emperor';
import Empress from "./components/P5/P5-Confidants/Empress";
import Fortune from "./components/P5/P5-Confidants/Fortune";
import HangedMan from "./components/P5/P5-Confidants/HangedMan";
import Hermit from "./components/P5/P5-Confidants/Hermit";
import Hierophant from "./components/P5/P5-Confidants/Hierophant";
import Lovers from "./components/P5/P5-Confidants/Lovers";
import Moon from "./components/P5/P5-Confidants/Moon";
import Priestess from "./components/P5/P5-Confidants/Priestess";
import Star from "./components/P5/P5-Confidants/Star";
import Sun from "./components/P5/P5-Confidants/Sun";
import Temperance from './components/P5/P5-Confidants/Temperance';
import Tower from './components/P5/P5-Confidants/Tower';
import Councillor from './components/P5R/P5R-Confidants/Councillor';
import Faith from './components/P5R/P5R-Confidants/Faith';
import Justice from './components/P5R/P5R-Confidants/Justice';

function App() {
    let location = useLocation();
    return ( 
        <div className = "App" >
            <Navbar />
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>    
                    <Route exact path="/" component={Home} />
                    <Route exact path="/credits" component={Credits} />
                    <Route exact path="/p5" component={P5S} /> 
                    <Route exact path="/p5r" component={P5RS} />
                    <Route exact path="/chariot" component={Chariot} />
                    <Route exact path="/death" component={Death} />
                    <Route exact path="/devil" component={Devil} />
                    <Route exact path="/emperor" component={Emperor} />
                    <Route exact path="/empress" component={Empress} />
                    <Route exact path="/fortune" component={Fortune} />
                    <Route exact path="/hangedman" component={HangedMan} />
                    <Route exact path="/hermit" component={Hermit} />
                    <Route exact path="/hierophant" component={Hierophant} />
                    <Route exact path="/lovers" component={Lovers} />
                    <Route exact path="/moon" component={Moon} />
                    <Route exact path="/priestess" component={Priestess} />
                    <Route exact path="/star" component={Star} />
                    <Route exact path="/sun" component={Sun} />
                    <Route exact path="/temperance" component={Temperance} />
                    <Route exact path="/tower" component={Tower} />
                    <Route exact path="/councillor" component={Councillor} />
                    <Route exact path="/faith" component={Faith} />
                    <Route exact path="/justice" component={Justice} />
                </Switch>
            </AnimatePresence>
        </div>
    );
}

export default App;