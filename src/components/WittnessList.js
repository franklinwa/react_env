import React from 'react';
import PropTypes from 'prop-types';
//import Star from './Start.js'
//import {Color} from './Color.js'
import '../styles/css/ColorList.scss'

export const WittnessList = ({ books={},wittnesses=[] }) =>
    <div className="color-list">
        {
            (books.length===0) ? 
            <p>No books Listed.(Add a book)</p> :
            (console.log(books.name),(wittnesses.length === 0) ?
                <p>No Wittnesses Listed.(Add a Wittness)</p> :
                wittnesses.map(wittness =>(
                    console.log(wittness.id),
                    console.log(wittness.date))
                    //  <Wittness key={wittness.id} {...wittness} {...books}/>
                ) )
        }
    
    </div>
