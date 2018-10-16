import React from 'react';
import WittnessList from './components/WittnessList.js'
import AddColorForm from './components/AddColorForm.js'
import {books,wittnesses} from './components/data/datum.js'
import AllRate from './components/heart/AllRate'
import './styles/css/App.scss'
export default class App extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            books:books,
            wittnesses:wittnesses,
            allRate: []
          }
          this.rateWittness = this.rateWittness.bind(this)
          this.rateTotal = this.rateTotal.bind(this)

        }
        
        rateWittness(id,rating) {
            rating={
                "quantity":(rating.selected==false ? rating.quantity+1 : rating.quantity-1),
                "selected":!rating.selected}

            
            this.setState(prevState => ({
                wittnesses: prevState.wittnesses.map(wittness =>
                    (wittness.id !== id) ?
                        wittness : {...wittness,rating}
                    
                    )
            }))

         
            
        }
        rateTotal() {
            
            this.setState((prevState) => ({
                
                allRate: prevState.wittnesses.map(wittness =>
                    wittness.rating.quantity)
            }))
            console.log("rateTotal已经执行")
        }
    
        componentWillMount(){
            this.rateTotal()
        }

    render() {
        const {rateWittness,rateTotal} = this
        const {books,wittnesses,allRate} = this.state
        
        return ( 
            <div className="app">
                <AllRate allRate={allRate}/>
                <WittnessList books={books} allRate={allRate} wittnesses={wittnesses}  onRate={rateWittness} rateTotal={rateTotal}/>
            </div>
        )

    }
}

