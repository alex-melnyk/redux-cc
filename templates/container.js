import {connect} from "react-redux";
import {COMPONENT_NAME} from '../components/COMPONENT_FILE_NAME';

import {
    changeValue
} from '../actions/ACTION_NAME';

const mapStateToProps = (state) => {
    return state.REDUCER_NAME;
};

const mapDispatchToProps = (dispatch) => {
    return {
        onValueChanged: (data) => {
            dispatch(changeValue(data));
        }
    };
};

export default connect({mapStateToProps, mapDispatchToProps})(COMPONENT_NAME);