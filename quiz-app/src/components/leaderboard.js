import React, { useState, useEffect, useRef} from "react"
import leaderboardData from './fakeData'
import {QuizLeaderboardHook} from "../hooks/QuizLeaderboardHook"
function Leaderboard(){


    
    const {quiz_leaderboard, dispatch} = QuizLeaderboardHook()
    const [selected, setSelected] = useState("General Knowledge")


    useEffect(() => {

        const fetchLeaderboard = async () => {

            console.log("wokring here 0")

            const response = await fetch("/api/quizleaderboard")

            const json = await response.json()
    
            if(response.ok){
                dispatch({type : "SET_QUIZ_LEADERBOARD", payload : json})
            }
        }

        fetchLeaderboard()
    },[dispatch])

   
    
    const leaderboardDataElement = quiz_leaderboard && quiz_leaderboard.map((data, index) => {
        console.log(data)
       return (
        data.Catogories.map((scoreData,scoreIndex) => {

                console.log(data.username)

                if(scoreData.catogorie === selected){
                   
                    return (

                        <tr key = {scoreIndex}>
                                <td> {data.username}</td>
                                <td> {scoreData.hardScore}</td>
                                <td> {scoreData.mediumScore}</td>
                                <td> {scoreData.easyScore}</td>
                                <td> {scoreData.attempts}</td>
                                <td> {scoreData.correct}</td>
                                <td> {scoreData.incorrect}</td>
                                <td> {scoreData.score}</td>
                        </tr>
                    
                    )

                }           
            })
        )
    })

    function selectedCategory(event){
        const {value} = event.target
        setSelected(value)
    }

    function selector() {

       

        return(
            <select 
                    id="category"
                    
                    onChange = {(event ) => selectedCategory(event)} 
                    className="custom-select"
                    name = "category">
                        <option value="General Knowledge">General Knowledge</option>
                        <option value="Entertainment: Books">Entertainment: Books</option>
                        <option value="Entertainment: Film">Entertainment: Film</option>
                    
            </select>
        )
        

    }
    

    
    

    return(
        <div>

            <h2>Leaderboards </h2>

            {selector()}

            <br/><br/>

            <table>
                    <thead>
                        <tr>
                            <th >
                                Username
                            </th>
                            <th >
                                Easy
                            </th> 
                            <th >
                                Medium
                            </th> 
                            <th >
                                Hard
                            </th>
                            <th >
                                Attempts
                            </th>
                            <th >
                                correct
                            </th>
                            <th >
                                incorrect
                            </th>
                            <th >
                                score
                            </th>
                        
                            
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboardDataElement}
                    </tbody>
                    
            </table>
        </div>
    )
}

export default Leaderboard