import "../styles/Contact.css";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contato" className="contact-section">
      <div className="contact-header">
        <h1 className="contact-title">Vamos Conversar?</h1>
        <p className="contact-text">
          Estou sempre aberta a aprender, colaborar e participar de novos
          projetos. Se quiser trocar ideias ou compartilhar oportunidades, entre
          em contato!
        </p>
      </div>

      <div className="contact-card">
        <h2 className="card-title">Informações de Contato</h2>

        {/* EMAIL */}
        <div className="contact-item">
          <div className="contact-icon-box">
            <Mail size={24} />
          </div>
          <div className="contact-info">
            <h3 className="info-label">Email</h3>
            <p className="info-value">celiarr.neves2@gmail.com</p>
          </div>
        </div>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/5596984126944"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <div className="contact-icon-box">
            <Phone size={24} />
          </div>
          <div className="contact-info">
            <h3 className="info-label">Telefone</h3>
            <p className="info-value">+55 (96) 984126944</p>
          </div>
        </a>

        {/* LOCALIZAÇÃO */}
        <div className="contact-item">
          <div className="contact-icon-box">
            <MapPin size={24} />
          </div>
          <div className="contact-info">
            <h3 className="info-label">Localização</h3>
            <p className="info-value">Balneário Camburiú</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
