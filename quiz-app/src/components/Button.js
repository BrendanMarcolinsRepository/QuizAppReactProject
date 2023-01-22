import React, {useContext, useEffect, useRef} from "react"


function Button(props){


    const buttonRef = useRef(null)

    return(
        <button
            id = {props.id}
            className = "answerButtons"
            onClick = {props.saveAnwers}
            style={props.styles}
            value = {props.values}
            ref={buttonRef}>
                {props.content} 
        </button>
    )
}

export default Button

