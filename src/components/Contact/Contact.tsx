import "./Contact.css";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contato" className="contact-section">
      <div className="contact-header">
        <h1 className="contact-title">Vamos Conversar?</h1>
        <p className="contact-text">
          Estou sempre aberta a aprender, colaborar e participar de novos
          projetos. Se quiser trocar ideias ou compartilhar oportunidades, entre
          em contato!
        </p>
      </div>

      <div className="contact-card">
        <h2 className="card-title">Informações de Contato</h2>

        {/* EMAIL */}
        <div className="contact-item">
          <div className="contact-icon-box">
            <Mail size={24} />
          </div>
          <div className="contact-info">
            <h3 className="info-label">Email</h3>
            <p className="info-value">celiarr.neves2@gmail.com</p>
          </div>
        </div>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/celia-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <div className="contact-icon-box">
            <Linkedin size={24} />
          </div>
          <div className="contact-info">
            <h3 className="info-label">LinkedIn</h3>
            <p className="info-value">/in/celia-dev</p>
          </div>
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/celia-rocha"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <div className="contact-icon-box">
            <Github size={24} />
          </div>
          <div className="contact-info">
            <h3 className="info-label">GitHub</h3>
            <p className="info-value">/celia-rocha</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
