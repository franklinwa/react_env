import React from 'react';
import PropTypes from 'prop-types';

// 无状态函数模块
const EveryRate = ({quantity}) =>(
    <div>
         <p>{quantity}</p>
         {console.log(quantity)}

    </div>)
    
EveryRate.propTypes = {
    quantity: PropTypes.number
}

export default EveryRate