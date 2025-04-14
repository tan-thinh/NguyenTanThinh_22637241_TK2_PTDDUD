import React from "react";
import '../App.css'
// import { NavLink } from "react-router-dom";
import logo from "../assets/IMG/Logo.png"
import dashboard from "../assets/IMG/Squares four 1.png"
import folder from "../assets/IMG/Folder.png"
import group from "../assets/IMG/Groups.png"
import pie from "../assets/IMG/Pie chart.png"
import mess from "../assets/IMG/Chat.png"
import code from "../assets/IMG/Code.png"
function Sidebar() {
    return ( 
        <div className="Sidebar">
            <h2><img src={logo} alt="" /></h2>
            <ul className="menu">
               <li><img src={dashboard} alt="dashboard" className="icon" /> Dashboard</li> 
               <li><img src={folder} alt="dashboard" className="icon" />Projects</li> 
               <li><img src={group} alt="dashboard" className="icon" />Teams</li> 
               <li><img src={pie} alt="dashboard" className="icon" />Analytics</li>
               <li><img src={mess} alt="dashboard" className="icon" />Messages</li> 
                <li><img src={code} alt="dashboard" className="icon" />Integrations</li>
            </ul>
        </div>
    );
}

export default Sidebar;