import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg';
import Navbar from './components/Navbar/navbar'
import Body from './components/Body/body'
import Admin from './components/Admin/admin'
import  Register from './components/Register/register'
import  Login from './components/Login/login'

function App() {
  return (
   <div>
    <Router>
          <Navbar />
         
          <div>
          <Route exact path="/" component={Body} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />

            
          </div>
          
      </Router>
      </div>
  );
}

export default App;
