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
    link: " https://celia-c11.github.io/Loja-Eletronica/",
  },

  {
    id: 2,
    title: "Café Grão Dourado ☕️ ",
    description:
      "Site interativo de cafeteria com cardápio online, carrinho dinâmico, opção de finalizar compra e QR Code de pagamento, feito em HTML, CSS e JavaScript.",
    link: "https://celia-c11.github.io/Cafeteria-Virtual/",
  },

  {
    id: 3,
    title: "Clone do WhatsApp Web 💬 ",
    description:
      "Projeto de interface estática inspirado no WhatsApp Web, criado com HTML e CSS. A proposta foi treinar a construção de um layout moderno e organizado, simulando a experiência visual do app.",
    link: "https://celia-c11.github.io/WhatsApp-site/",
  },
];

export default projects;
