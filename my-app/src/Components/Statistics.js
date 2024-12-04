import React from 'react';

function Statistics({stats}){
    const formattedActivePercentage = stats.activepercentage.toFixed(2);
    const activeUsersBarWidth = formattedActivePercentage; 
    
    return(
        
                <div className="stats-container">
      <h1>Statistics</h1>
      <div className="stat-item">Total Users: {stats.totalusers}</div>
      <div className="stat-item">Active Users: {stats.activeusers}</div>
      <div className="stat-item">New SignUps: {stats.newSignUps}</div>
      <div className="stat-item stat-percentage">
        Active Users Percentage: {formattedActivePercentage}%
      </div>

      <div className="bar-container">
        <div
          className="active-users-bar"
          style={{ width: `${activeUsersBarWidth}%` }}
        ></div>
      </div>

    </div>
    )
}
export default Statistics;