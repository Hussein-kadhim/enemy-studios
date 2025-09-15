import React from "react";
import "./styles/navbar.css";
import raceClicker from "../../src/assets/images/Race_Clicker.png";
import strongSimulator from "../../src/assets/images/strong_simulator.png";
import creepyCrawlers from "../../src/assets/images/creepy_crawlers.png";
import destroyerSimulator from "../../src/assets/images/destroyer_simulator.png";
import stealAnAnimal from "../../src/assets/images/steal_an_animal.png";
import frozenRailsAlpha from "../../src/assets/images/frozen_rails_alpha.png";
import bigLiftingSimulator2 from "../../src/assets/images/big_lifting_simulator_2.png";
import pushABlock from "../../src/assets/images/push_a_block.png";
import fortfight from "../../src/assets/images/fortfight.png";
import carBattle from "../../src/assets/images/car_battles.png";
import zombieArmySimulator from "../../src/assets/images/zombie_army_simulator.png";
import wallDestroyerSimulator from "../../src/assets/images/wall_destroyer_simulator.png";
import fatRaceSimulator from "../../src/assets/images/fat_race_simulator.png";
import richClickerSimulator from "../../src/assets/images/rich_clicker_simulator.png";
import muscleSimulator from "../../src/assets/images/muscle_clicker.png";
import bigLiftingSimulatorx from "../../src/assets/images/big_lifting_simulator_x.png";
import animePetSimulator from "../../src/assets/images/anime_pet_simulator.png";
import tenxPupArmy from "../../src/assets/images/10x_pup_army.png";

function Games() {
  const games = [
    {
      title: "Race Clicker",
      image: raceClicker,
      totalVisits: "991.6M+",
      groupMembers: "7M",
      url: "https://www.roblox.com/games/9285238704/Race-Clicker",
    },
    {
      title: "Strong Simulator",
      image: strongSimulator,
      totalVisits: "32.6M+",
      groupMembers: "373K+",
      url: "https://www.roblox.com/games/18383053761/Strong-Simulator",
    },
    {
      title: "Creepy Crawlers",
      image: creepyCrawlers,
      totalVisits: "30M+",
      groupMembers: "26K",
      url: "https://www.roblox.com/games/13251504936/Creepy-Crawlers",
    },
    {
      title: "Destroyer Simulator",
      image: destroyerSimulator,
      totalVisits: "32.6M+",
      groupMembers: "1M",
      url: "https://www.roblox.com/games/7025847767/Destroyer_Simulator",
    },
    {
      title: "Steal Animal",
      image: stealAnAnimal,
      totalVisits: "2M+",
      groupMembers: "23K+",
      url: "https://www.roblox.com/games/98847387964862/Steal_an_Animal",
    },
    {
      title: "Frozen Rails Alpha",
      image: frozenRailsAlpha,
      totalVisits: "24.7M+",
      groupMembers: "1M",
      url: "https://www.roblox.com/games/90290310553874/Frozen-Rails-ALPHA",
    },
    {
      title: "Big Lifting Simulator 2",
      image: bigLiftingSimulator2,
      totalVisits: "991.6M+",
      groupMembers: "7M",
      url: " https://www.roblox.com/games/5668883750/Big-Lifting-Simulator-2",
    },
    {
      title: "Push a Block V1",
      image: pushABlock,
      totalVisits: "1.5M+",
      groupMembers: "14K+",
      url: "https://www.roblox.com/games/139680828150626/Push-a-Block",
    },
    {
      title: "Fortfight",
      image: fortfight,
      totalVisits: "784.5k+",
      groupMembers: "17K",
      url: "https://www.roblox.com/games/110844191299275/FORTFIGHT-Gun-Fights",
    },
    {
      title: "Car Battle",
      image: carBattle,
      totalVisits: "275.4K+",
      groupMembers: "2,836",
      url: "https://www.roblox.com/games/17856915654/Car-Battles-Obby",
    },
    {
      title: "zombie Army Simulator",
      image: zombieArmySimulator,
      totalVisits: "1M+",
      groupMembers: "15.1M+",
      url: "https://www.roblox.com/games/9529019408/Zombie-Army-Simulator",
    },
    {
      title: "Wall Destroyer Simulator",
      image: wallDestroyerSimulator,
      totalVisits: "5.6M+",
      groupMembers: "1M",
      url: "https://www.roblox.com/games/11949126018/Wall-Destroyer-Simulator",
    },
    {
      title: "Fat Race Simulator",
      image: fatRaceSimulator,
      totalVisits: "11.8M+",
      groupMembers: "1M",
      url: "https://www.roblox.com/games/9382557519/Fat-Race-Simulator",
    },
    {
      title: "Rich Clicker Simulator",
      image: richClickerSimulator,
      totalVisits: "4.5M+",
      groupMembers: "1M",
      url: "https://www.roblox.com/games/11200197064/Rich-Clicker-Simulator",
    },
    {
      title: "Muscle clicker Simulator",
      image: muscleSimulator,
      totalVisits: "7.7M+",
      groupMembers: "1M+",
      url: "https://www.roblox.com/games/5668883750/Big-Lifting-Simulator-2",
    },
    {
      title: "Big Lifting Simulator X",
      image: bigLiftingSimulatorx,
      totalVisits: "4.5M+",
      groupMembers: "1M",
      url: "https://www.roblox.com/games/10754099167/Big-Lifting-Simulator-X",
    },
    {
      title: "Anime Pet Simulator",
      image: animePetSimulator,
      totalVisits: "1.8M+",
      groupMembers: "1M",
      url: "https://www.roblox.com/games/7891127762/Anime-Pet-Simulator",
    },
    {
      title: "Pup Army X10",
      image: tenxPupArmy,
      totalVisits: "1.7M+",
      groupMembers: "22k+",
      url: "https://www.roblox.com/games/106232414961903/10x-Pup-Army",
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
