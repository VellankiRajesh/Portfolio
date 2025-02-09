import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="content-container">
        <div className="intro-content">
          {" "}
          {/* Removed marginRight style */}
          <h2 className="dev-title" style={{ marginBottom: "1rem" }}>
            {" "}
            {/* Added smaller bottom margin */}
            Hi, I'm Rajesh 👋 <br />
            <span className="highlight">
              Front End Developer & Data Analyst
            </span>
          </h2>
          <p className="dev-description" style={{ marginBottom: "1.5rem" }}>
            {" "}
            {/* Added bottom margin */}I craft dynamic & engaging web
            experiences as a <strong>Front-End Developer</strong>
            <br />I uncover insights & drive decisions as a{" "}
            <strong>Data Analyst</strong>
          </p>
        </div>

        <div className="right-section">
          <div className="profile-container">
            <img
              src="../assets/profile.png"
              alt="Profile"
              className="profile-image"
            />
          </div>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/vellanki-rajesh-1b09a4285/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
              LinkedIn
            </a>
            <a
              href="https://github.com/VellankiRajesh"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
              GitHub
            </a>

            <a
              href="https://drive.google.com/file/d/1GfuFk10PhI5OvLBs8V29zjvyaMBMAS2-/view?usp=drivesdk"
              className="social-link"
              target="_blank"
            >
              <i className="fas fa-file-alt"></i>
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
