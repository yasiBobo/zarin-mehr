import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.scss'
import Home from './Home';
import Result from "./Results.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<App />} />
        <Route exact path="/result" element={<Result />} />
      </Routes>
    </React.StrictMode>
  </Router>
)
