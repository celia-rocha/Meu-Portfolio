import "./About.css";

const About = () => {
  return (
    <section id="sobre" className="about-section">
      {" "}
      <div className="about-content">
        <div className="about-text">
          <h2>Sobre Mim</h2>
          <p className="about-intro">Olá! Me chamo Célia Rocha 👋</p>
          <p>
         Desenvolvedora Front-End com foco em React e TypeScript. Crio interfaces modernas, <br/> 
         responsivas e com atenção à experiência do usuário. Sempre buscando evoluir através de novos projetos e desafios.
          </p>
        </div>
        <div className="about-skills">
          <h3>Tecnologias & Ferramentas</h3>
          <div className="skills-grid">
            <span className="skill-tag">HTML5</span>
            <span className="skill-tag">CSS3</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">React</span>
            <span className="skill-tag">Tailwind CSS</span>
            <span className="skill-tag">Git</span>
            <span className="skill-tag">GitHub</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">Next.js</span>
            <span className="skill-tag">Figma</span>
            <span className="skill-tag">Responsive </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
