
import React, { useEffect, useRef} from "react"
import {Link} from "react-router-dom"
//import {Context} from "../context/Context"
import {updateQuestionNumber,updateCategoryNumber,updateGameDifficulty} from "../redux/GameStateRedux"
import {useDispatch, useSelector} from "react-redux"


function HomePage(){

    
    const dispatch = useDispatch()
    const gameSetup = useSelector(state => state)
    const dropDownElement = useRef(null);

    

    const focusDropDown = () => {
        dropDownElement.current.focus();
  
    }

    function updateNumberQuestionToDispatch(event){
        const {value} = event.target
        dispatch(updateQuestionNumber(value))
        
    }

    function updateNumberCategoryToDispatch(event){
        const {value} = event.target
        dispatch(updateCategoryNumber(value))
        
    }

    function updateGameDifficultyToDispatch(event){
        const {value} = event.target
        dispatch(updateGameDifficulty(value))
       
    }
    
    useEffect(() => {
        focusDropDown()
    },[]) 

    

    return(


        <div>
            <h3>Quizzical</h3>
            <h4>Video Games Quiz</h4>

            <form>
                <label htmlFor="numberOfQuestion">Amount of Questions?</label>
                <select 
                    id="questionNumber"
                    value={gameSetup.gameSetupInformation.questionNumbers} 
                    onChange = {(event ) => updateNumberQuestionToDispatch(event)} 
                    name = "questionNumber"
                    ref={dropDownElement}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                </select>
                <br/><br/>
                <label htmlFor="category">Category</label>
                <select 
                    id="category"
                    value={gameSetup.gameSetupInformation.cateogoryNumbers} 
                    onChange = {(event ) => updateNumberCategoryToDispatch(event)} 
                    name = "category">
                        <option value="0">Any Category</option>
                        <option value="9">General Knowledge</option>
                        <option value="10">Entertainment: Books</option>
                        <option value="11">Entertainment: Film</option>
                        <option value="12">Entertainment: Music</option>
                        <option value="13">Entertainment: Musicals &amp; Theatres</option>
                        <option value="14">Entertainment: Television</option>
                        <option value="15">Entertainment: Video Games</option>
                        <option value="16">Entertainment: Board Games</option>
                        <option value="17">Science &amp; Nature</option>
                        <option value="18">Science: Computers</option>
                        <option value="19">Science: Mathematics</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="22">Geography</option>
                        <option value="23">History</option>
                        <option value="24">Politics</option>
                        <option value="25">Art</option>
                        <option value="26">Celebrities</option>
                        <option value="27">Animals</option>
                        <option value="28">Vehicles</option>
                        <option value="29">Entertainment: Comics</option>
                        <option value="30">Science: Gadgets</option>
                        <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                        <option value="32">Entertainment: Cartoon &amp; Animations</option>
                </select>
                <br/><br/>
                <label className="custom-label" htmlFor="difficulty">Difficulty:</label>

                <select
                    name="difficulty"
                    id="difficulty"
                    className="custom-select"
                    value={gameSetup.gameSetupInformation.difficulty}
                    onChange={(event) => updateGameDifficultyToDispatch(event)}
                >
                        <option value="">Any Difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
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