  
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import { Navbar } from './components/common';
import './App.css';

import Home from './pages/Home';
import BoardGames from './pages/BoardGames';
import Gadgets from './pages/Gadgets';
import Gifts from './pages/Gifts';
import Login from './pages/Login';
import LoginFail from './pages/LoginFail';
import Logout from './pages/Logout';
import LoggedOut from './pages/LoggedOut';
import Notifications from './pages/Notifications';
import OrderForm from './pages/OrderForm';
import Password from './pages/Password';
import RequestSent from './pages/RequestSent';
import OrderRequest from './pages/OrderRequest';

function App() {
  return (
    <div className="App" style={{backgroundColor:" #D8D8D8"}}>

        <Switch>
          <Route path ="/" exact={true} component={Login}/>
          <Route path ="/LoginFail" component={LoginFail}/>
          <Route path ="/Logout" component={Logout}/>
          <Route path ="/LoggedOut" component={LoggedOut}/>
          <Route path ="/Password" component={Password}/>
          <Route path ="/RequestSent" component={RequestSent}/>
          <div>
            <Navbar />
            <Route path="/Home" component={Home}/>
            <Route path="/BoardGames" component={BoardGames}/>
            <Route path="/Gifts" component={Gifts}/>
            <Route path="/Gadgets" component={Gadgets}/>
            <Route path="/OrderForm" component={OrderForm}/>
            <Route path="/OrderRequest" component={OrderRequest}/>
            <Route path="/Notifications" component={Notifications}/>
            <Route path="/Toys" />
          </div>
        </Switch>
    </div>
  );
}
export default App;