import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ListEmployeeComponent from './ListEmployeeComponent';
import HeaderComponent from './HeaderComponent';

import CreateEmployeeComponent from './CreateEmployeeComponent';
import ViewEmployeeComponent from './ViewEmployeeComponent';

function App() {
  return (
    <div>
         <Router>
              <HeaderComponent />
                <div className="container">
               
      
        <Routes>
                          <Route exact path = "/" element = {<ListEmployeeComponent/>}></Route>
                          <Route exact path = "/employees" element = {<ListEmployeeComponent/>}></Route>
                          <Route exact path = "/add-employee/:id" element = {<CreateEmployeeComponent/>}></Route>
                          <Route exact path = "/view-employee/:id" element = {<ViewEmployeeComponent/>}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                          </Routes>
      

                </div>
               </Router>
        
    </div>
    
  );
}

export default App;