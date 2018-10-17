import React from 'react';
import PropTypes from 'prop-types';


import '../styles/css/WittnessExcerpt.scss'
import { HeartRating } from './heart/HeartRating';

export const WittnessExcerptContent = ({ content,page }) =>
    <div>
       <p class="excerpt-content">{content}</p>
       <p class="page-number">——P.{page}</p>
    </div>