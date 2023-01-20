import React, {useState, useEffect, useContext} from "react"
import { nanoid } from "nanoid"
import {updateQuestionNumber} from "../redux/GameStateRedux"
import {useDispatch, useSelector} from "react-redux"

function useFetch() {

    
    const gameSetup = useSelector(state => state)
    const [quizData, setQuizData] = useState([])
    const [category, setCategory] = useState("")
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");


    console.log("category number here ==== " +  gameSetup.gameSetupInformation.difficulty)
    
    const getQuizData = async() => {
        
        const reciever = await fetch(`https://opentdb.com/api.php?amount=${gameSetup.gameSetupInformation.questionNumbers}&category=${gameSetup.gameSetupInformation.cateogoryNumbers}&difficulty=${gameSetup.gameSetupInformation.difficulty}&type=multiple`)
    
        const result = await reciever.json()

        const shuffleData = (result.results.map(item => {
            const { category, type, difficulty, question, correct_answer, incorrect_answers } = item
            console.log(correct_answer)
            
            let questionUpdate = question.replace(/&quot;/g, '\"')
            questionUpdate = questionUpdate.replace(/&/g, '\'')
            questionUpdate = questionUpdate.replace(/#039;/g, '\'')


            console.log("Updated the quesiton ehrer =====" +questionUpdate)
            return {
                        id: nanoid(),
                        category: category,
                        type: type,
                        difficulty: difficulty,
                        question: questionUpdate,
                        answers: shuffle([correct_answer, ...incorrect_answers]),
                        correctAnswer: correct_answer
                        
                    }
        }))
        function shuffle(array) {
            return array.sort(() => Math.random() - 0.5)
        }

        
       
        console.log(shuffleData[0].answers)
        setQuizData(shuffleData)
        setCategory(shuffleData[0].category)
        setloading(false);
        
        
    }
    
    useEffect(() => {
        
        getQuizData()
       
        
    },[0]) 

    return [ quizData,category, loading, error ,  getQuizData];
}

export default useFetch