import React from 'react';
import PropTypes from 'prop-types';


import '../styles/css/WittnessExcerpt.scss'
import { HeartRating } from './heart/HeartRating';

export const WittnessExcerpt = ({ content, page }) =>

       
       <div>
       <p>{content}</p>
       <p>——P.{page}</p>
       </div>

