import React, {useContext, useEffect, useRef} from "react"

import { Puff } from 'react-loader-spinner'


import {useSelector} from "react-redux"

import useFetch from "../hooks/useFetch"
import Button from "./Button"
function Quiz(){


    const setUpNumbers = useSelector(state => state)
    
    const  [ data,category, loading, error ,  getQuizData] = useFetch()

    const [gameState,setGameState] = React.useState(false)
    
    const [answer,setAnswer] = React.useState([])

    const [correct,setCorrect] = React.useState(0)

    const [clicked,setClicked] = React.useState([])

    const styles= (quesitonPosition, buttonPosition) => {
    
        let color = {backgroundColor :"#ffffff"};

        if(!gameState){
            answer.forEach(m => {
                if(m.buttonPosition === buttonPosition && m.quesitonPosition === quesitonPosition){
                    color = {backgroundColor :"#add8e6"}
                }
    
            })
        }else{

            const currnetPos = answer.filter(a => a.quesitonPosition === quesitonPosition)
            const found = data.filter(d => currnetPos.some(a => a.userAnswer === d.correctAnswer))    
            answer.forEach((f) => {

                if(f.buttonPosition === buttonPosition && f.quesitonPosition === quesitonPosition){
                    if(found.length){
                        color = {backgroundColor :"#00FF00"}
                        
                    }else{
                        color = {backgroundColor :"#FF0000"}
                    }
                }
            })
        }
        return color;
    }

    
    function checkAnswers(){
        setGameState(true)
        
        let correctAnswersCounter = 0
        

        data.filter(d => {
            answer.filter((f) => {

                if(f.userAnswer === d.correctAnswer){
                    correctAnswersCounter++;
                    
                }
            })
        })    
        setCorrect(correctAnswersCounter)      
    }
    
    function reset(){
        setGameState(false)
         getQuizData()
         setClicked([])
         setAnswer([])
    }
    


    function saveAnwers(userAnswer, buttonPosition, quesitonPosition){

        if(!answer.length){
            const ar = [...answer];
            ar.push({quesitonPosition: quesitonPosition, buttonPosition: buttonPosition, userAnswer : userAnswer});
            setAnswer(ar);
            

        }else{
            const checkIfClicked = answer.filter((answerObject) => answerObject.quesitonPosition !== quesitonPosition );

            if(checkIfClicked === null){
                const newArrayAnswer = [...answer];
                newArrayAnswer.push({quesitonPosition: quesitonPosition, buttonPosition: buttonPosition, userAnswer : userAnswer});
                setAnswer(newArrayAnswer);
            }else{
                checkIfClicked.push({quesitonPosition: quesitonPosition, buttonPosition: buttonPosition, userAnswer : userAnswer});
                setAnswer(checkIfClicked);
            }
        }
    }


    const element = data.map((data, index) => (
        <div key = {index}>
           
            <h3>{data.question}</h3>
            {
                data.answers.map((ans,answersIndex) => (
                    
                    <Button
                        hey = {answersIndex}
                        id = {ans}
                        saveAnwers = {() => saveAnwers(data.answers[answersIndex], answersIndex, index)}
                        styles={styles(index,answersIndex)}
                        values = {ans[answersIndex]}
                        content = {data.answers[answersIndex]} 


                    />
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
                                <h4>You got {correct}/{ setUpNumbers.gameSetupInformation.questionNumbers} correct</h4> 
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