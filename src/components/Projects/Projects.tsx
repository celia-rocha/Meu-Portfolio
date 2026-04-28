import "./Projects.css";
import type { Project } from "../../data/projectsData";
import projectsData from "../../data/projectsData";
import { useState, useEffect } from "react";

const ProjectCard: React.FC<Project> = ({ title, description, link, githubLink }) => {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      
      <div className="project-buttons">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-button"
        >
          Demo
        </a>
        <a
          href={githubLink || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="project-github-button"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(3);

  // Detecta o tamanho da tela e ajusta quantos projetos mostrar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setProjectsPerPage(1); // Mobile: 1 projeto
      } else if (window.innerWidth < 1024) {
        setProjectsPerPage(2); // Tablet: 2 projetos
      } else {
        setProjectsPerPage(3); // Desktop: 3 projetos
      }
      setCurrentIndex(0); // Reseta para o início ao redimensionar
    };

    handleResize(); // Executa na primeira renderização
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < projectsData.length - projectsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section id="projetos" className="projects-section">
      <h2 className="section-title">Meus Projetos</h2>
      <p className="section-subtitle">
        Uma vitrine das aplicações que construí. Cada projeto reflete o foco que
        carrego no meu dia a dia, com dedicação e atenção aos detalhes.
      </p>
      <div className="carousel-wrapper">
        <button
          className="carousel-btn prev"
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          ←
        </button>

        <div className="projects-carousel">
          <div
            className="projects-track"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / projectsPerPage)
              }%)`,
            }}
          >
            {projectsData.map((project) => (
              <div key={project.id} className="project-slide">
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  githubLink={project.githubLink}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          className="carousel-btn next"
          onClick={nextSlide}
          disabled={currentIndex >= projectsData.length - projectsPerPage}
        >
          →
        </button>
      </div>
    </section>
  );
};

export default Projects;
