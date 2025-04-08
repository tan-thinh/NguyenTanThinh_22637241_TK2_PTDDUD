import React from "react";
import '../App.css'
import { NavLink } from "react-router-dom";
function Sidebar() {
    return ( 
        <div className="Sidebar">
            <h2>Logo</h2>
            <ul className="menu">
                {/* <li id="render">Dashboard</li>
                <li>Projects</li>
                <li>Teams</li>
                <li>Analytics</li>
                <li>Messages</li>
                <li>Integrations</li> */}
               <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink></li> 
               <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''} >Projects</NavLink></li> 
               <li><NavLink to="/teams" className={({ isActive }) => isActive ? 'active' : ''} >Teams</NavLink></li> 
               <li><NavLink to="/analytics" className={({ isActive }) => isActive ? 'active' : ''} >Analytics</NavLink></li>
               <li><NavLink to="/messages" className={({ isActive }) => isActive ? 'active' : ''} >Messages</NavLink></li> 
                <li><NavLink to="/integrations" className={({ isActive }) => isActive ? 'active' : ''} >Integrations</NavLink></li>
            </ul>
        </div>
    );
}

export default Sidebar;