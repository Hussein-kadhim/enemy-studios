import React from "react";
import "./styles/navbar.css";
import raceClicker from "../../src/assets/images/Race_Clicker.png";
import obbyTycoon from "../../src/assets/images/obby_Tycoon.png";
import escapeMadness from "../../src/assets/images/Escape_Madness.png";

function Games() {
  const games = [
    {
      title: "Race Clicker",
      image: raceClicker,
      totalVisits: "18.2M",
      groupMembers: "124K",
      url: "https://www.roblox.com/games/111111111/Race-Clicker",
    },
    {
      title: "Obby Tycoon",
      image: obbyTycoon,
      totalVisits: "5.6M",
      groupMembers: "62K",
      url: "https://www.roblox.com/games/222222222/Obby-Tycoon",
    },
    {
      title: "Escape Madness",
      image: escapeMadness,
      totalVisits: "3.9M",
      groupMembers: "47K",
      url: "https://www.roblox.com/games/333333333/Escape-Madness",
    },
  ];

  return (
    <section id="games" className="games">
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

export default Games;
