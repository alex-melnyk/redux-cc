import {
    ACTION_VALUE_CHANGED
} from '../actions/ACTION_NAME';

const initialState = {
    value: '{DEFAULT_VALUE}'
};

export default function REDUCER_NAME(state = initialState, action) {
    switch (action.type) {
        // FOR EXAMPLE
        case ACTION_VALUE_CHANGED:
            return {
                ...state,
                value: action.payload
            };
        default:
            return state;
    }
}