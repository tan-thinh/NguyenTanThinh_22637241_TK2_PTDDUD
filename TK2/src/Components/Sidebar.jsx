import React from "react";
import '../App.css'
function Sidebar() {
    return ( 
        <div className="Sidebar">
            <h2>Logo</h2>
            <ul className="menu">
                <li id="render">Dashboard</li>
                <li>Projects</li>
                <li>Teams</li>
                <li>Analytics</li>
                <li>Messages</li>
                <li>Integrations</li>
            </ul>
        </div>
    );
}

export default Sidebar;