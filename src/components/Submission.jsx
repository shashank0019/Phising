// Submission.jsx
import React, { useState } from 'react';
import '../styles/Submission.css';
import GroupIcon from '../assets/svg/Group.svg';
import vector from '../assets/svg/Vector.svg';
import vector2 from '../assets/svg/Vector (2).svg';

const VectorIcon = () => (
  <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 18L3.5 17V13H0V11L1.5 8.35V6H0V4H9V6H7.5V8.35L9 11V13H5.5V17L4.5 18ZM2.3 11H6.7L5.5 8.9V6H3.5V8.9L2.3 11ZM11.1 2H0C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H11.1C11.0667 0.166667 11.0417 0.329167 11.025 0.4875C11.0083 0.645833 11 0.816667 11 1C11 1.18333 11.0083 1.35417 11.025 1.5125C11.0417 1.67083 11.0667 1.83333 11.1 2ZM18 16H10V14H18V5.575C18.4 5.39167 18.7667 5.16667 19.1 4.9C19.4333 4.63333 19.7333 4.33333 20 4V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16Z" fill="#5856D6"/>
  </svg>
);

const DocumentIcon = () => (
  <svg className="document-icon" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
  </svg>
);

const NoteIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 4H16V6H8V4ZM6 8H18V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V8ZM10 10V12H14V10H10Z" fill="#6B7280"/>
    <path d="M10 4V2H14V4H10Z" fill="#6B7280"/>
  </svg>
);

const Submission = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [comment, setComment] = useState('');
  const [isNoteVisible, setIsNoteVisible] = useState(false);

  const toggleNoteVisibility = () => {
    setIsNoteVisible(!isNoteVisible);
  };

  return (
    <div className="submission-page">
      <div className="required-info-container">
        <div className="awareness-section">
          <div className="awareness-header">
            <h3 className="awareness-title">Awareness Training Questions</h3>
            <div style={{position: 'relative'}}>
              <button className="note-button">
                <VectorIcon />
                <span>Note</span>
              </button>

              {/* Vector (2) icon positioned on top of note button */}
              <img
                src={vector2}
                alt="Vector 2"
                className="note-vector2-icon"
                onClick={toggleNoteVisibility}
                style={{
                  cursor: 'pointer',
                  position: 'absolute',
                  top: '4px',
                  right: '20px',
                  zIndex: '12',
                  width: '6px',
                  height: '6px'
                }}
              />
            </div>
          </div>
          <form className="awareness-form" onSubmit={(e) => e.preventDefault()}>
            <div className="questions-container">
              <div className="question-block">
                <label className="question-label" htmlFor="q1">1. How would you report the email as SPAM in KNOX Portal *</label>
                <div className="options-group">
                  <label className={`option-radio ${q1 === 'op1' ? 'selected' : ''}`}>
                    <input type="radio" id="q1-op1" name="q1" value="op1" checked={q1 === 'op1'} onChange={(e) => setQ1(e.target.value)} />
                    <span className="custom-radio"></span>
                    By Simple forwarding it to the SRI-B Information Security team.
                  </label>
                  <label className={`option-radio ${q1 === 'op2' ? 'selected' : ''}`}>
                    <input type="radio" id="q1-op2" name="q1" value="op2" checked={q1 === 'op2'} onChange={(e) => setQ1(e.target.value)} />
                    <span className="custom-radio"></span>
                    By Using the KNOX Portal &quot;Report SPAM&quot; feature. So that my colleagues get an alert as Spam, When they open the said email
                  </label>
                  <label className={`option-radio ${q1 === 'op3' ? 'selected' : ''}`}>
                    <input type="radio" id="q1-op3" name="q1" value="op3" checked={q1 === 'op3'} onChange={(e) => setQ1(e.target.value)} />
                    <span className="custom-radio"></span>
                    By Clicking on the link and attachment in it and verifying if its Spam by myself.
                  </label>
                </div>
              </div>

              <div className="question-block">
                <label className="question-label" htmlFor="q2">2. In case of queries, what is the correct way to report the Spam email to SRI-B Information Security team (sri.bitsec@samsung.com)? *</label>
                <div className="options-group">
                  <label className={`option-radio ${q2 === 'op1' ? 'selected' : ''}`}>
                    <input type="radio" id="q2-op1" name="q2" value="op1" checked={q2 === 'op1'} onChange={(e) => setQ2(e.target.value)} />
                    <span className="custom-radio"></span>
                    By forwarding the email to sri.bsec@samsung.com.
                  </label>
                  <label className={`option-radio ${q2 === 'op2' ? 'selected' : ''}`}>
                    <input type="radio" id="q2-op2" name="q2" value="op2" checked={q2 === 'op2'} onChange={(e) => setQ2(e.target.value)} />
                    <span className="custom-radio"></span>
                    By forwarding the email as an attachment to sri.bsec@samsung.com.
                  </label>
                  <label className={`option-radio ${q2 === 'op3' ? 'selected' : ''}`}>
                    <input type="radio" id="q2-op3" name="q2" value="op3" checked={q2 === 'op3'} onChange={(e) => setQ2(e.target.value)} />
                    <span className="custom-radio"></span>
                    By Clicking on the link and attachment in it and verifying if its Spam by myself.
                  </label>
                </div>
              </div>
            </div>

            <div className="declaration-section">
              <h3 className="declaration-title">Declaration</h3>
              <ul className="declaration-list">
                <li>I hereby declare that I have gone through the &quot;Online Phishing awareness session&quot; and understood the dos and don&apos;ts of phishing and will abide by it.</li>
                <li>I understand that I will be liable for strict HR action in case I click on any link/attachment in any future phishing emails in SAMSUNG network.</li>
              </ul>
              <label className="declaration-checkbox">
                <input type="checkbox" checked={isAgreed} onChange={() => setIsAgreed(!isAgreed)} />
                <span className="custom-checkbox"></span>
                I Agree
              </label>
            </div>

            <div className="comment-section">
              <label className="comment-label" htmlFor="comment">Comment (Max: 500 Chars)</label>
              <textarea 
                id="comment" 
                className="comment-box" 
                value={comment} 
                onChange={(e) => setComment(e.target.value)} 
                maxLength="500" 
                placeholder="xxx-xxx-xx-xxx-x"
                style={{
                  '--placeholder-font-weight': '700',
                  '--placeholder-color': '#9ca3af'
                }}
              ></textarea>
            </div>
            
            <div className="form-actions-container">
              <div className="form-buttons">
                <button type="button" className="cancel-button">Back</button>
                <button type="submit" className="submit-button" disabled={!isAgreed || !q1 || !q2}>Submit</button>
              </div>
              <button type="button" className="view-policies-button">
                <img src={GroupIcon} alt="Group Icon" className="document-icon" />
                View Policies
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Submission;