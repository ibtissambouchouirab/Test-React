import React , { Component } from 'react';
import Table from './table'

class tableProxy extends Component {

    state = {
        isError: Boolean,
        contacts: []
     }

     constructor(props){
        super(props);
        this.callApi();
        this.isError = false;
        this.contacts = [];
     }

    callApi() {
        fetch('http://localhost:8080/user/all')
        .then((res) => { 
           return res.json().then((data) => {this.isError = false; this.contacts = data})
        })
        .catch((error) => {
            this.isError = true;
        })
     }

     render() {
        return (
            <div>
              <Table isError={this.isError} contacts={this.contacts} ></Table>
            </div>            
          );
     }

}
export default tableProxy;