import React from 'react';
import PropTypes from 'prop-types';
import {WittnessExcerpt} from './WittnessExcerpt.js'
import '../styles/css/WittnessExcerpt.scss'
import { Wittness } from './Wittness.js';

export const WittnessExcerptList = ({ excerpts=[] }) =>
<section className="wittness-excerpt">
        <div className="box effect">
        {
            (excerpts.length===0) ? 
            <p>还没有阅享摘录...(增加阅享摘录.)</p> : <WittnessExcerpt excerpts={excerpts}/>
                    
                    //     excerpts.map((excerpt,index) =>(
                    // <WittnessExcerpt key={index} {...excerpt}/>   
                    //                                     )    
                    //                 )               
                     
        }
        </div>
    
    </section>
