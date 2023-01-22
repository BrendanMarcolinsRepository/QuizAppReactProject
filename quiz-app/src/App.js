import React, { useState } from "react"
import {Link, Switch, Route} from "react-router-dom"
import Home from "./components/HomePage"
import Quiz from "./components/Quiz"
import './App.css';
import shapeTop from "./assets/shape-1.png";
import shapeBottom from "./assets/shape-2.png";

function App(props) {
  


    return(
        
        <div>
            <img className="shape-top" src={shapeTop} alt="Shape Top" />

            <Switch>
                <Route exact path="/">
                    <Home store = {props.store}/>
                </Route>
                <Route exact path="/quiz">
                    <Quiz />
                </Route>
            </Switch>

            <img className="shape-bottom" src={shapeBottom} alt="Shape Bottom" />

        </div>
    
    )
}

export default App;
