import React from "react";
import "./Home.css";

function Home() {
  const dynamicContent = {
    name: "Vamshi Krishna",
    description: "Aspiring Full Stack Developer passionate about creating dynamic web applications."
  };

  return (
    <div className="home">
      <h1>Welcome to {dynamicContent.name}'s Portfolio</h1>
      <p>{dynamicContent.description}</p>
    </div>
  );
}

export default Home;
