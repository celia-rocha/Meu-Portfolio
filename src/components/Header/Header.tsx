import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Efeito para aplicar o tema no HTML
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    // Força repaint no mobile (Safari/Chrome) para evitar cores invertidas
    document.body.classList.add("theme-switching");
    
    setIsDarkMode(!isDarkMode);

    setTimeout(() => {
      document.body.classList.remove("theme-switching");
    }, 500);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <h1>Meu Portfólio ✨</h1>
      </div>

      <div className="header-right">
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

        <div className="header-actions">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme} 
            aria-label="Trocar tema"
          >
            {isDarkMode ? <Moon size={22} /> : <Sun size={22} />}
          </button>

          <button className="menu-toggle" onClick={toggleMenu} aria-label="Abrir menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
