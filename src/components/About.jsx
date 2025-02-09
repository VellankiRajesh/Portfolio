import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faPython,
  faGit,
  faBootstrap,
  faJava,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faCode,
  faBrain,
  faChartLine,
  faGripHorizontal,
  faBarChart,
  faX,
  faTextHeight,
} from "@fortawesome/free-solid-svg-icons";
import "./About.css";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons/faMicrosoft";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    {
      name: "HTML5/CSS3",
      level: 85,
      icon: faHtml5,
      color: "#E34F26",
    },

    {
      name: "JavaScript",
      level: 60,
      icon: faJs,
      color: "#F7DF1E",
    },
    {
      name: "React.js",
      level: 65,
      icon: faReact,
      color: "#61DAFB",
    },
    {
      name: "MongoDB",
      level: 75,
      icon: faDatabase,
      color: "#47A248",
    },
    {
      name: "Git",
      level: 80,
      icon: faGit,
      color: "#F05032",
    },
    {
      name: "Java",
      level: 70,
      icon: faJava,
      color: "#007396",
    },

    {
      name: "MySQL",
      level: 80,
      icon: faDatabase,
      color: "#4479A1",
    },
    {
      name: "Python",
      level: 80,
      icon: faPython,
      color: "#3776AB",
    },

    {
      name: "Power BI",
      level: 75,
      icon: faBarChart,
      color: "#FF9900",
    },
    {
      name: "Excel",
      level: 75,
      icon: faMicrosoft,
      color: "green",
    },
  ];


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.querySelector(".about-content");
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>

        <div className={`about-content ${isVisible ? "visible" : ""}`}>
          <div className="about-text">
            <h3 className="about-subtitle">Who am I?</h3>
            <div className="about-card">
              <p className="about-description">
                I'm Vellanki Rajesh, a Frontend Developer and Data Analyst. I
                specialize in creating responsive web applications using React
                and other modern technologies. With a strong background in data
                analysis, I have hands-on experience with tools like Python,
                Power BI, and Excel. My goal is to build intuitive user
                experiences and data-driven solutions that help businesses make
                better decisions.
              </p>
            </div>
          </div>
          <div className="education-section">
            <h3 className="about-subtitle">Education</h3>
            <div className="education-timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>B.Tech in Computer Science</h4>
                  <p>Vellore Institute of Technology, Amravati</p>
                  <span className="timeline-date">
                    2021 - Present / 8.79 CGPA
                  </span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Intermediate(Class 12th)</h4>
                  <p>Bhashyam</p>
                  <span className="timeline-date">2019 - 2021 / 97.7%</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Secondary Education(Class 10th)</h4>
                  <p>Sri Chaitanya School</p>
                  <span className="timeline-date">2018 - 2019 / 10 CGPA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h3 className="about-subtitle">Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <div className="skill-icon-name">
                      <div
                        className="icon-wrapper"
                        style={{ color: skill.color }}
                      >
                        <FontAwesomeIcon
                          icon={skill.icon}
                          className="skill-icon"
                        />
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="progress-bar-container">
                    <div
                      className={`progress-bar ${isVisible ? "animate" : ""}`}
                      style={{
                        "--progress": skill.level,
                        "--skill-color": skill.color,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education section remains the same */}
        </div>
      </div>
    </section>
  );
};

export default About;
