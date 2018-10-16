import React from 'react';
import PropTypes from 'prop-types';

import {Wittness} from './Wittness.js'

import '../styles/css/ColorList.scss'
import AllRate from './heart/AllRate.js'
export default class WittnessList extends React.Component{

    constructor(props){
        super(props)
        
    }

    render() {
        return ( 
                <div className="wittness-list">
                    {
                    
                        (this.props.books.length===0) ? 
                        <p>还没有选择阅读的书籍...(选择一本.)</p> :
                        (console.log(this.props.books.name),(this.props.wittnesses.length === 0) ?
                            <p>目前，还没有建立阅享见证.(马上建立？)</p> :
                            this.props.wittnesses.map(wittness =>(
                                <Wittness key={wittness.id} wittness={wittness} books={this.props.books} allRate={this.props.allRate}  onRate={()=>(this.props.onRate(wittness.id,wittness.rating),this.props.rateTotal())}/>
                                )
                            ) )
                    }
    
                </div>
        )

    }
}

// export const WittnessList = ({ books={},wittnesses=[] }) =>
//     <div className="wittness-list">
//         {
//             (books.length===0) ? 
//             <p>还没有选择阅读的书籍...(选择一本.)</p> :
//             (console.log(books.name),(wittnesses.length === 0) ?
//                 <p>目前，还没有建立阅享见证.(马上建立？)</p> :
//                 wittnesses.map(wittness =>(
//                     <WittnessBasic key={wittness.id} {...wittness} {...books}/>
//                     )
//                 ) )
//         }
    
//     </div>
