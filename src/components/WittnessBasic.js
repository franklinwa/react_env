import React from 'react';
import PropTypes from 'prop-types';

import '../styles/css/WittnessBasic.scss'

import  Heart  from './heart/Heart';
import  EveryRate  from './heart/EveryRate.js';

export const WittnessBasic = ({ name,date,pages,rating,onRate=f=>f}) =>
    <section className="wittness-basic">
       
       <div className="wittness basic">
           
           <div className="content">
               <p>{date},阅读《{name}》第{pages[0].start}-{pages[0].end}页，特此见证，感谢坚持读！特此见证，感谢坚持读！</p>
           </div>
           
            <div className="wittness">
           <Heart {...rating}  onClick = {() => (onRate())}/>
           <EveryRate {...rating}/>
           </div>
       </div>
    

    </section>
    