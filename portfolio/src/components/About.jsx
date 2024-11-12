import React from "react";
import "./About.css";

function About() {
  const dynamicAboutInfo = {
    bio: "I am a full-stack developer with a passion for building interactive and dynamic websites. I am skilled in React, Node.js, Express, and MongoDB, and I'm always looking to learn new technologies."
  };

  return (
    <div className="about">
      <h1>About Me</h1>
      <p>{dynamicAboutInfo.bio}</p>
    </div>
  );
}

export default About;
