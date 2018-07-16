import { createStore } from 'redux';

// Action generators - functions that return action objects.

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    // incrementBy = 1 : setting up the default value.
    type: 'INCREMENT',
    incrementBy
    // since our variable name is the same as our object property, we can just put it as incrementBy. 
    // Original code is: 
    // incrementBy: incrementBy
    // Sec 10, Lec 90.
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET',
});

// Reducers attributes
// 1. Reducers are pure functions.
// A pure function is one that does not rely on outside of its function scope.
// Example of a non pure function: 
// let result;
// const add = (a, b) => {
// result = a + b
// };
// Reason being, the output relies on a global scope(result) in order to return it's output.
// 2. Never change state or action. Return it on a new object instead.

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            };
        default: 
            return state;
    };
}

const store = createStore(countReducer);

// store.subscribe(() => {
//     console.log(store.getState());
// });

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});
// createStore expects a function to be the first argument.
// There is no constructor therefore we define default in the first argument of the function itself.
// console.log(store.getState());

// Actions - Just an object that gets sent to the store. 
// Example: Under a store called Person, an action would be walk, stop walking, drive, exercise, etc..

// Increment the count
store.dispatch(incrementCount({ incrementBy: 5 }));

// unsubscribe();
store.dispatch(incrementCount());

// reset the count
store.dispatch(resetCount());

// Decrement the count
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(decrementCount());

store.dispatch(setCount({ count: 100 }));

// console.log(store.getState());
// More info on Dispatching Actions: Section 10, Lecture 86.