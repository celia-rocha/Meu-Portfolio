import React from "react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          {" "}
          Desenvolvido com <span className="heart">❤️</span> por Célia Rocha
        </p>

        <p className="footer-copyright">
          © 2025 - Todos os direitos reservados. Feito com React, TypeScript e
          muito café ☕
        </p>
      </div>
    </footer>
  );
};

export default Footer;
