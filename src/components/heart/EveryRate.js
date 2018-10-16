import React from 'react';
import PropTypes from 'prop-types';

// 无状态函数模块
const EveryRate = ({quantity}) =>(
  
    <div className="wittness"><span>喜欢</span><span>{quantity}</span></div>)

EveryRate.propTypes = {
    quantity: PropTypes.number
}

export default EveryRate