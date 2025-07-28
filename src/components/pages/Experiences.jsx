import React from "react";
import "../styles/experiences.css";
import raceClicker from "../../assets/images/Race_Clicker.png";
import strongSimulator from "../../assets/images/strong_simulator.png";
import creepyCrawlers from "../../assets/images/creepy_crawlers.png";

function Experiences() {
  const games = [
    {
      title: "Race Clicker",
      image: raceClicker,
      totalVisits: "991.6M+",
      groupMembers: "7M",
      url: "https://www.roblox.com/games/9285238704/UPD-Race-Clicker",
    },
    {
      title: "Strong Simulator",
      image: strongSimulator,
      totalVisits: "32.6M+",
      groupMembers: "373K+",
      url: "https://www.roblox.com/games/8876694280/Strong-Simulator-UPDATE",
    },
    {
      title: "Creepy Crawlers",
      image: creepyCrawlers,
      totalVisits: "30M+",
      groupMembers: "26k+",
      url: "https://www.roblox.com/games/13251504936/Creepy-Crawlers",
    },
  ];

  return (
    <section id="experiences" className="experiences">
      <h2>Our Top Games</h2>
      <div className="games-grid">
        {games.map((game, index) => (
          <div className="game-card" key={index}>
            <img src={game.image} alt={game.title} className="game-image" />
            <h3>{game.title}</h3>
            <div className="game-stats">
              <p>
                <span className="stat-label">👁️ Total Visits:</span>{" "}
                <span className="stat-value">{game.totalVisits}</span>
              </p>
              <p>
                <span className="stat-label">👤 Group Members:</span>{" "}
                <span className="stat-value">{game.groupMembers}</span>
              </p>
            </div>
            <a
              href={game.url}
              target="_blank"
              rel="noopener noreferrer"
              className="play-button"
            >
              Play on Roblox
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiences;
