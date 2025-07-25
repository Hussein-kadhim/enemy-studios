import React from "react";
import "../styles/home.css";
import robloxLogo from "../../assets/images/Roblox_Logo.png";
import veltraStudioLogo from "../../assets/images/Veltra_Studio_Logo.png";
import doBigLogo from "../../assets/images/Dobig_logo.png";
import americanHeartAssociationLogo from "../../assets/images/American_Heart_Association.png";
import clubKolaLogo from "../../assets/images/Club_Kola.png";
import cricketWorldCupIndia from "../../assets/images/Cricket_World_Cup_India_2023.png";
import fortnite from "../../assets/images/fortnite.png";
import playstore from "../../assets/images/playstore.png";

function Home() {
  return (
    <section id="home" className="home">
      <h2>Welcome to Enemy Studios</h2>
      <p>Game Acquisition & Services</p>
      <div className="brand-logos-placeholder">
        <p>We've worked with...</p>
        <div className="brand-logos">
          <div className="logos-track">
            <img src={robloxLogo} alt="Roblox" />
            <img src={veltraStudioLogo} alt="Veltra Studios" />
            <img src={doBigLogo} alt="DoBigGames" />
            <img
              src={americanHeartAssociationLogo}
              alt="American Heart Association"
            />
            <img src={clubKolaLogo} alt="Club Kola" />
            <img src={cricketWorldCupIndia} alt="Cricket World Cup India" />
            <img src={fortnite} alt="Fortnite" />
            <img src={playstore} alt="Playstore" />
            {/* Duplicate for seamless scroll */}
            <img src={robloxLogo} alt="Roblox" />
            <img src={veltraStudioLogo} alt="Veltra Studios" />
            <img src={doBigLogo} alt="DoBigGames" />
            <img
              src={americanHeartAssociationLogo}
              alt="American Heart Association"
            />
            <img src={clubKolaLogo} alt="Club Kola" />
            <img src={cricketWorldCupIndia} alt="Cricket World Cup India" />
            <img src={fortnite} alt="Fortnite" />
            <img src={playstore} alt="Playstore" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
