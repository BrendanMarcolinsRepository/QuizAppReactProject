
import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../context/Context"

function HomePage(){

    const {questionNumber,handleChange} = useContext(Context)

    return(


        <div>
            <h3>Quizzical</h3>
            <h4>Video Games Quiz</h4>

            <form>
                <label htmlFor="cat">Select The Amount of Questions?</label>
                <select id="questionNumber" value={questionNumber} onChange = {(event ) => handleChange(event)} name = "questionNumber">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>
                
            </form>

            <Link to="/quiz">
                <button type="button">
                    Start Quiz!
                </button>
            </Link>
            
        </div>
    )
    
}

export default HomePage