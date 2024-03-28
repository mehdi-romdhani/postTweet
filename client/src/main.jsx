import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import './index.css'
import {BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
            <Navbar/>
            <App />
      </BrowserRouter>
  </React.StrictMode>,
)
