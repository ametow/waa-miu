import {createStore} from "redux";

const PIZZA_ORDER = 'PIZZA_ORDER';
const createOrderPizzaAction = () => ({
    type: PIZZA_ORDER
} as ActionType);

const initialState = {
    numberOfPizza: 10
}

type ActionType = {
    type: 'PIZZA_ORDER' | 'OTHER_ACTION',
    payload?: any
}

const pizzaReducer = (state =initialState, action: ActionType) => {
    switch(action.type) {
        case PIZZA_ORDER:
            return {
                ...state,
                numberOfPizza: state.numberOfPizza - 1
            }
        default:
            return state
    }
}

const store = createStore(pizzaReducer);

console.log('initial state', store.getState())

const unsubscribe = store.subscribe(() => {
    console.log('state changed', store.getState())
});

store.dispatch(createOrderPizzaAction());
store.dispatch(createOrderPizzaAction());
store.dispatch(createOrderPizzaAction());

unsubscribe();