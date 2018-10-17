import React from 'react';
import PropTypes from 'prop-types';
import {WittnessExcerptList} from './WittnessExcerptList.js'
import {WittnessBasic} from './WittnessBasic.js'
import '../styles/css/Color.scss'
import { WittnessReview } from './WittnessReview.js';
import { StarRating } from './StarRating.js';
import  AllRate  from './heart/AllRate';
export const Wittness = ({ wittness,books,allRate,onRate=f=>f }) =>

       <div>

           <WittnessBasic {...wittness} {...books}  onRate={onRate}/>
           
           <WittnessExcerptList {...wittness}/>
           
           <WittnessReview {...wittness}/>

        
       </div>
    


    