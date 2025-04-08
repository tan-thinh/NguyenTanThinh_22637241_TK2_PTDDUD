import React from "react";
import { BellIcon, QuestionMarkCircleIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import "../App.css"
import avt from "../assets/IMG/Avatar 313.png"
function Topbar() {
    return (
        <div className="Topbar">
            <h2>Dashboard</h2>
            <div className="nav">
            <input type="text" name="search" id=""  placeholder="Search..."/>
            <div style={{ display: 'flex', gap: '15px' }}>
                <BellIcon className="icon" />
                <QuestionMarkCircleIcon className="icon" />
                {/* <UserCircleIcon className="icon" /> */}
                <img src={avt} alt="" />
            </div>
            </div>
        </div>
     );
}

export default Topbar;