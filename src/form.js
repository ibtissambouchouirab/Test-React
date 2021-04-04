
import React , { Component } from 'react';

class formail extends Component {
    
    constructor (props){
        super(props)
        this.state ={
            username :'',
            email :''
        }
    }

    changeusername = event => {
        this.setState({
            username : event.target.value
        })
    }
    changemail =  event =>{
        this.setState({
            email : event.target.value
        })

    }

    changform =  event => {
       // console.log(' this.state.username')
       alert(this.state.username +' | '+ this.state.email)
    }

    render () {
        return( <form onSubmit = {this.changform}>
                <div> 
                   <h1 id="form1"> formail </h1> 
                   <label>user name </label>
                   <input type='text' value={this.state.username} onChange = {this.changeusername}></input> 
                   <br></br>
                   <label>Email</label>
                   <input type ='email' value={this.state.email} onChange = {this.changemail}></input>
                   <button type='submit'>Submit</button>
                </div>
                </form>
             )
    }   
}
export default formail