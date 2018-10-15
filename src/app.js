import React from 'react';
import {ColorList} from './components/ColorList.js'
import AddColorForm from './components/AddColorForm.js'
import {v4} from 'uuid'
// color 数据数组
{
    colors: [
        {
            "id": "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
            "title": "ocean at dusk",
            "color": "#00c4e2",
            "rating": 5
        },
        {
            "id": "83c7ba2f-7392-4d7d-9e23-35adbe186046",
            "title": "lawn",
            "color": "#26ac56",
            "rating": 3
        },
        {
            "id": "a11e3995-b0bd-4d58-8c48-5e49ae7f7f23",
            "title": "bright red",
            "color": "#ff0000",
            "rating": 0
        },
        {
            "id": "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
            "title": "ocean at dusk",
            "color": "#00c4e2",
            "rating": 5
        },
        {
            "id": "83c7ba2f-7392-4d7d-9e23-35adbe186046",
            "title": "lawn",
            "color": "#26ac56",
            "rating": 3
        },
        {
            "id": "a11e3995-b0bd-4d58-8c48-5e49ae7f7f23",
            "title": "bright red",
            "color": "#ff0000",
            "rating": 0
        }
    ]
}

export default class App extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            colors: [
                {
                    "id": "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
                    "title": "ocean at dusk",
                    "color": "#00c4e2",
                    "rating": 5
                },
                {
                    "id": "83c7ba2f-7392-4d7d-9e23-35adbe186046",
                    "title": "lawn",
                    "color": "#26ac56",
                    "rating": 3
                },
                {
                    "id": "a11e3995-b0bd-4d58-8c48-5e49ae7f7f23",
                    "title": "bright red",
                    "color": "#ff0000",
                    "rating": 0
                },
                {
                    "id": "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
                    "title": "ocean at dusk",
                    "color": "#00c4e2",
                    "rating": 5
                },
                {
                    "id": "83c7ba2f-7392-4d7d-9e23-35adbe186046",
                    "title": "lawn",
                    "color": "#26ac56",
                    "rating": 3
                },
                {
                    "id": "a11e3995-b0bd-4d58-8c48-5e49ae7f7f23",
                    "title": "bright red",
                    "color": "#ff0000",
                    "rating": 0
                }
            ]
        }
        this.addColor = this.addColor.bind(this)

    }
    addColor(title,color){
        this.setState(prevState =>({
            colors: [
                ...prevState.colors,
                {
                    id: v4(),
                    title,
                    color,
                    rating:0
                }
            ]
        }))
    }
    render() {
        const {addColor} =this
        const {colors} = this.state
        return ( 
            <div className="app">
                <AddColorForm onNewColor={addColor}/>
                <ColorList colors={colors}/>
            </div>
        )

    }
}
