import ssb from "../assets/project/ssb.png";
import gravity from "../assets/project/gravity.png";
import water from "../assets/project/water.png";
import cfs from "../assets/project/cfs.png";
export const ProjectsModel = [
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
