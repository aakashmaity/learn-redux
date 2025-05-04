import { combineReducers, createStore } from 'redux';

const initialState = {
    number: 0,
    anotherNumber: 0
}
function numberReducer(incomingObj = initialState, action) {
    console.log("numberReducer incomingObj: ", incomingObj)
    if(action.type === 'ADD'){
        const numberToAdd = action.payload;

        return {
            ...incomingObj,
            number: incomingObj.number + numberToAdd
        } 
    } else if(action.type === 'SUBTRACT') {
        const numberToSubtract = action.payload;

        return {
            ...incomingObj,
            number: incomingObj.number - numberToSubtract
        }
    } else {
        return incomingObj;
    }
}

function anotherNumberReducer(incomingObj = initialState, action) {
    console.log("anotherNumberReducer incomingObj: ", incomingObj)
    if (action.type === 'INCREMENT'){
        return {
            ...incomingObj,
            anotherNumber: incomingObj.anotherNumber + 1
        }
    } else if (action.type === 'DECREMENT'){
        return {
            ...incomingObj,
            anotherNumber: incomingObj.anotherNumber - 1
        }
    } else {
        return incomingObj;
    }
}


const rootReducer = combineReducers({
    number: numberReducer,
    anotherNumber: anotherNumberReducer
});

console.log(rootReducer)

const store = createStore(rootReducer)

console.log(store)
console.log(store.getState())



store.dispatch({type: 'ADD', payload: 17});            // dispatch takes an action - Object as an argument
console.log("After ADD --> ",store.getState())

store.dispatch({type: 'INCREMENT', payload: null});    // dispatch takes an action - Object as an argument
console.log("After INCREMENT --> ", store.getState())  // { number: 17 }

