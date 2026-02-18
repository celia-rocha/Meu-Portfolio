import { useState } from "react";
import { Menu, X } from "lucide-react";
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <h1>Meu Portfólio ✨</h1>
      </div>

      <button className="menu-toggle" onClick={toggleMenu} aria-label="Abrir menu">
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          </li>
          <li>
            <a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre Mim</a>
          </li>
          <li>
            <a href="#projetos" onClick={() => setIsMenuOpen(false)}>Projetos</a>
          </li>
          <li>
            <a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
