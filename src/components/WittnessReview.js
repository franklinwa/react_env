import React from 'react';
import PropTypes from 'prop-types';


import '../styles/css/WittnessReview.scss'

export const WittnessReview = ({ review }) =>
    <section className="wittness-review box">
       
       <div className="wittness-review">
            <p>{review}</p>
       </div>

    </section>