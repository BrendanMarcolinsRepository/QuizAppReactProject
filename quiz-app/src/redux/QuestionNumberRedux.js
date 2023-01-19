

export function updateQuestionNumber(value){
    const num = value

    console.log("here in update " + num)
    return({
        type : "QUESTIONNUMBER",
        payload : num
    })
}

export default function questionNumberReducer(questionsNumber = 10, action){

    console.log("here fuckfuck" + questionsNumber)

    console.log("here fuckfuckfuck" + action.payload)

    switch(action.type){
        case "QUESTIONNUMBER" :
            return action.payload
        default :
            return questionsNumber;
    }
}

