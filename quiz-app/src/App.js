import React, { useState } from "react"
import {Link, Switch, Route} from "react-router-dom"
import Home from "./components/HomePage"
import Quiz from "./components/Quiz"
import './App.css';

function App() {
  


    return(

        <div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/quiz">
                    <Quiz />
                </Route>
            </Switch>

        </div>
    
    )
}

export default App;
