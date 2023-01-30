import { QuizLeaderboard } from "../context/QuizLeaderboardContext";
import { useContext } from "react";

export function QuizLeaderboardHook(){
    const context = useContext(QuizLeaderboard)

    if(!context){

        console.log(context)

        throw Error(
            "Error here"
        )
    }

    return context;
}