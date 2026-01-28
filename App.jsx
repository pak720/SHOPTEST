import React from "react";
import "./App.css";

const App = () => {
  const handleGetStarted = () => {
    alert("Welcome to Paradise Nursery!");
    // Later you can navigate to your shop page here
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>Your home for beautiful, healthy plants</p>
        <button onClick={handleGetStarted}>Get Started</button>
      </div>
    </div>
  );
};

export default App;
