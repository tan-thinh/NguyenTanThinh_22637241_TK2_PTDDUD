import React from "react";
import '../App.css'
// import { NavLink } from "react-router-dom";
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