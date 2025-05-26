// /data/notices.ts

import proacLogo from "@/assets/proac_logo.png";
import mincLogo from "@/assets/minc_logo.png";

export const noticesData = [
  {
    name: "Programa de Ação Cultural (ProAC)",
    badgeColor: "bg-cyan-700",
    badgeText: "Editais Abertos",
    logoUrl: proacLogo,
    siteUrl: "https://www.cultura.sp.gov.br/",
    description:
      "Iniciativa do Governo de SP que oferece editais e incentivos fiscais para apoiar artistas e coletivos culturais. O ProAC contempla diversas linguagens como teatro, dança, música, artes visuais e literatura.",
  },
  {
    name: "Ministério da Cultura (MinC)",
    badgeColor: "bg-purple-600",
    badgeText: "Fomento Nacional",
    logoUrl: mincLogo,
    siteUrl: "https://www.gov.br/cultura/pt-br",
    description:
      "Órgão do governo federal responsável por políticas públicas culturais em todo o país. O MinC promove editais, programas de fomento como a Lei Rouanet e ações para democratizar o acesso à cultura.",
  },
];
