import React from 'react';
import PropTypes from 'prop-types';
import {WittnessExcerpt} from './WittnessExcerpt.js'
import '../styles/css/ColorList.scss'

export const WittnessExcerptList = ({ excerpts=[] }) =>
    <div className="wittness-excerpt-list">
        {
            (excerpts.length===0) ? 
            <p>还没有阅享摘录...(增加阅享摘录.)</p> : 
                excerpts.map((excerpt,index) =>(
                    console.log(excerpt.content),
                    console.log(excerpt.page),
                    <WittnessExcerpt key={index} {...excerpt}/>          

                    )
                ) 
                
        }
    
    </div>
