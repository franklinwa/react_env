import React from 'react';
import PropTypes from 'prop-types';

import '../styles/css/WittnessBasic.scss'

import  Heart  from './heart/Heart';
import  EveryRate  from './heart/EveryRate.js';

export const WittnessBasic = ({ name,date,pages,day,rating,onRate=f=>f}) =>

       <section className="wittness-basic">
       <div>

           <div className="content ">
               <p className="basic-content">{date},阅读《{name}》第{pages[0].start}-{pages[0].end}页，特此见证，感谢坚持读！特此见证，感谢坚持读！</p>
           </div>
       
            <div className="ribbon5 title "><h1 className="main">第<span className="day">{day+1}</span>天</h1></div >
           
           
           
            <div className="wittness wittness-item">
           <Heart {...rating}  onClick = {() => (onRate())}/>

           </div>
       </div>
       </section>
    


    