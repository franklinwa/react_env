import React from 'react';

import StarRating from './components/StarRating.js'


export default class App extends React.Component {

    render() {
        return ( 
        <div > Hello World!React 编程开发环境建设好了！！！ 
            <StarRating starsSelected={4} /> </div>
        )

    }
}
