import React from "react";
import "../styles/Header.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ClockIcon from "../assets/svg/clockicon.svg";

const Header = ({
  breadcrumb,
  title,
  onBackClick,
  onClockClick,
  showBackArrow = true,
  showClockIcon = true,
}) => {
  // Split title if it contains " - Report" or similar suffix
  const renderTitle = () => {
    const parts = title.split(' - ');
    if (parts.length > 1) {
      return (
        <>
          {parts[0]}
          <span className="title-suffix"> - {parts.slice(1).join(' - ')}</span>
        </>
      );
    }
    return title;
  };

  return (
    <div className="header-section">
      {breadcrumb && (
        <div
          className="breadcrumb"
          onClick={() => onBackClick && onBackClick()}
        >
          {breadcrumb}
        </div>
      )}

      <div className="main-header">
        {showBackArrow && (
          <div className="back-arrow" onClick={onBackClick}>
            <ArrowBackIcon />
          </div>
        )}
        <h1 className="page-title">{renderTitle()}</h1>
        {showClockIcon && (
          <div className="clock-icon" onClick={onClockClick}>
            <img src={ClockIcon} alt="Clock" width="24" height="24" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
