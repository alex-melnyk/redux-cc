import * as ACTION_NAME from '../actions/ACTION_NAME';

const initialState = {
    value: '{DEFAULT_VALUE}'
};

export default function REDUCER_NAME(state = initialState, action) {
    switch (action.type) {
        // FOR EXAMPLE
        case ACTION_NAME.ACTION_VALUE_CHANGED:
            return {
                ...state,
                value: action.payload
            };
        default:
            return state;
    }
}