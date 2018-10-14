import React from 'react';
import PropTypes from 'prop-types';

import '../styles/css/Color.scss'

import  Heart  from './heart/Heart';
import  EveryRate  from './heart/EveryRate.js';

export const WittnessBasic = ({ name,date,pages,rating,onRate=f=>f}) =>
    <section className="wittness-basic">
       
       <div>
           
           <p>{date},阅读《{name}》第{pages[0].start}-{pages[0].end}页，特此见证，感谢坚持读！</p>
         
           <Heart {...rating}  onClick = {() => (onRate())}/>
           <EveryRate {...rating}/>
       </div>
    

    </section>
    