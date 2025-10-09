import "../styles/HeroSection.css";
import profile from "../assets/minha-foto.jpeg";

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
          Olá, eu sou <br />
          <span className="highlight">Desenvolvedora Frontend</span>
        </h1>
        <p className="description">
          Apaixonada pelo processo de aprendizado e por transformar meus
          conhecimentos em códigos que criam experiências digitais incríveis.
        </p>
      </div>
      <div className="cta-buttons">
        <a href="#projetos">
          <button className="btn-primary">Ver Meus Projetos</button>
        </a>
        <a href="#sobre">
          <button className="btn-secondary">Sobre Mim</button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
