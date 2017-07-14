import React, {Component} from 'react';
import PropTypes from 'prop-types';

class COMPONENT_NAME extends Component {
    render() {
        return (
            <div>{this.props.value}</div>
        );
    }
}

COMPONENT_NAME.propTypes = {
    value: PropTypes.string.isRequired
};

export default COMPONENT_NAME;