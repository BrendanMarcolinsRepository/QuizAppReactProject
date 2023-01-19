import React, {useState} from "react"

const Context = React.createContext()

function ContextProvider({children}){
    const [questionNumber, setQuestionNumber] = useState(0)

    function handleChange(event) {
        console.log(event)
        const {name, value, type, checked} = event.target

        console.log(value)
        setQuestionNumber(value)
    }

    return (
        <Context.Provider value={{
            questionNumber, 
            handleChange
        }}>
            {children}
        </Context.Provider>
    ) 
}

export {ContextProvider, Context}