// CONSTANTS
export const ACTION_VALUE_CHANGED = 'ACTION_CHANGED_VALUE';
// ...

// ACTIONS
function actionChangeValue(value) {
    return {
        type: ACTION_VALUE_CHANGED,
        payload: value
    };
}
// ...

// CREATORS
export function changeValue(value) {
    return (dispatch, getState) => {
        return dispatch(actionChangeValue(value));
    };
}
// ...