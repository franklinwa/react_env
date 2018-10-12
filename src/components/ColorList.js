import React from 'react';
import PropTypes from 'prop-types';
import Star from './Start.js'
import {Color} from './Color.js'

export const ColorList = ({ colors=[] }) =>
    <div className="color-list">
        {
            (colors.length === 0) ?
            <p>No Colors Listed.(Add a Color)</p> :
            colors.map(color =>
                <Color key={color.id} {...color}/>
            ) 
        }
    
    </div>
