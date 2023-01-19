import React, {useContext} from "react"
import { nanoid } from "nanoid"
import { Puff } from 'react-loader-spinner'
import {Context} from "../context/Context"

import useFetch from "../hooks/useFetch"
function Quiz(){

    const {questionNumber} = useContext(Context);
    
    const  [ data,category, loading, error ,  getQuizData] = useFetch()

    const [gameState,setGameState] = React.useState(false)
    
    const [answer,setAnswer] = React.useState(["","","","",""])
    
    const [clicked,setClicked] = React.useState([5,5,5,5,5])
    
    const [correctAnswers,setCorrectAnswers] = React.useState(0)

    
    
    
    const styles= (index, buttonPosition) => {
    
        console.log("working")
    
        if(clicked[index] === buttonPosition){
            return {backgroundColor :"#add8e6"}
        }else{
            return {backgroundColor :"#ffffff"}
        }
    }
    
    
    function checkAnswers(){
        setGameState(true)
        
        let correctAnswersCounter = 0
        
        for(let i = 0; i < answer.length; i++){
            if(answer[i] === data[i].correctAnswer){
                correctAnswersCounter++;
                console.log("right and " + answer[i])
                document.getElementById(answer[i]).style.backgroundColor = "green";
            }else{
                console.log("right and " + answer[i])
                document.getElementById(answer[i]).style.backgroundColor = "red";
                
            }
        }
        
        
        
        
        setCorrectAnswers(correctAnswersCounter)
        
        console.log("working 2")
        
        console.log("correct amount of answers : " + correctAnswersCounter)
        
        
    }
    

    

    function reset(){
         getQuizData()
         setClicked([5,5,5,5,5])
         setAnswer(["","","","",""])
         setGameState(false)
         
    }
    
    
    function userAnswer(index,buttonValue, buttonPosition){

        console.log("BUTTON HERE" + buttonPosition)
        
        const updateAnswerState = answer.map((a, i) => {
            
            if(index === i){
                console.log("working")
                return buttonValue
            }else{
                return a
            }
                
        })
        
        const updateClickState = clicked.map((a, i) => {
            if(index === i){
                console.log("working")
                return buttonPosition
            }else{
                return a
            }
                
        })
        
        setAnswer(updateAnswerState)
        setClicked(updateClickState)
        console.log(clicked)
        console.log(answer)
        
        
        
    }

    
    const element = data.map((data, index) => (
        <div>
           

            <h3>{data.question}</h3>
            {
                data.answers.map((ans,answersIndex) => (
                    
                    <button
                        id = {ans}
                        className = "answerButtons"
                        onClick = {() => userAnswer(index, data.answers[answersIndex], answersIndex)}
                        style={styles(index,answersIndex)}
                        value = {ans[answersIndex]}
                    >
                        {data.answers[answersIndex]} 
                    </button>
                    
                ))
            }
            <br/><hr/>
        </div>
    )) 
          
           
            
    return(
         <div>

            {
                loading ? 
                    <Puff
                        height="300"
                        width="300"
                        radius={1}
                        color="#4fa94d"
                        ariaLabel="puff-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />  
                
                :
            
                <div>
           
                    <h1>Quiz Category - {category}</h1>
                    {element}
                    
                    {
                        gameState ?  
                            <div>
                                <button 
                                    onClick = {reset}>Play Again
                                </button>
                                <h4>You got {correctAnswers}/{questionNumber} correct</h4> 
                            </div>
                        :
                            <div>
                                <button onClick = {checkAnswers}>
                                    Check Answers
                                </button>
                            </div>
                    }

                </div>

            }
            
         </div>
    )
    
}

export default Quiz