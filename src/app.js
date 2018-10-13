import React from 'react';
import {WittnessList} from './components/WittnessList.js'
import AddColorForm from './components/AddColorForm.js'

// color 数据数组
// {
//     books= {
//             "id": "0001",
//             "name": "运河人家",
//             "press": "海天出版社",
//             "publish": "2018年1月"
//            }
    
//     wittnesses= [
//         {
//             "id": "0001",
//             "date": "2018年10月13日",
//             "pages":[
//                 {
//                     "start":1,
//                     "end"  :12
//                 }
//             ],
//             "review":"心得感悟",
//             "excerpts":[
//                 {
//                     "content":"摘录一",
//                     "page"   :4
//                 },
//                 {
//                     "content":"摘录二",
//                     "page"   :5
//                 },
//                 {
//                     "content":"摘录三",
//                     "page"   :8
//                 }
//             ]
//         }
//     ]

// }

export default class App extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            books:{
                    "id": "0001",
                    "name": "运河人家",
                    "press": "海天出版社",
                    "publish": "2018年1月"
                    },
            wittnesses: [
                {
                    "id": "0001",
                    "date": "2018年10月13日",
                    "pages":[
                        {
                            "start":1,
                            "end"  :12
                        }
                    ],
                    "review":"心得感悟",
                    "excerpts":[
                        {
                            "content":"摘录一",
                            "page"   :4
                        },
                        {
                            "content":"摘录二",
                            "page"   :5
                        },
                        {
                            "content":"摘录三",
                            "page"   :8
                        }
                    ]
                }
            ]
            
        }

    }

    render() {
        const {books,wittnesses} = this.state
        return ( 
            <div className="app">
                <WittnessList books={books} wittnesses={wittnesses}/>
            </div>
        )

    }
}
