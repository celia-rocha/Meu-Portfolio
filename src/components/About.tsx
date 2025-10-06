import React from "react";
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
              Desenvolvedora Frontend
            </span>{" "}
            {""}
            apaixonada por criar experiências digitais incríveis. Há dois anos
            me dedico à criação de sites e aplicações web, sempre buscando
            entregar interfaces que sejam não apenas bonitas, mas também
            funcionais e acessíveis.
          </p>
          Tenho interesse em transformar ideias em projetos práticos e
          agradáveis de usar, sempre buscando evoluir e encarar novos desafios.
          No momento, estou focada em aprimorar minhas habilidades em React e
          explorando outras ferramentas que possam tornar minhas criações mais
          dinâmicas e eficientes.
          <p>
            Minha verdadeira paixão está no
            <span style={{ color: "#f01cf08d" }}> {""}web design</span>, onde
            posso unir criatividade e código para criar experiências visuais
            impactantes. ✨
          </p>
        </div>
        <div className="about-skills">
          <h3>Tecnologias & Ferramentas</h3>
          <div className="skills-grid">
            <span className="skill-tag">HTML5</span>
            <span className="skill-tag">CSS3</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">React</span>
            <span className="skill-tag">Figma</span>
            <span className="skill-tag">Next.js</span>
            <span className="skill-tag">Responsive </span>
            <span className="skill-tag">TypeScript</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
