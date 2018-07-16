import { createStore, combineReducers } from 'redux';

// ACTIONS we need to create
// 1. ADD_EXPENSE
// 2. REMOVE_EXPENSE
// 3. EDIT_EXPENSE
// 4. SET_TEXT_FILTER
// 5. SORT_BY_DATE
// 6. SORT_BY_AMOUNT
// 7. SET_START_DATE
// 8. SET_END_DATE

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// Store creation

const store = createStore(expensesReducer);

console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'qwqnjwnef',
        description: 'Jnuary Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};