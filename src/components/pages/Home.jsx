import React from "react";
import "../styles/home.css";
import robloxLogo from "../../assets/images/Roblox_Logo.png";
import veltraStudioLogo from "../../assets/images/Veltra_Studio_Logo.png";
import doBigLogo from "../../assets/images/Dobig_logo.png";

function Home() {
  return (
    <section id="home" className="home">
      <h2>Welcome to Enemy Studios</h2>
      <p>Game Acquisition & Services</p>
      <div className="brand-logos-placeholder">
        <p>We've worked with...</p>
        <div className="brand-logos">
          <img src={robloxLogo} alt="Roblox" />
          <img src={veltraStudioLogo} alt="Veltra Studios" />
          <img src={doBigLogo} alt="DoBigGames" />
        </div>
      </div>
    </section>
  );
}

export default Home;
