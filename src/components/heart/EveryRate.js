import React from 'react';
import PropTypes from 'prop-types';

// 无状态函数模块
const EveryRate = ({quantity}) =>(
  
    <div className="wittness"><span>{quantity}</span><span>喜欢</span></div>)

EveryRate.propTypes = {
    quantity: PropTypes.number
}

export default EveryRate