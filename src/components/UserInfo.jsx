import React from "react";
import "../styles/UserInfo.css";
import RequiredInfo from "./RequiredInfo";
import DotIcon from "../assets/svg/dot.svg";

const UserInfo = ({
  name,
  genId,
  email,
  onNameClick,
  onEmailClick,
  className = "",
}) => {
  return (
    <div className={`personal-details ${className}`}>
      <div className="user-info-row">
        <div className="user-name" onClick={onNameClick}>
          {name}
        </div>
        <img src={DotIcon} alt="Separator" width="6" height="6" />
        <div className="user-gen-id">Gen ID: {genId}</div>
      </div>
      <div className="user-email" onClick={onEmailClick}>
        {email}
      </div>
    </div>
  );
};

export default UserInfo;
