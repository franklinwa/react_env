import React from 'react';
import PropTypes from 'prop-types';

// 无状态函数模块
const Star = ({selected = false, onClick = f => f}) =>(
    <div className = {(selected) ? "star selected" : "star"}
         onClick = {onClick} >
    </div>)

Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
}

export default Star