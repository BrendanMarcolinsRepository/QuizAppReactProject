import questionNumberReducer from "./QuestionNumberRedux"
import {createStore,combineReducers} from "redux"



const rootReducer = combineReducers({
    questionNumber: questionNumberReducer,
    
})

const store = createStore(rootReducer)
store.subscribe(() => console.log(store.getState()))
export default store