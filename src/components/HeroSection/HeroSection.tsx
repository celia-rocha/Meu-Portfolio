import "./HeroSection.css";
import profile from "../../assets/foto.jpg";
import { Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="profile-container">
        <img
          src={profile}
          alt="Minha foto de perfil"
          className="profile-pic"
        ></img>
      </div>
      <div className="hero-text">
        <h1>
          Olá, sou Célia Rocha <br />
          <span className="highlight">Desenvolvedora Frontend</span>
        </h1>
        <p className="description">
          Transformando lógica e criatividade em telas reais. Minha jornada no
          Front-End Junior é movida pela dedicação diária em criar interfaces
          que funcionam bem e entregam uma ótima experiência.
        </p>
      </div>
      <div className="cta-buttons">
        <a href="./curriculo.pdf" target="_blank" rel="noopener noreferrer">
          <button className="btn-secondary">
            <Download size={18} className="btn-icon" /> Baixar CV
          </button>
        </a>
        <a href="#sobre">
          <button className="btn-secondary">Sobre Mim</button>
        </a>
        <a href="#projetos">
          <button className="btn-primary">Ver Projetos</button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
