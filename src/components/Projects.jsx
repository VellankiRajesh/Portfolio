import { useEffect } from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website built with React and modern CSS animations",
      image: "../assets/portfolio.png",
      liveLink: "https://your-live-site.com", // Project with both links
      githubLink: "https://github.com/yourusername/project",
      technologies: ["React", "CSS", "HTML"],
    },
    {
      title: "Hate Speech Detection",
      description:
        "project uses NLP and machine learning to classify text as hate speech or non-hate speech, improving online content moderation and safety.",
      image: "../assets/hate.png",
      githubLink: "https://github.com/VellankiRajesh/Hate-Speach-Detection", // Project with only GitHub link
      technologies: ["Python", "Numpy & Pandas", "Scikit-learn"],
    },
    {
      title: "Sales Forecasting Analysis",
      description:
        "project predicts future sales trends using historical data. It leverages Python, Power BI, and Excel for data visualization, trend analysis, and business decision-making.",
      image: "../assets/Sales.png",
      liveLink:
        "https://app.powerbi.com/groups/me/reports/cb6f2a8b-3827-4c52-bf9d-79e1eda3544c/ReportSection?experience=power-bi", // Project with both links
      githubLink:
        "https://github.com/VellankiRajesh/sales_forecasting_analysis",
      technologies: ["Power BI", "Excel", "Python"],
    },
    {
      title: "Credit EDA",
      description:
        "involved analyzing credit data to identify trends, detect anomalies, and improve risk assessment. Using Python insights were derived to enhance decision-making in financial analysis.",
      image: "../assets/credit.png",
      technologies: ["Python", "np & pd", "seaborn & matplotlib"],
    },
    // Add more projects...
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

    document.querySelectorAll(".project-card").forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
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
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github"
                    >
                      <i className="fab fa-github"></i>
                      Source Code
                    </a>
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
