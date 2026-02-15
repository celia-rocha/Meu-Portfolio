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
      "Landing page de loja de eletrônicos com catálogo de produtos, newsletter e layout responsivo. Feito com HTML5 e CSS3.",
    link: " https://celia-rocha.github.io/Loja-Eletronica/",
  },

  {
    id: 2,
    title: " Tela de Login 🔐",
    description:
      "Interface de login com React Hooks, validação de formulário, loading state, API mockada e componentização. Feito com React e TypeScript.",
    link: "https://celia-rocha.github.io/Tela-Login/",
  },

  {
    id: 3,
    title: "Clone do WhatsApp Web 💬 ",
    description:
      "Reprodução da interface do WhatsApp Web com lista de conversas, área de chat e design responsivo. Feito com HTML e CSS..",
    link: "https://celia-rocha.github.io/WhatsApp-site/",
  },
];

export default projects;
