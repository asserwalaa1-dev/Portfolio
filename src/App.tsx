import { useState } from "react";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiBriefcase,
  FiCode,
  FiDownload,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiPhone,
  FiX,
} from "react-icons/fi";

import "./App.css";

// ==========================================
// PROFILE DATA
// ==========================================

const profile = {
  name: "Asser Walaa",
  role: "Frontend Developer",
  email: "asserwalaa1@gmail.com",
  phone: "01099495963",
  whatsapp: "201099495963",
  linkedin: "https://www.linkedin.com/in/asser-walaa-820952230/",
  cvPath: "../public/Frontend.pdf",
};

// ==========================================
// SKILLS
// ==========================================

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Supabase",
  "Bootstrap",
  "Sass",
  "Git & GitHub",
];

// ==========================================
// EXPERIENCE
// ==========================================

const experience = [
  {
    company: "Code Clouders",
    role: "Frontend Developer Intern",
    period: "Jun 2023 – May 2024",
    description: "Frontend development internship.",
  },
  {
    company: "Al-mawkaa Company",
    role: "Online Training",
    period: "Jan 2023 – Mar 2023",
    description: "Online training program.",
  },
];

// ==========================================
// PROJECTS
// Add your project screenshots inside public/images
// ==========================================

const projects = [
  {
    title: "Brew & Bean",
    liveDemo: "https://coffee-shop-seven-flame.vercel.app/",

    images: [
      "../src/assets/coffeeshop1.png",
      "../src/assets/coffeeshop2.png",
      "../src/assets/coffeeshop3.png",
      "../src/assets/coffeeshop5.png",
      "../src/assets/coffeeshop7.png",
      "../src/assets/coffeeshop8.png",
    ],

    description:
      "I'm excited to share my latest project: Brew & Bean, a full-stack coffee shop website built to provide customers with a smooth browsing and reservation experience, alongside a dedicated admin dashboard for managing the cafe.",

    technologies: [
      "React",
      "TypeScript",
      "Bootstrap",
      "Vite",
      "Supabase",
      "Git & GitHub",
      "Vercel",
    ],
  },

  {
    title: "GameHub",
    liveDemo: "https://game-hub-one-gray.vercel.app/",

    images: [
      "../src/assets/gamehub1.jfif",
      "../src/assets/gamehub2.jfif",
      "../src/assets/gamehub3.jfif",
    ],

    description:
      "A responsive gaming discovery platform that allows users to explore video games, search for their favorite titles, and view detailed game information, ratings, and platforms using the RAWG API.",

    technologies: [
      "React",
      "TypeScript",
      "Chakra UI",
      "React Router",
      "RAWG API",
      "Axios",
      "Vite",
    ],
  },
];

// ==========================================
// MAIN APP COMPONENT
// ==========================================

function App() {
  // Controls mobile navigation menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu after clicking a navigation link
  const closeMenu = () => setMenuOpen(false);

  // Navbar links
  const navItems = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="portfolio">
      {/* ======================================
          NAVBAR
      ====================================== */}

      <nav className="navbar navbar-expand-md navbar-dark border-bottom border-secondary-subtle py-3">
        <div className="container">
          {/* Website logo */}
          <a className="navbar-brand fw-bold" href="#home" onClick={closeMenu}>
            <span className="accent">&lt;/&gt;</span> asser.dev
          </a>

          {/* Mobile menu toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Navigation links */}
          <div
            className={`${
              menuOpen ? "d-block" : "d-none"
            } d-md-flex navbar-collapse justify-content-end`}>
            <div className="navbar-nav align-items-md-center gap-md-3 mt-3 mt-md-0">
              {navItems.map(([label, href]) => (
                <a
                  className="nav-link"
                  href={href}
                  key={label}
                  onClick={closeMenu}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* ======================================
            HERO SECTION
        ====================================== */}

        <section id="home" className="container py-5">
          <div className="row align-items-center g-5 py-lg-5">
            {/* Hero introduction */}
            <div className="col-lg-7">
              <span className="badge rounded-pill border accent p-2 mb-4">
                FRONTEND DEVELOPER
              </span>

              <h1 className="display-3 fw-bold mb-4">
                Building digital
                <br />
                experiences with
                <br />
                <span className="gradient-text">clean code.</span>
              </h1>

              <p className="text-secondary fs-6 lh-lg mb-4">
                Hi, I'm {profile.name}. I build responsive, user-friendly web
                interfaces with React and TypeScript, turning ideas into
                engaging digital experiences.
              </p>

              {/* Hero action buttons */}
              <div className="d-flex flex-wrap gap-3">
                <a href="#projects" className="btn btn-primary custom-btn">
                  Explore My Work <FiArrowUpRight />
                </a>

                <a href="#contact" className="btn btn-outline-light">
                  Contact Me
                </a>

                <a
                  href={profile.cvPath}
                  className="btn btn-outline-light"
                  download>
                  <FiDownload className="me-2" />
                  Download CV
                </a>
              </div>

              {/* Social media links */}
              <div className="d-flex gap-4 mt-5 fs-4">
                <a
                  className="social-link"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn">
                  <FiLinkedin />
                </a>

                <a
                  className="social-link"
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                  title="Email">
                  <FiMail />
                </a>

                <a
                  className="social-link"
                  href={`https://wa.me/${profile.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  title="WhatsApp">
                  <FiPhone />
                </a>
              </div>
            </div>

            {/* Developer code preview */}
            <div className="col-lg-5">
              <div className="code-panel rounded-4 border p-4">
                <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
                  <span className="accent">
                    <FiCode className="me-2" />
                    developer.tsx
                  </span>

                  <span className="text-secondary">● ● ●</span>
                </div>

                <pre className="code-text mb-0">
                  <span className="code-purple">const</span> developer = {"{"}
                  {"\n"} name:{" "}
                  <span className="code-green">"{profile.name}"</span>,{"\n"}{" "}
                  role: <span className="code-green">"{profile.role}"</span>,
                  {"\n"} skills: [{"\n"}{" "}
                  <span className="code-green">"React"</span>,{"\n"}{" "}
                  <span className="code-green">"TypeScript"</span>
                  {"\n"} ],
                  {"\n"} alwaysLearning:{" "}
                  <span className="code-orange">true</span>
                  {"\n"}
                  {"};"}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================
            ABOUT SECTION
        ====================================== */}

        <section id="about" className="container py-5">
          <div className="section-heading mb-4">
            <p className="accent small fw-bold">01 — ABOUT ME</p>

            <h2 className="fw-bold">
              A little about <span className="gradient-text">what I do.</span>
            </h2>
          </div>

          <div className="row g-4">
            <div className="col-lg-7">
              <p className="text-secondary lh-lg">
                I'm a Frontend Developer and a graduate of the Faculty of
                Computers and Information Sciences at Mansoura University. I
                enjoy building responsive interfaces and turning designs into
                practical web applications.
              </p>
            </div>

            <div className="col-lg-5">
              <div className="custom-card p-4 rounded-4 h-100">
                <h5 className="fw-bold mb-3">My approach</h5>

                <p className="text-secondary mb-0 lh-lg">
                  Maintainable code, responsive layouts, and meaningful user
                  experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================
            SKILLS SECTION
        ====================================== */}

        <section id="skills" className="container py-5">
          <div className="section-heading mb-4">
            <p className="accent small fw-bold">02 — MY TOOLKIT</p>

            <h2 className="fw-bold">
              Technologies I <span className="gradient-text">work with.</span>
            </h2>
          </div>

          <div className="row g-3">
            {skills.map((skill) => (
              <div className="col-6 col-md-4 col-lg-3" key={skill}>
                <div className="custom-card rounded-3 p-3 h-100">
                  <span className="fw-semibold">{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================
            EXPERIENCE SECTION
        ====================================== */}

        <section id="experience" className="container py-5">
          <div className="section-heading mb-4">
            <p className="accent small fw-bold">03 — EXPERIENCE</p>

            <h2 className="fw-bold">
              My learning <span className="gradient-text">journey.</span>
            </h2>
          </div>

          <div className="row g-4">
            {experience.map((item) => (
              <div className="col-lg-6" key={item.company}>
                <article className="custom-card rounded-4 p-4 h-100">
                  <div className="d-flex align-items-start gap-3">
                    <div className="experience-icon">
                      <FiBriefcase />
                    </div>

                    <div>
                      <h3 className="h5 fw-bold mb-1">{item.company}</h3>

                      <p className="accent mb-1">{item.role}</p>

                      <p className="text-secondary small mb-3">{item.period}</p>
                    </div>
                  </div>

                  <p className="text-secondary lh-lg mb-0">
                    {item.description}
                  </p>
                </article>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================
            PROJECTS SECTION
            Each project has its own image carousel
        ====================================== */}

        <section id="projects" className="container py-5">
          <div className="section-heading mb-4">
            <p className="accent small fw-bold">04 — SELECTED WORK</p>

            <h2 className="fw-bold">
              Things I've <span className="gradient-text">been building.</span>
            </h2>
          </div>

          <div className="row g-4">
            {/* Loop through all projects */}
            {projects.map((project, index) => (
              <div className="col-lg-6" key={project.title}>
                <article className="custom-card rounded-4 overflow-hidden h-100">
                  {/* Project image slider */}
                  <div
                    id={`project-carousel-${index}`}
                    className="carousel slide project-carousel"
                    data-bs-ride="false">
                    {/* Carousel images */}
                    <div className="carousel-inner">
                      {project.images.map((image, imageIndex) => (
                        <div
                          className={`carousel-item ${
                            imageIndex === 0 ? "active" : ""
                          }`}
                          key={image}>
                          <img
                            src={image}
                            className="d-block w-100 project-image"
                            alt={`${project.title} screenshot ${imageIndex + 1}`}
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Previous and next buttons */}
                    {project.images.length > 1 && (
                      <>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target={`#project-carousel-${index}`}
                          data-bs-slide="prev"
                          aria-label="Previous image">
                          <span className="carousel-control-prev-icon" />
                        </button>

                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target={`#project-carousel-${index}`}
                          data-bs-slide="next"
                          aria-label="Next image">
                          <span className="carousel-control-next-icon" />
                        </button>

                        {/* Carousel image indicators */}
                        <div className="carousel-indicators">
                          {project.images.map((image, imageIndex) => (
                            <button
                              key={image}
                              type="button"
                              data-bs-target={`#project-carousel-${index}`}
                              data-bs-slide-to={imageIndex}
                              className={imageIndex === 0 ? "active" : ""}
                              aria-current={
                                imageIndex === 0 ? "true" : undefined
                              }
                              aria-label={`Slide ${imageIndex + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Project information */}
                  <div className="p-4">
                    <span className="accent small">PROJECT 0{index + 1}</span>

                    <h3 className="fw-bold mt-2">{project.title}</h3>

                    <p className="text-secondary lh-lg">
                      {project.description}
                    </p>

                    {/* Project technologies */}
                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((technology) => (
                        <span
                          className="badge technology-badge"
                          key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>

                    {/* Live Demo button */}
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary custom-btn">
                      Live Demo <FiArrowUpRight />
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================
            CONTACT SECTION
        ====================================== */}

        <section id="contact" className="container py-5 my-4">
          <div className="contact-panel rounded-4 p-4 p-md-5 text-center">
            <p className="accent small fw-bold">05 — GET IN TOUCH</p>

            <h2 className="display-6 fw-bold">
              Have a project in <span className="gradient-text">mind?</span>
            </h2>

            <p className="text-secondary my-4">
              I'm open to frontend opportunities, freelance projects, and
              collaborations.
            </p>

            {/* Contact information */}
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mb-4">
              <a className="project-link" href={`mailto:${profile.email}`}>
                <FiMail className="me-2" />
                {profile.email}
              </a>

              <a
                className="project-link"
                href={`https://wa.me/${profile.whatsapp}`}
                target="_blank"
                rel="noreferrer">
                <FiPhone className="me-2" />
                {profile.phone}
              </a>
            </div>

            {/* Contact actions */}
            <a
              className="btn btn-primary custom-btn"
              href={`mailto:${profile.email}`}>
              Let's Talk <FiArrowUpRight />
            </a>

            <div className="mt-3">
              <a className="project-link" href={profile.cvPath} download>
                <FiArrowDown className="me-2" />
                Download my CV
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ======================================
          FOOTER
      ====================================== */}

      <footer className="container border-top border-secondary-subtle py-4">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
          <a className="navbar-brand fw-bold" href="#home">
            <span className="accent">&lt;/&gt;</span> asser.dev
          </a>

          <span className="text-secondary small">
            Designed & built by {profile.name}
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
