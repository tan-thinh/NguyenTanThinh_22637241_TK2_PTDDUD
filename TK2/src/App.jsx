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
import MainLayout from "./Components/MainLayout";
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
  );
}

export default App
