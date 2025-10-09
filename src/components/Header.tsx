import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <h1>Meu Portfólio ✨</h1>
      </div>

      <nav className="nav-links">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
