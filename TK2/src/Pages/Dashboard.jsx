import React from "react";
import Overview from "../Components/Overview";
function Dashboard() {
    return ( <div>
        <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Overview</h1>
        <Overview />
        {/* OverView + Table sẽ làm ở commit sau */}
      </div> );
}

export default Dashboard;