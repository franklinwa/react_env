import React from 'react';
import PropTypes from 'prop-types';


import '../styles/css/WittnessReview.scss'

export const WittnessReview = ({ review }) =>
    <section className="wittness-review">
       
       <div className="box efect">
       <p>心得感悟</p>
       <div>
           <p>{review}</p>
       </div>
            
       </div>

    </section>