import React from 'react';
import PropTypes from 'prop-types';

// 无状态函数模块
const EveryRate = ({quantity}) =>(
    <span>
        {quantity}
    </span>)

EveryRate.propTypes = {
    quantity: PropTypes.number
}

export default EveryRate