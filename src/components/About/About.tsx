import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaFigma, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import "./About.css";

const About = () => {
  return (
    <section id="sobre" className="about-section">
      <div className="about-container">
        
        {/* TEXTO - CARD PRINCIPAL */}
        <div className="about-content">
          <div className="about-text">
            <h2>Sobre Mim</h2>
            <p className="about-intro">Olá! Me chamo Célia Rocha 👋</p>
            <p>
              Sou estudante de Redes de Computadores, mas como sempre fui apaixonada por design e afins, acabei me encontrando nas telas do Front-End. É aqui que consigo unir o mundo técnico com a criação visual.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Trabalho principalmente com React e TypeScript. Meu perfil de aprendizado é muito prático e autodidata: acredito fortemente no "mão na massa". Em vez de ficar presa eternamente apenas observando teoria, me desenvolvo construindo projetos reais do zero e superando os desafios na tela.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Sou muito esforçada, valorizo a simplicidade e meu objetivo diário é criar aplicações web que funcionem bem, tenham um código limpo e entreguem uma experiência agradável para o usuário.
            </p>
          </div>
        </div>

        {/* TECNOLOGIAS - CARD DISCRETO INFERIOR */}
        <div className="tech-content">
          <h3>Tecnologias & Ferramentas</h3>
          <div className="skills-grid">
            <span className="skill-tag"><FaHtml5 size={18} /> HTML5</span>
            <span className="skill-tag"><SiJavascript size={18} /> JavaScript</span>
            <span className="skill-tag"><FaReact size={18} /> React</span>
            <span className="skill-tag"><SiTailwindcss size={18} /> Tailwind</span>
            <span className="skill-tag"><FaGitAlt size={18} /> Git</span>
            
            <span className="skill-tag"><FaCss3Alt size={18} /> CSS3</span>
            <span className="skill-tag"><SiTypescript size={18} /> TypeScript</span>
            <span className="skill-tag"><SiNextdotjs size={18} /> Next.js</span>
            <span className="skill-tag"><FaFigma size={18} /> Figma</span>
            <span className="skill-tag"><FaGithub size={18} /> GitHub</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
