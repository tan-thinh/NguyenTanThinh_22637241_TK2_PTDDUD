import React from "react";
import '../App.css'
import { NavLink } from "react-router-dom";
import logo from "../../public/IMG/Logo.png"
import dashboard from "../../public/IMG/Squares four 1.png"
import folder from "../../public/IMG/Folder.png"
import group from "../../public/IMG/Groups.png"
import pie from "../../public/IMG/Pie chart.png"
import mess from "../../public/IMG/Chat.png"
import code from "../../public/IMG/Code.png"
function Sidebar() {
    return ( 
        <div className="Sidebar">
            <h2><img src={logo} alt="" /></h2>
            <ul className="menu">
               <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}><img src={dashboard} alt="dashboard" className="icon" /> Dashboard</NavLink></li> 
               <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''} ><img src={folder} alt="dashboard" className="icon" />Projects</NavLink></li> 
               <li><NavLink to="/teams" className={({ isActive }) => isActive ? 'active' : ''} ><img src={group} alt="dashboard" className="icon" />Teams</NavLink></li> 
               <li><NavLink to="/analytics" className={({ isActive }) => isActive ? 'active' : ''} ><img src={pie} alt="dashboard" className="icon" />Analytics</NavLink></li>
               <li><NavLink to="/messages" className={({ isActive }) => isActive ? 'active' : ''} ><img src={mess} alt="dashboard" className="icon" />Messages</NavLink></li> 
                <li><NavLink to="/integrations" className={({ isActive }) => isActive ? 'active' : ''} ><img src={code} alt="dashboard" className="icon" />Integrations</NavLink></li>
            </ul>
        </div>
    );
}

export default Sidebar;