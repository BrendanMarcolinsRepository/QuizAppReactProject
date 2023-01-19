
import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../context/Context"
import {updateQuestionNumber} from "../redux/QuestionNumberRedux"
import {useDispatch, useSelector} from "react-redux"

function HomePage(){

    
    const dispatch = useDispatch()
    const count = useSelector(state => state)

   

    function updateNumberQuestionToDispatch(event){
        const {value} = event.target
        dispatch(updateQuestionNumber(value))
    }
    

    return(


        <div>
            <h3>Quizzical</h3>
            <h4>Video Games Quiz</h4>

            <form>
                <label htmlFor="cat">Select The Amount of Questions?</label>
                <select id="questionNumber" value={count.questionNumber} onChange = {(event ) => updateNumberQuestionToDispatch(event)} name = "questionNumber">
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