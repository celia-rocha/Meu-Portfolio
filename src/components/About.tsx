import "../styles/About.css";

const About = () => {
  return (
    <section id="sobre" className="about-section">
      {" "}
      {/* ← ADICIONE o id="sobre" */}
      <h2>Sobre Mim</h2>
      <div className="about-content">
        <div className="about-text">
          <p className="about-intro">Olá! Me chamo Célia Rocha 👋</p>
          <p>
            Tenho 24 anos e sou {""}
            <span style={{ color: "#f01cf08d" }}>
              Desenvolvedora Front-End.
            </span>{" "}
            {""}
            <br />
            Há um ano e meio atuo na criação de interfaces modernas e
            responsivas para web, com foco em acessibilidade, performance e uma
            boa experiência para o usuário. Atualmente, estou ampliando meus
            conhecimentos em React e explorando práticas de desenvolvimento que
            tornem minhas aplicações cada vez mais dinâmicas e eficientes.
          </p>
          Curso Redes de Computadores (em andamento), formação que iniciei antes
          de direcionar minha carreira para o Desenvolvimento Front-End, área
          pela qual me identifiquei e na qual sigo evoluindo constantemente
          através de novos projetos e desafios.
          <p>
            Minha verdadeira paixão está em
            <span style={{ color: "#f01cf08d" }}>
              {" "}
              {""}Desenvolver Experiências Digitais
            </span>
            , onde posso unir criatividade e código para criar soluções
            funcionais e visuais.
          </p>
        </div>
        <div className="about-skills">
          <h3>Tecnologias & Ferramentas</h3>
          <div className="skills-grid">
            <span className="skill-tag">HTML5</span>
            <span className="skill-tag">CSS3</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">React</span>
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
