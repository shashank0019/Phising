// TrainingVideos.jsx
import React, { useState } from 'react';
import '../styles/TrainingVideos.css';
import videoThumbnail from '../assets/svg/& Video.png';
import chevronRight from '../assets/svg/Chevron right.svg';
import viewPoliceIcon from '../assets/svg/viewpolice.svg';

const TrainingVideos = ({ presenterImage }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(507);
  const [duration, setDuration] = useState(928);
  const [isAgreed, setIsAgreed] = useState(false);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = (currentTime / duration) * 100;

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgressClick = (e) => {
    const progressContainer = e.currentTarget;
    const rect = progressContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const progressWidth = rect.width;
    const clickPercentage = clickX / progressWidth;
    const newTime = Math.floor(clickPercentage * duration);
    setCurrentTime(newTime);
  };

  // SVG Icons as components
  const PlayIcon = () => (
    <svg className="play-icon" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
    </svg>
  );

  const PauseIcon = () => (
    <svg className="pause-icon" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
  );

  const SmallPlayIcon = () => (
    <svg className="control-icon" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M8 5a1 1 0 011 1v8a1 1 0 01-1.5.866l-6-4a1 1 0 010-1.732l6-4A1 1 0 018 5z" clipRule="evenodd" />
    </svg>
  );

  const SmallPauseIcon = () => (
    <svg className="control-icon" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M6 4a1 1 0 011 1v10a1 1 0 11-2 0V5a1 1 0 011-1zm6 0a1 1 0 011 1v10a1 1 0 11-2 0V5a1 1 0 011-1z" clipRule="evenodd" />
    </svg>
  );

  const VolumeIcon = () => (
    <svg className="control-icon" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.791L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.797-3.791a1 1 0 011.617.067zm7.824 4.924a1 1 0 01-1.414 1.414A3.972 3.972 0 0014 10a3.972 3.972 0 001.793-1.586 1 1 0 011.414 1.414zm2.829-2.828a1 1 0 01-1.415 1.414 7.946 7.946 0 000 11.228 1 1 0 01-1.414-1.414 5.946 5.946 0 000-8.414z" clipRule="evenodd" />
    </svg>
  );

  const SettingsIcon = () => (
    <svg className="control-icon" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
  );

  const FullscreenIcon = () => (
    <svg className="control-icon" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
    </svg>
  );

  const DocumentIcon = () => (
    <svg className="document-icon" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
    </svg>
  );

  return (
    <div style={{width: '100vw', padding: '0 20px', boxSizing: 'border-box', background: '#F9FAFB', minHeight: '100vh'}}>
      <div className="training-videos-container">
        <div className="video-section-wrapper" style={{transform: 'translateX(-25px)'}}>
          <h1 className="page-title">Phishing Awareness Video</h1>
          <div className="video-card">
            <div className="video-thumbnail-container">
              <img 
                src={videoThumbnail}
                alt="Video Thumbnail"
                className="video-thumbnail"
              />
              <div className="play-icon-overlay">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#1f2937" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5.00014V19.0001L19 12.0001L8 5.00014Z" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Declaration Section */}
          <div className="declaration-section">
            <h3 className="declaration-title">Declaration</h3>
            
            <div className="declaration-content">
              <p className="declaration-point">
                <span className="bullet">•</span> I hereby declare that I have gone through the "Online Phishing awareness session" and understood the dos and don'ts of phishing and will abide by it.
              </p>
              <p className="declaration-point">
                <span className="bullet">•</span> I understand that I will be liable for strict HR action in case I click on any link / attachment in any future phishing emails in SAMSUNG network.
              </p>
            </div>

            <div className="declaration-footer">
              <div className="agreement-section">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={isAgreed}
                    onChange={(e) => setIsAgreed(e.target.checked)}
                    className="checkbox-input"
                  />
                  <span className="custom-checkbox"></span>
                  <span className="checkbox-label">I Agree</span>
                </label>
                <div className="view-policies-container">
                  <button className="view-policies-btn">
                    <img src={viewPoliceIcon} alt="View Policies" className="document-icon" />
                    <span>View Policies</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingVideos;