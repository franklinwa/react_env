import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/css/heart.scss'
// 无状态函数模块
const Heart = ({selected,onClick = f => f}) =>(
    <div className = {(selected) ? "heart selected" : "heart"}
         onClick = {onClick} >

    </div>)

Heart.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
}

export default Heart