// import { useState } from 'react'

import './App.css'
// import Button from '@mui/material/Button';
// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import DepartmentList from './components/DepartmentList';

function App() {
  

  return (
    <>
     <div>
     <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/second-page" element={<><SecondPage/> <div id='department'><DepartmentList/></div></>} />
        
      </Routes>
      
      </Router>
    </div>
    </>
  )
}

export default App
