import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      {/* Header */}
      <header className="resume-header">
        <h1>John Doe</h1>
        <p className="title">Frontend Developer</p>
        <p className="contact">
          📧 john.doe@email.com | 📞 +91 98765 43210 | 🌍 www.johndoe.dev
        </p>
      </header>

      {/* Summary */}
      <section className="resume-section">
        <h2>Summary</h2>
        <p>
          Passionate Frontend Developer with 3+ years of experience building
          responsive web applications using React, JavaScript, and modern UI
          frameworks.
        </p>
      </section>

      {/* Skills */}
      <section className="resume-section">
        <h2>Skills</h2>
        <ul className="skills">
          <li>React.js</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML5 / CSS3</li>
          <li>Responsive Design</li>
          <li>REST APIs</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      {/* Experience */}
      <section className="resume-section">
        <h2>Experience</h2>

        <div className="job">
          <h3>Frontend Developer | ABC Tech</h3>
          <span className="duration">Jan 2022 – Present</span>
          <ul>
            <li>Built responsive UI components with React.</li>
            <li>Integrated REST APIs with backend team.</li>
            <li>Improved performance, reducing load time by 30%.</li>
          </ul>
        </div>

        <div className="job">
          <h3>Web Developer | XYZ Solutions</h3>
          <span className="duration">Jun 2020 – Dec 2021</span>
          <ul>
            <li>Developed client websites with modern UI/UX.</li>
            <li>Ensured cross-browser compatibility and accessibility.</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="resume-section">
        <h2>Education</h2>
        <p>🎓 B.Tech in Computer Science - Anna University (2016 - 2020)</p>
      </section>
    </div>
  );
};

export default Resume;
