// Projects.tsx

import "../styles/Projects.css";
import type { Project } from "../data/projetcsData";
import projectsData from "../data/projetcsData";

const ProjectCard: React.FC<Project> = ({ title, description, link }) => {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-button"
      >
        ~Ver Projeto~
      </a>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projetos" className="projects-section">
      <h2 className="section-title">Projetos:</h2>
      <div className="projects-container">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
