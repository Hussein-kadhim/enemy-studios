import React from "react";
import "../styles/about.css";

function About() {
  return (
    <section id="about" className="about">
      <h2>About Enemy Studios</h2>
      <p className="intro-text">
        Enemy Studios is more than just a game development team. We are
        creators, strategists, and passionate gamers who collaborate to design
        engaging virtual experiences that leave a lasting impact.
      </p>

      <div className="about-grid">
        <div className="about-card">
          <h3>Our Vision</h3>
          <p>
            To build gaming experiences that go beyond entertainment – games
            with soul, innovation, and scale that captivate global audiences.
          </p>
        </div>
        <div className="about-card">
          <h3>Our Mission</h3>
          <p>
            Creating high-quality, scalable, and widely-loved Roblox games that
            push the boundaries of creativity and technical excellence.
          </p>
        </div>
        <div className="about-card">
          <h3>Our Strengths</h3>
          <ul>
            <li>Advanced scripting & game optimization</li>
            <li>Visually engaging worlds & interfaces</li>
            <li>Strong community support & maintenance</li>
            <li>Strategic game acquisition & publishing</li>
          </ul>
        </div>
      </div>

      <div className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-member-card">
            <h3>Qskull</h3>
            <p className="role">CEO</p>
            <p className="bio">
              Leads the overall vision and strategic direction of Enemy Studios,
              ensuring our games consistently break new ground.
            </p>
          </div>
          <div className="team-member-card">
            <h3>[Name]</h3>
            <p className="role">COO</p>
            <p className="bio">
              Manages daily operations and resource allocation, ensuring smooth
              development cycles and efficient team collaboration.
            </p>
          </div>
          <div className="team-member-card">
            <h3>[Name]</h3>
            <p className="role">Project Manager</p>
            <p className="bio">
              Oversees game development projects from concept to launch, keeping
              teams on track and delivering on time.
            </p>
          </div>
          <div className="team-member-card">
            <h3>[Name]</h3>
            <p className="role">Lead Developer</p>
            <p className="bio">
              Drives the technical architecture and coding standards, creating
              robust and performant game systems.
            </p>
          </div>
          <div className="team-member-card">
            <h3>[Name]</h3>
            <p className="role">UI/UX Designer</p>
            <p className="bio">
              Crafts intuitive and visually stunning user interfaces, enhancing
              player immersion and usability.
            </p>
          </div>
          <div className="team-member-card">
            <h3>[Names]</h3>
            <p className="role">Marketing & Staff</p>
            <p className="bio">
              Engages with our community, manages social media, and ensures our
              games reach a wider audience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
