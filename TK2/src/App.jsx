import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import Project from "./pages/Projects"
import Team from "./pages/Teams"
import Analytic from "./pages/Analytics"
import Messages from "./pages/Messages"
import Integration from "./pages/Integrations"
import Overview from "./components/Overview"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <Router>
            <Routes>
              <Route path="/" element={<MainLayout></MainLayout>}>
              <Route index element={<Dashboard/>} />
              <Route path="/projects" element={<Project/>} />
              <Route path="/teams" element={<Team/>} />
              <Route path="/analytics" element={<Analytic></Analytic>} />
              <Route path="/messages" element={<Messages/>} />
              <Route path="/integrations" element={<Integration/>} />
              </Route> 
            </Routes>
    </Router>
  )
  
}

export default App
