import React from 'react';
import PropTypes from 'prop-types';


import '../styles/css/WittnessReview.scss'

export const WittnessReview = ({ review }) =>
    <section className="wittness-review">
       
       <div className="box efect">
       <h1 className="title">心得感悟</h1 >
       <div>
           <p className="review-content">{review}</p>
       </div>
            
       </div>

    </section>