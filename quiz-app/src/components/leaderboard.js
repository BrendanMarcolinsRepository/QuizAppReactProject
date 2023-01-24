import React, { useState, useEffect, useRef} from "react"
import leaderboardData from './fakeData'
function Leaderboard(){


    

    const [leaderboard, setLeaderBoard] = useState(leaderboardData)
    const [selected, setSelected] = useState("General Knowledge")

    const leaderboardDataElement = leaderboard.map((data, index) => {

        console.log(selected)

        

       return (

            

        data.Catogories.map((scoreData,scoreIndex) => {

                

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