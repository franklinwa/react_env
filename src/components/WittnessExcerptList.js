import React from 'react';
import PropTypes from 'prop-types';
import {WittnessExcerpt} from './WittnessExcerpt.js'
import '../styles/css/WittnessExcerpt.scss'

export const WittnessExcerptList = ({ excerpts=[] }) =>
<section className="wittness-excerpt">
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
    
    </section>
