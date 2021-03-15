import {INCREMENT, DECREMENT} from '../actions/actionTypes';


const counterReducer = (state={count:0, lastAction:undefined}, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + action.payload,
                lastAction: INCREMENT
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - action.payload,
                lastAction: DECREMENT
            };
        default:
            return state;
    }

}

export default counterReducer;