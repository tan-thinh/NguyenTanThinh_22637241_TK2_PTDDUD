import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
// import { Outlet } from "react-router-dom";
import Overview from "../components/Overview";
import dashboard from "../../public/IMG/Squares four 1.png"
import "../App.css"
import Dashboard from "../pages/Dashboard";
function MainLayout() {
    return (
      <div className="layout">
        <Sidebar />
        <div className="main-content">
          <Topbar />
          
          <div className="content">
          <h1 style={{ fontSize: '24px', marginBottom: '20px' }}><img src={dashboard} alt="" /> Overview</h1>
          <Overview />
          <Dashboard></Dashboard>
            {/* <Outlet /> */}
          </div>
        </div>
      </div>
    );
  }
export default MainLayout;
  