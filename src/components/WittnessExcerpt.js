import React from 'react';
import PropTypes from 'prop-types';


import '../styles/css/WittnessExcerpt.scss'
import {WittnessExcerptContent} from './WittnessExcerptContent.js';

export const WittnessExcerpt = ({ excerpts=[] }) => 
        <div>
            <h1 class="title">阅享见证</h1>
            {
                excerpts.map((excerpt,index) =>(
                    <WittnessExcerptContent key={index} {...excerpt}/>  )    
                )
            }

        </div>
   
