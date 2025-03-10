import React from "react";
import "./TeamShowcase.css";

const TeamShowcase = ({fullName, jobtitle}) => {
  return (
    <div className="employee-card">
      <div className="emp-info">
        <h2 className="emp-name">{fullName}</h2>
        <p className="emp-position">{jobtitle}</p>
      </div>
    </div>
  );
};

export default TeamShowcase;
