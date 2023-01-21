import React, {useContext, useEffect, useRef} from "react"

import { Puff } from 'react-loader-spinner'


import {useSelector} from "react-redux"

import useFetch from "../hooks/useFetch"
function Quiz(){


    const setUpNumbers = useSelector(state => state)
    
    const  [ data,category, loading, error ,  getQuizData] = useFetch()

    const [gameState,setGameState] = React.useState(false)
    
    const [answer,setAnswer] = React.useState([])

    const [correct,setCorrect] = React.useState(0)

    const [clicked,setClicked] = React.useState([])

    
    
    
    
    
    
    
    const styles= (quesitonPosition, buttonPosition) => {
    
        let color = {backgroundColor :"#ffffff"};

        answer.forEach(m => {
            if(m.buttonPosition === buttonPosition && m.quesitonPosition === quesitonPosition){
                console.log("got it")
                color = {backgroundColor :"#add8e6"}
            }

        })

        

        return color;

        
    }
    
    
    function checkAnswers(){
        setGameState(true)
        
        let correctAnswersCounter = 0

        data.filter(d => {

            answer.filter((f) => {

                if(f.userAnswer !== d.correctAnswer){
                    document.getElementById(f.userAnswer).style.backgroundColor = "red";
                }else{
                    correctAnswersCounter++;
                    console.log("working her =========" + f.userAnswer + "  something " + d.correctAnswer)
                    document.getElementById(d.correctAnswer).style.backgroundColor = "green";
                }
            })
        })
        
        console.log("matched " + correctAnswersCounter);
        /*
        if(correctAnswersCounter == 0){
            
            //document.getElementById(answer[i]).style.backgroundColor = "green";
        }else{
            
            //document.getElementById(answer[i]).style.backgroundColor = "red";
        }
        */
        
        setCorrect(correctAnswersCounter)      
    }
    
    function reset(){
         getQuizData()
         setClicked([])
         setAnswer([])
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
     
    }

    function saveAnwers(userAnswer, buttonPosition, quesitonPosition){

        console.log("working save user answers " + userAnswer)

        if(!answer.length){
            console.log("working")
            const ar = [...answer];
            ar.push({quesitonPosition: quesitonPosition, buttonPosition: buttonPosition, userAnswer : userAnswer});
            console.log("working ==== " + ar[0].userAnswer)
            setAnswer(ar);
            console.log("updated answre array after picing " +  answer);

           
            

        }else{

            console.log("working 1 index " + userAnswer)

            const checkIfClicked = answer.filter((answerObject) => answerObject.quesitonPosition !== quesitonPosition );

            if(checkIfClicked === null){
                const newArrayAnswer = [...answer];
                newArrayAnswer.push({quesitonPosition: quesitonPosition, buttonPosition: buttonPosition, userAnswer : userAnswer});
                setAnswer(newArrayAnswer);
            }else{
                checkIfClicked.push({quesitonPosition: quesitonPosition, buttonPosition: buttonPosition, userAnswer : userAnswer});
                setAnswer(checkIfClicked);
            }

            console.log("updated answre array after picing " +  answer[0].userAnswer);

        }

    

        
    }

    
    
    const element = data.map((data, index) => (
        <div>
           
            <h3>{data.question}</h3>
            {
                data.answers.map((ans,answersIndex) => (
                    
                    <button
                        id = {ans}
                        className = "answerButtons"
                        onClick = {() => saveAnwers(data.answers[answersIndex], answersIndex, index)}
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