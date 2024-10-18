"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const PIZZA_ORDER = 'PIZZA_ORDER';
const createOrderPizzaAction = () => ({
    type: PIZZA_ORDER
});
const initialState = {
    numberOfPizza: 10
};
const pizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case PIZZA_ORDER:
            return Object.assign(Object.assign({}, state), { numberOfPizza: state.numberOfPizza - 1 });
        default:
            return state;
    }
};
const store = (0, redux_1.createStore)(pizzaReducer);
console.log('initial state', store.getState());
const unsubscribe = store.subscribe(() => {
    console.log('state changed', store.getState());
});
store.dispatch(createOrderPizzaAction());
store.dispatch(createOrderPizzaAction());
store.dispatch(createOrderPizzaAction());
unsubscribe();
