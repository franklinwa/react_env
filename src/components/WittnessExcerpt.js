import React from 'react';
import PropTypes from 'prop-types';


import '../styles/css/WittnessExcerpt.scss'
import {WittnessExcerptContent} from './WittnessExcerptContent.js';

export const WittnessExcerpt = ({ excerpts=[] }) => 
        <div>
            <p>阅享见证</p>
            {
                excerpts.map((excerpt,index) =>(
                    <WittnessExcerptContent key={index} {...excerpt}/>  )    
                )
            }

        </div>
   
