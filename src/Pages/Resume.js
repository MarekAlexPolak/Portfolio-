import React from 'react';
import './Resume.css';
import myResume from "../assets/resume.pdf";
import resumePic from "../assets/images/resumepic.jpg";

const ResumePage = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <div className="resume-image-container">
        <a href={myResume} target="_blank" rel="noopener noreferrer" download>
          <img src={resumePic} alt="Resume" className="resume-image" />
        </a>
      </div>
    </section>
  );
};

export default ResumePage;