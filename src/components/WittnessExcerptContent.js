import React from 'react';
import PropTypes from 'prop-types';


import '../styles/css/WittnessExcerpt.scss'
import { HeartRating } from './heart/HeartRating';

export const WittnessExcerptContent = ({ content,page }) =>
    <div className="text-section">
         <div className="wrap-after"></div>
      <div>

            <p className="excerpt-content">{content}</p>
            <p className="page-number">——P.{page}</p>
      </div>

    </div>