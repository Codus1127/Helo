import React from 'react';
import './App.css';
import routes from './routes'
import Nav from './Components/Nav/Nav'
import Auth from './Components/Auth/Auth'
import {withRouter} from 'react-router-dom'

function App(props) {
  console.log(props)
  return (
    <div className="App">
     {props.location.pathname === '/' ? <Auth /> : <div> <Nav /> {routes} </div>}
     
    </div>
  );
}

export default withRouter(App);
