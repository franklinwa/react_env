import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/css/heart.scss'
// 无状态函数模块
const Heart = ({selected,quantity,onClick = f => f}) =>(
    <div className="wittness heart-cursor" onClick = {onClick}> 
        <span className = {(selected) ? "heart selected heart-width" : "heart heart-width"}  >
        </span>
        <span className={(selected) ? "like selected heart-width" : "like heart-width"}  >喜欢</span>
        <span className="heart-width" >{quantity}</span>
    </div>)

Heart.propTypes = {
    selected: PropTypes.bool,
    quantity:PropTypes.number,
    onClick: PropTypes.func
}

export default Heart