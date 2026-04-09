import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Orthodoxie & Occident",
  head: [["link", { rel: "icon", href: "/rosace-bg.png" }]],
  appearance: false,
  description: "A VitePress Site",
  themeConfig: {
    logo: "/rosace.png",
    nav: [
      { text: "Accueil", link: "/" },
      { text: "A propos", link: "/a-propos" },
    ],
    outlineTitle: "Sur cette page",
    returnToTopLabel: "Retour en haut",
    sidebar: {
      "/synaxaire/": [
        {
          text: "Synaxaire",
          items: [
            { text: "Introduction", link: "/synaxaire/" },
            { text: "Vies liturgiques", link: "/synaxaire/vies-liturgiques" },
            { text: "Vies completes", link: "/synaxaire/vies-longues" },
          ],
        },
      ],
      "/histoire/": [
        {
          text: "Histoire de l'Eglise",
          items: [{ text: "Introduction", link: "/histoire/" }],
        },
      ],
      "/comput/": [
        {
          text: "Comput et calendrier",
          items: [{ text: "Introduction", link: "/comput/" }],
        },
      ],
    },
    notFound: {
      title: "Page introuvable",
      quote: "Cette page n'existe pas ou a été déplacée.",
      linkText: "Retour à l'accueil",
      linkLabel: "Retour à l'accueil",
      code: "404",
    },
    docFooter: {
      prev: "Page précédente",
      next: "Page suivante",
    },
  },
});
