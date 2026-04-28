export interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "MovieDesk 🎬",
    description:
      "Plataforma SaaS de filmes com consumo da API TMDB, autenticação via Firebase e design Glassmorphism. Feito com React 19, TypeScript e Tailwind CSS.",
    link: "https://celia-rocha.github.io/MovieDesk/",
    githubLink: "https://github.com/celia-rocha/MovieDesk",
  },
  {
    id: 2,
    title: "Login Pages ✨",
    description:
      "Interface de autenticação moderna com efeito Glassmorphism, design responsivo e animações suaves. Feito com React e Tailwind CSS v4.",
    link: "https://celia-rocha.github.io/login-pages/",
    githubLink: "https://github.com/celia-rocha/login-pages",
  },
  {
    id: 3,
    title: "Tech Shop 🛒",
    description:
      "Landing page de loja de eletrônicos com catálogo de produtos, newsletter e layout responsivo. Feito com HTML5 e CSS3.",
    link: "https://celia-rocha.github.io/Loja-Eletronica/",
    githubLink: "https://github.com/celia-rocha/Loja-Eletronica",
  },
  {
    id: 4,
    title: "Tela de Login 🔐",
    description:
      "Interface de login com React Hooks, validação de formulário, loading state, API mockada e componentização. Feito com React e TypeScript.",
    link: "https://celia-rocha.github.io/Tela-Login/",
    githubLink: "https://github.com/celia-rocha/Tela-Login",
  },
  {
    id: 5,
    title: "Clone do WhatsApp Web 💬",
    description:
      "Reprodução da interface do WhatsApp Web com lista de conversas, área de chat e design responsivo. Feito com HTML e CSS.",
    link: "https://celia-rocha.github.io/WhatsApp-site/",
    githubLink: "https://github.com/celia-rocha/WhatsApp-site",
  },
];

export default projects;
