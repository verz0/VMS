import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Students from './components/Student';
import Manage from './components/Manage';
import Event from './components/Event';
import Home from './components/Home';
import Login from './components/Login';
import RegistrationForm from './components/Register';
import './App.css';

function App() {
  return (
    
    <BrowserRouter>
    <div className="background"> 
        <ul> 
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <Navigation />
      <Routes>
        <Route exact path = "/" element = {<Home/>} />
         <Route path="/students" element={<Students/>} />
         <Route path="/manage" element={<Manage/>} />
         <Route path = "/events" element = {<Event/>} />
         <Route path = "/login" element = {<Login/>} />
         <Route path = "/register" element = {<RegistrationForm/>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
