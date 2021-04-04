import React , { Component } from 'react'
import './myStyle.css'

class EventBind extends Component {

    constructor (props){
        super(props)
        this.state ={
           message: 'hello ;)'
        }
    }

    clickhand(){
     this.setState({
        message:'goodbye !'
     })
    }

    render(){
        return(
            <div>
                <div className='id1'>{this.state.message}</div>
                <button onClick={this.clickhand.bind(this)} > Click</button>
            </div>
        )
    }
}
export default EventBind