import React from 'react';
import PropTypes from 'prop-types';


import '../styles/css/Color.scss'
import { HeartRating } from './heart/HeartRating';

export const WittnessExcerpt = ({ content, page }) =>
    <section className="wittness-excerpt">
       
       <div className="wittness-excerpt">
       <p>{content}</p>
       <p>——P.{page}</p>
       </div>

    </section>