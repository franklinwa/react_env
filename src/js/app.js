import React from 'react';
import { start } from 'repl';

class StarRating extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            starsSelected: 0
        }
        this.change = this.change.bind(this)

    }
    
    change(starsSelected){
        this.setState({starsSelected})
    }

    render(){
        const {totalStars} = this.props
        const {starsSelected} = this.state
        return(
            <div className="stat-rating">
                {
                    [...Array(totalStars)].map((n,i)=>
                    <start key = {i} 
                           selected = {i<starsSelected}               
                    ></>)
                }
            
            </div>
        )
    }
}

class App extends React.Component {

    render() {
        return <div>Hello World!React 编程开发环境建设好了！！！</div>
    }
}

export default App