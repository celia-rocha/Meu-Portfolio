export interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Loja Virtual - Tech Shop 📱 ",
    description:
      "Projeto de página web para uma loja de eletrônicos, feito com HTML5 e CSS3, focado em design limpo e responsivo.",
    link: " https://celia-rocha.github.io/Loja-Eletronica/",
  },

  {
    id: 2,
    title: " Tela de Login 🔐",
    description:
      "Protótipo visual de interface de autenticação, desenvolvido em React e TypeScript, simulando funcionalidades de login de forma interativa e responsiva.",
    link: "https://celia-rocha.github.io/Tela-Login/",
  },

  {
    id: 3,
    title: "Clone do WhatsApp Web 💬 ",
    description:
      "Interface estática inspirada no WhatsApp Web, criada com HTML e CSS para simular a experiência visual do app.",
    link: "https://celia-rocha.github.io/WhatsApp-site/",
  },
];

export default projects;
