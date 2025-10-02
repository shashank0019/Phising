import React from "react";
import "../styles/RequiredInfo.css";
import clipIcon from "../assets/svg/clip.svg";

const RequiredInfo = ({ onClick, className = "" }) => {
  return (
    <div className={`required-info ${className}`} onClick={onClick}>
      <img 
        src={clipIcon} 
        alt="Clip icon" 
        className="clipboard-icon"
      />
      <span className="required-text">Required Information</span>
    </div>
  );
};

export default RequiredInfo;
