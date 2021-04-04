import React , { Component } from 'react';
//import {  BootstrapTable,TableHeaderColumn } from 'react-bootstrap-table';
//import 'http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css';
//import './react-bootstrap-table.css';

//import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory, { PaginationProvider, PaginationTotalStandalone, PaginationListStandalone } from 'react-bootstrap-table2-paginator';

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import { Button } from 'reactstrap';

const { SearchBar, ClearSearchButton } = Search;

class table extends Component {
   
   state = {
      isError: Boolean,
      contacts: [ ],
   }

   constructor(props){
      super(props);
      
      fetch('http://localhost:8080/user/all')
      .then((res) => { 
         return res.json().then((data) => { this.setState ({isError:false}); this.setState({contacts:data});
       })
      })
      .catch((error) => {
         console.log("CATCH");
         this.setState ({isError:true});
      })
   }
/*
   componentDidMount(){
      fetch('http://localhost:8080/user/all')
      .then((res) => { 
         return res.json().then((data) => { this.setState ({isError:false}); this.setState({contacts:data}); })
      })
      .catch((error) => {
         console.log("CATCH");
         this.setState ({isError:true});
      })
   }
*/    
   renderError() {
      return (<p>ERROR ya ERROR</p>)
   }
   
   deleteOne (row){
      console.log("delete row "+row)
      fetch('http://localhost:8080/user/delete/'+row.userid, 
      {
          method: "POST",
      }).catch(console.log)
   }

   


   renderTableData() {
     // console.log(this.state.contacts)
     const options = {
      custom: true,
      totalSize: this.state.contacts.length
    };
     const addButtonLancamento = (row) =>
     {
          return (
              <div>
                  <Button style={{ backgroundColor: "#ee4466", border: "none",  margin: "5%", boxShadow: "5px 5px 3px rgba(220, 20, 60, 0.62)"}}  onClick={()=> this.deleteOne(row)}>Delete User</Button>                   
              </div>
          )
     };
  
     const columns =
     [
        {
            dataField: "userid",
            text: "UserId",
            sort: true
        },
        {
            dataField: "name",
            text: " Name",
            sort: true
         },
         {
            dataField: "mail",
            text: "Mail",
            sort: true
         },
         {
            dataField: "action",
            text: "Action", 
            formatter:addButtonLancamento
         }
      ];

      return (
         <PaginationProvider pagination={ paginationFactory(options) }>
          {({ paginationProps, paginationTableProps}) => 
       (   
       <div>
            <center><h1>User List</h1></center>
            
            <ToolkitProvider keyField="id" data={ this.state.contacts.name } columns={ columns } search>
            {
               props => (
                  <div>
                     <SearchBar { ...props.searchProps } />  
                     <ClearSearchButton { ...props.searchProps } />
                     
                     <BootstrapTable bootstrap4 { ...paginationTableProps } { ...props.baseProps } keyField="id"  data={this.state.contacts}  columns={columns}  deleteRow striped hover condensed  noDataIndication="Table is Empty"/>   
                 </div>
               )
            }
            </ToolkitProvider>
            
            <PaginationTotalStandalone { ...paginationProps }/>
            <PaginationListStandalone  { ...paginationProps }/>
      </div>
         )
      }
    </PaginationProvider>

        /* <div>
        <BootstrapTable data={this.state.contacts} >
               <TableHeaderColumn  isKey dataField='userid' isKey={true} dataAlign="center" dataSort={true}></TableHeaderColumn>
               <TableHeaderColumn dataField='name'dataSort={true}></TableHeaderColumn>
               <TableHeaderColumn dataField='mail' ></TableHeaderColumn>
           </BootstrapTable>

            <center><h1>Contact List</h1></center>
            {this.state.contacts.map((contact) => (
               <div key={contact.userid}>
                  <div className="card-body">
                     <h5 className="card-title">{contact.name}</h5>
                     <h6 className="card-subtitle mb-2 text-muted">{contact.mail}</h6>
                     <p className="card-text">{contact.userid}</p>
                  </div>
               </div>
            ))}
         </div> */
         
      )
   }
   
   render () {
      let body; 
      if(this.state.isError){
         console.log("render KO");
         body = this.renderError();
      }else {
         console.log("render OK");
         body = this.renderTableData();
      }

      return (
         <div>
            {body}     
            
         </div>
      )
   }


}
export default table
