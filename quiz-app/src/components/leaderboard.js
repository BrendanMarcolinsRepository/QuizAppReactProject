import React, { useState, useEffect, useRef} from "react"
import leaderboardData from './fakeData'
function Leaderboard(){

    const [leaderboard, setLeaderBoard] = useState(leaderboardData)


    

    const leaderboardDataElement = leaderboard.map((data, index) => (

        

        <tr key = {index}>
            
                <td>
                    {data.username}
                </td>  
                {
                    data.score.map((index,scoreIndex) => (
                        <td key = {scoreIndex}>
                            {index.score}
                        </td>              
                    ))
                }
            
        </tr>

        
    )) 

    console.log("wokring")

    return(
        <div>

            <h2>Leaderboards </h2>

            <table>
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
                        
                    </tr>
                    {leaderboardDataElement}
            </table>
        </div>
    )
}

export default Leaderboard