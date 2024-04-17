// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Dados from './components/Dados';
import ViewIP from './components/ViewIP';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="left">
            <h1>Infnet - DevOps</h1>
          </div>
          <div className="center">
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/viewip">IPs</NavLink></li>
              <li><NavLink to="/dados">Dados</NavLink></li>
            </ul>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/viewip" element={<ViewIP />} />
            <Route path="/dados" element={<Dados />} />
          </Routes>
          
        </main>
      </div>
    </Router>
  );
}

export default App;
