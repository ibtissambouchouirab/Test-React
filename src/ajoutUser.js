import React , { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';


class ajoutUser extends Component {
    
    constructor (props){
        super(props)
        this.state ={
            username :'',
            email :'',
            password : ''
        }
    }

    changeName = event => {
        this.setState({
            username : event.target.value
        })
    }
    changeMail = event =>{
        this.setState({
            email : event.target.value
        })

    }
    changePassword =  event =>{
        this.setState({
            password : event.target.value
        })

    }

    addUser =  event =>{
        console.log("add user ")
        var data = {
            "name": this.state.username,
            "mail": this.state.email,
            "password": this.state.password,
        }
        console.log("sending data "+data)
        fetch('http://localhost:8080/user/add', 
        {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              }, 
            body: JSON.stringify(data)
        }).catch(console.log)
      
    }

    render() {
       
        return (
          <Container className="App">
            <center><h2>Ajouter User </h2></center>
            <Form className="form">
             <Col>
                <FormGroup>
                  <Label for="nameInput">Name</Label>
                  <Input type="Text"name="name" id="nameInput" placeholder="Name"  required  value={this.state.username} onChange = {this.changeName}/>
                </FormGroup>
              </Col>  
              <Col>
                <FormGroup>
                  <Label for="emailInput">Email</Label>
                  <Input type="email" name="email" id="emailInput" placeholder="xxxxx@gmail.com" value={this.state.email} onChange = {this.changeMail}/>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="passwordInput">Password</Label>
                  <Input type="password" name="password" id="passwordInput" required placeholder="********" value={this.state.password} onChange = {this.changePassword}/>
                </FormGroup>
              </Col>
              <center><Button type='Submit' onClick={this.addUser}>Ajouter</Button></center>
            </Form>
            <hr></hr>
          </Container>
        );
      }
}
export default ajoutUser