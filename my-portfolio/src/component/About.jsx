import React from 'react';

const About = () => {
  const skills = {
    Frontend: [
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    ],
    Backend: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    ],
    Database: [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
    Tools: [
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    ],
  };

  return (
    // STEP 1: Background aur padding full-width <section> ko di gayi hai.
    <section
      id="about"
      className="py-5 position-relative"
      style={{
        background: "#212529", // Thoda darker background for better look
        color: "white",
      }}
    >
      {/* Wave SVG top */}
      <div className="position-absolute top-0 start-0 w-100" style={{ transform: "translateY(-99%)", zIndex: 1 }}>
        <svg viewBox="0 0 1440 320">
          <path
            fill="#212529"
            d="M0,160L48,160C96,160,192,160,288,144C384,128,480,96,576,106.7C672,117,768,171,864,186.7C960,203,1056,181,1152,160C1248,139,1344,117,1392,106.7L1440,96V0H0Z"
          ></path>
        </svg>
      </div>

      {/* STEP 2: Saara content ab iske andar .container me hai */}
      <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
        <h1 className="fw-bold mb-5">About Me</h1>
        <p className="lead mb-5 mx-auto" style={{ maxWidth: '700px' }}>
          I’m a passionate <span className="fw-bold text-primary">MERN Stack Developer</span> who loves building scalable, user-friendly, and web applications.
        </p>

        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="mb-5">
            <h3 className="fw-bold text-primary">{category}</h3>
            <div className="d-flex justify-content-center flex-wrap gap-4 mt-4">
              {items.map((skill) => (
                <div
                  key={skill.name}
                  className="text-center p-3 rounded-3"
                  style={{ 
                      width: "120px", 
                      background: 'rgba(255, 255, 255, 0.05)', // Subtle background
                      transition: 'transform 0.2s ease-in-out, background 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  }}
                  onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    style={{ width: "50px", height: "50px", objectFit: "contain" }}
                  />
                  <p className="mt-2 mb-0 fw-light">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Wave SVG bottom */}
      <div className="position-absolute bottom-0 start-0 w-100" style={{ transform: "translateY(99%) rotate(180deg)", zIndex: 1 }}>
        <svg viewBox="0 0 1440 320">
          <path
            fill="#212529"
            d="M0,160L48,160C96,160,192,160,288,144C384,128,480,96,576,106.7C672,117,768,171,864,186.7C960,203,1056,181,1152,160C1248,139,1344,117,1392,106.7L1440,96V320H0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default About;
