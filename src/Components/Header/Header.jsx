import React from "react";
import "./Header.css";
import profileImage from "./profile_img.png";

const Header = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-subtitle">FULL STACK MERN DEVELOPER</p>

        <h1>
          Hi, I'm <span className="highlight">Krishna Garg</span>
          <br />
          Building Modern Web Applications.
        </h1>

        <p>
          I'm a Full Stack MERN Developer passionate about building fast,
          scalable, and responsive web applications using React, Node.js,
          Express.js, and MongoDB.
          <br />
          <br />
          Currently pursuing MCA while gaining real-world experience through
          internships and hands-on projects.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>

          <a href="#" className="btn-outline">
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src={profileImage}
          alt="Krishna Garg"
          className="profile-img"
        />
      </div>
    </section>
  );
};

export default Header;