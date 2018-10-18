import React from 'react';
import PropTypes from 'prop-types';


import '../styles/css/WittnessExcerpt.scss'
import {WittnessExcerptContent} from './WittnessExcerptContent.js';

export const WittnessExcerpt = ({ excerpts=[] }) => 
        <div>
            <div className="wrap div-opacity">
                <div className="ribbon6 title">精彩摘录</div >
            </div>
           
            {
                excerpts.map((excerpt,index) =>(
                    <WittnessExcerptContent key={index} {...excerpt}/>  )    
                )
            }

        </div>
   
