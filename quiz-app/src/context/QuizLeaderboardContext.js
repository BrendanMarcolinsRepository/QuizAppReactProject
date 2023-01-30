import { Children, createContext, useReducer } from "react";

export const QuizLeaderboard = createContext()

export function quizLeaderboardReducer(state,action){
    switch(action.type){
        case 'SET_QUIZ_LEADERBOARD' :
            console.log("payedload here " + action.payload)
            return {
                quiz_leaderboard:action.payload
            }
        case "CREATE_QUIZ_LEADERBOARD":
            return{
                quiz_leaderboard:[action.payload,...state.quiz_leaderboard]
            }
        case "UPDATE_QUIZ_LEADERBOARD":
            return{
                quiz_leaderboard:[action.payload,...state.quiz_leaderboard]
            }
        case "DELETE_QUIZ_LEADERBOARD":
            console.log("working")
            return{
                
                quiz_leaderboard : state.quiz_leaderboard.filter((r) => r._id !== action.payload._id)
            }
        default:
            return state

    }
        
}

export function QuizContextProvider(props){

    const [state, dispatch] = useReducer(quizLeaderboardReducer,{
        quiz_leaderboard:null

    })
    const {children} = props;
    return (
        <QuizLeaderboard.Provider value={{...state,dispatch}}>
            {children}
        </QuizLeaderboard.Provider>
    ) 
}

