import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
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
});

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
store.dispatch({
    type: 'INCREMENT', // use "_" to separate between words. ie: INCREMENT_AFTER_THIS.
    incrementBy: 5
});

// unsubscribe();

store.dispatch({
    type: 'INCREMENT'
});

// reset the count
store.dispatch({
    type: 'RESET'
});

// Decrement the count
store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

store.dispatch({
    type: 'DECREMENT',
});

store.dispatch({
    type: 'SET',
    count: 101
});

// console.log(store.getState());

// More info on Dispatching Actions: Section 10, Lecture 86.