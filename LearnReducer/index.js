import { createStore } from 'redux';

function numberReducer(incomingObj, action) {
    // console.log(action)
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
    } else if (action.type === 'INCREMENT'){
        return {
            ...incomingObj,
            number: incomingObj.number + 1
        }
    } else if (action.type === 'DECREMENT'){
        return {
            ...incomingObj,
            number: incomingObj.number - 1
        }
    } else {
        return incomingObj;
    }
}


const initialState = {
    number: 0
}


const store = createStore(numberReducer, initialState)

console.log(store)
console.log(store.getState())



store.dispatch({type: 'ADD', payload: 17});  // dispatch takes an action - Object as an argument
console.log(store.getState())                // { number: 17 }