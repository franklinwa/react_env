import React from 'react';
import PropTypes from 'prop-types';
import Star from './Start.js'


export const StarRating = ({starsSelected = 0, totalStars = 5,onRate=f=>f}) =>
    <div className = "stat-rating" > {
        [...Array(totalStars)].map((n, i) =>
                (<Star key = {i}
                    selected = {i < starsSelected}
                    onClick = {() => onRate(i+1)}/>)
            )} 
            
            <p> {starsSelected} of { totalStars} stars </p>

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

StarRating.propTypes = {
totalStars: PropTypes.number
}

StarRating.defaultProps = {
totalStars: 5
}


