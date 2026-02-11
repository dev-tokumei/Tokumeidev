import ssb from "../assets/project/ssb.webp";
import gravity from "../assets/project/gravity.webp";
import water from "../assets/project/water.webp";
import cfs from "../assets/project/cfs.webp";
import mdesign from "../assets/project/mdesign.webp";
import devi from "../assets/project/devi.webp";
import seolift from "../assets/project/seolift.webp";

export const ProjectsModel = [
  {
    name: "SEOLIFT",
    title:
      "SeoLift — сервис, который предотвращает потерю клиентов и позиций в поиске из-за незамеченных ошибок на сайте",
    stack: { vue: "Vue JS", tw: "Bootstrap css" },
    src: seolift,
    link: "https://seolift.biz/",
  },
  {
    name: "DEVI",
    title:
      "Devi Hub — платформа для продвижения digital-услуг и креативных проектов в Японии.",
    stack: { vue: "React", tw: "css" },
    src: devi,
    link: "https://devi-hub.com",
  },
  {
    name: "MDESIGN.TJ",
    title:
      "Портал MDESIGN — современная дизайнерская мебель на заказ в Душанбе.",
    stack: { vue: "React", tw: "Tailwind css" },
    src: mdesign,
    link: "https://mdesign.tj",
  },
  {
    name: "CFS.TJ",
    title: "кумитаи бехатарии озуқавории назди ҳукумати ҷумхурии тоҷикистон",
    stack: { vue: "React", tw: "Tailwind css" },
    src: cfs,
    link: "https://cfs.tj/",
  },
  {
    name: "Gravity.Studio",
    title:
      "Является IT студией Таджикистана которое создаёт продающие, имиджевые сайты и предлагает нестандартные решения. ",
    stack: { vue: "React", tw: "Tailwind css" },
    src: gravity,
    link: "https://gravity-ruby.vercel.app/",
  },
  {
    name: "SSB.TJ",
    title:
      "Банк который предлагает государственную гарантию, доступные процентные ставки, предложение кредита в национальной валюте.",
    stack: { vue: "Vue JS", tw: "Tailwind css" },
    src: ssb,
    link: "https://www.ssb.tj/",
  },
  {
    name: "Water Simulation",
    title:
      "интерактивный симулятор, позволяющий исследовать водные ресурсы нашей планеты Земля. На глобусе изображены страны, реки и мировые океаны.",
    stack: { vue: "React JS", tw: "Globe.gl" },
    src: water,
    link: "https://water-simulation-pearl.vercel.app/",
  },
];
