import "../styles/SocialLinks.css";
import { Linkedin, Github } from "lucide-react";

const SocialLinks: React.FC = () => {
  return (
    <section className="social-section">
      <div className="social-card">
        <h2 className="social-title">Redes Sociais </h2>

        <div className="social-icons">
          <a
            href="https://github.com/celia-rocha"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
            aria-label="GitHub"
          >
            <Github size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/celia-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
