import React from 'react';
import PropTypes from 'prop-types';
import Heart from './Heart.js'
import './heart.scss'

export const HeartRating = ({heartSelected, onRate=f=>f}) =>
    <div className = "heart-rating" > 
    {console.log(heartSelected)}
      <Heart {...heartSelected}
                    onClick = {() => (onRate())}/>
        </div>

HeartRating.propTypes ={
  heartSelected: PropTypes.bool,
  onRate:PropTypes.func
}
