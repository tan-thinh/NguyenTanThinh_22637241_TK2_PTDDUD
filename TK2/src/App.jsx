import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
import Dashboard from './Pages/Dashboard';
import UserManagement from './Pages/UserManagement';
function App() {

  return (
    <div className="layout">
      <Sidebar/>
      <div className="main-content">
      <Topbar/>
      <Dashboard></Dashboard>
      <UserManagement></UserManagement>
      </div>
    </div>
  );
}

export default App
