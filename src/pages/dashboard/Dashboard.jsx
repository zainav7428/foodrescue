import React from "react";

function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* Sidebar */}
      <div className="dashboard-sidebar">

        <h2>FoodRescue</h2>

        <nav>
          <a href="#">Overview</a>
          <a href="#">Donate Food</a>
          <a href="#">Available Food</a>
          <a href="#">My Donations</a>
          <a href="#">Requests</a>
          <a href="#">Profile</a>
        </nav>

      </div>

      {/* Main Content */}
      <main className="dashboard-main">

        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <p>Welcome to FoodRescue</p>
        </div>

        <div className="dashboard-cards">

          <div className="dashboard-card">
            <h3>Total Donations</h3>
            <h2>0</h2>
          </div>

          <div className="dashboard-card">
            <h3>Food Rescued</h3>
            <h2>0 kg</h2>
          </div>

          <div className="dashboard-card">
            <h3>Active Requests</h3>
            <h2>0</h2>
          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;