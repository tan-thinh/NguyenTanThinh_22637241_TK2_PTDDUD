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
               <li><NavLink to="/" id="render">Dashboard</NavLink></li> 
               <li><NavLink to="/dashboard" >Projects</NavLink></li> 
               <li><NavLink to="/dashboard" >Teams</NavLink></li> 
               <li><NavLink to="/dashboard" >Analytics</NavLink></li>
               <li><NavLink to="/dashboard" >Messages</NavLink></li> 
                <li><NavLink to="/dashboard" >Integrations</NavLink></li>
            </ul>
        </div>
    );
}

export default Sidebar;