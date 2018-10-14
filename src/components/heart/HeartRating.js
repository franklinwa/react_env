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



// export default class StarRating extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             starsSelected: props.starsSelected || 0
//         }
//         this.change = this.change.bind(this)

//     }

//     change(starsSelected) {
//         this.setState({
//             starsSelected
//         })
//     }

//     render() {
//         const {totalStars} = this.props
//         const {starsSelected} = this.state
//         return ( 
//             <div className = "stat-rating" > {
//                 [...Array(totalStars)].map((n, i) =>
//                         (<Star key = {i}
//                             selected = {i < starsSelected}
//                             onClick = {() => this.change(i + 1)}/>)
//                     )} 
                    
//                     <p> {starsSelected} of { totalStars} stars </p>

//                 </div>
//             )
//         }
//     }




