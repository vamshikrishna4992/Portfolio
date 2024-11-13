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
      <img src='https://imgs.search.brave.com/xFkz2rHVRFxHB3pOHKPh-9VUyP9DKszbVpTUzIP9HvM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvY29vbC1wcm9m/aWxlLXBpY3R1cmUt/ODdoNDZnY29iamw1/ZTR4dS5qcGc' alt="profile" />
    </div>
  );
}

export default Home;
