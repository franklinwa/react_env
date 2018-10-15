import React from 'react';
import PropTypes from 'prop-types';

// 无状态函数模块
const AllRate = ({allRate=[]}) =>(
    <div>
         <p>{(allRate.length==0)? "目前还没有喜欢的朋友..." : `本阅享见证共${allRate.reduce((n,x)=>(n+x))}个喜欢`}</p>
    </div>)

AllRate.propTypes = {
    allRate: PropTypes.array
}
export default AllRate