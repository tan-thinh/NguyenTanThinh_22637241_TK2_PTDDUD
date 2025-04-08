import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
import Dashboard from './Pages/Dashboard';
import Project from "./Pages/Projects"
import Team from "./Pages/Teams"
import Analytic from "./Pages/Analytics"
import Messages from "./Pages/Messages"
import Integration from "./Pages/Integrations"
import Overview from "./Components/Overview"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
function App() {

  return (
    <Router>
      <div className="layout">
        <Sidebar />
        <div className="main-content">
          <Topbar />
          <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Overview</h1>
          <Overview />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/projects" element={<Project/>} />
              <Route path="/teams" element={<Team/>} />
              <Route path="/analytics" element={<Analytic></Analytic>} />
              <Route path="/messages" element={<Messages/>} />
              <Route path="/integrations" element={<Integration/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App
