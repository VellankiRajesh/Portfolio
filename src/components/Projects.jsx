import { useEffect, useState } from "react";
import "./Projects.css";
import portfolio from "../assets/portfolio.png";
import credit from "../assets/credit.png";
import hate from "../assets/hate.png";
import sales from "../assets/Sales.png";

const Projects = () => {
  const [imageLoadError, setImageLoadError] = useState({});

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website built with React and modern CSS animations",
      image: portfolio,
      liveLink: "https://your-live-site.com",
      githubLink: "https://github.com/yourusername/project",
      technologies: ["React", "CSS", "HTML"],
    },
    {
      title: "Hate Speech Detection",
      description:
        "Project uses NLP and machine learning to classify text as hate speech or non-hate speech, improving online content moderation and safety.",
      image: hate,
      githubLink: "https://github.com/VellankiRajesh/Hate-Speach-Detection",
      technologies: ["Python", "Numpy & Pandas", "Scikit-learn"],
    },
    {
      title: "Sales Forecasting Analysis",
      description:
        "Project predicts future sales trends using historical data. It leverages Python, Power BI, and Excel for data visualization, trend analysis, and business decision-making.",
      image: sales,
      liveLink:
        "https://app.powerbi.com/groups/me/reports/cb6f2a8b-3827-4c52-bf9d-79e1eda3544c/ReportSection?experience=power-bi",
      githubLink:
        "https://github.com/VellankiRajesh/sales_forecasting_analysis",
      technologies: ["Power BI", "Excel", "Python"],
    },
    {
      title: "Credit EDA",
      description:
        "Project involved analyzing credit data to identify trends, detect anomalies, and improve risk assessment. Using Python insights were derived to enhance decision-making in financial analysis.",
      image: credit,
      githubLink: "https://github.com/VellankiRajesh/credit-eda",
      technologies: ["Python", "np & pd", "seaborn & matplotlib"],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
      observer.disconnect();
    };
  }, []);

  const handleImageError = (index) => {
    setImageLoadError((prev) => ({ ...prev, [index]: true }));
  };

  const getFallbackImage = () => {
    return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMzIwIiBmaWxsPSIjZWVlZWVlIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMThweCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgYWxpZ25tZW50LWJhc2VsaW5lPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZmlsbD0iIzk5OTk5OSI+SW1hZ2Ugbm90IGF2YWlsYWJsZTwvdGV4dD48L3N2Zz4=";
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-wrapper">
                <img
                  src={imageLoadError[index] ? getFallbackImage() : project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                  onError={() => handleImageError(index)}
                />
                <div className="project-overlay">
                  <div
                    className={`project-links ${
                      !project.liveLink ? "single-link" : ""
                    }`}
                  >
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link live-demo"
                      >
                        <i className="fas fa-external-link-alt"></i>
                        Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link github"
                      >
                        <i className="fab fa-github"></i>
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
