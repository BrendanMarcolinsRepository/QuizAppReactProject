import React, { useState } from "react"
import {Link, Switch, Route} from "react-router-dom"
import Home from "./components/HomePage"
import Quiz from "./components/Quiz"
import './App.css';

function App(props) {
  


    return(

        <div>
            <Switch>
                <Route exact path="/">
                    <Home store = {props.store}/>
                </Route>
                <Route exact path="/quiz">
                    <Quiz />
                </Route>
            </Switch>

        </div>
    
    )
}

export default App;
