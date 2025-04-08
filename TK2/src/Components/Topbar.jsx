import React from "react";
import { BellIcon, QuestionMarkCircleIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import "../App.css"
function Topbar() {
    return (
        <div className="Topbar">
            <h2>Dashboard</h2>
            <div className="nav">
            <input type="text" name="search" id=""  placeholder="Search..."/>
            <div style={{ display: 'flex', gap: '10px' }}>
                <BellIcon className="icon" />
                <QuestionMarkCircleIcon className="icon" />
                <UserCircleIcon className="icon" />
            </div>
            </div>
        </div>
     );
}

export default Topbar;