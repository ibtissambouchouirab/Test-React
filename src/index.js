import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
//import Geer from './Geer';
//import Welcome from './welcome';
//import Content from './content';
//import EventBind from './EventBind';
//import Form from './form';  
import Table from './table'
import AjoutUser from './ajoutUser'

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        
        <AjoutUser></AjoutUser>
        <Table></Table>
      </div>
       
    );
  }
}
ReactDOM.render(
  <HelloMessage name="ibi" />,
    document.getElementById('hello-example')
  //<React.StrictMode>
   // <App />
 // </React.StrictMode>,
//  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
