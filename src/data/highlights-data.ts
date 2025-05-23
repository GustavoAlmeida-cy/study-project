// /data/highlights.ts

import fgvLogo from "@/assets/fgv_logo.png.png";
import senacLogo from "@/assets/senac_logo.png.png";
import bradescoLogo from "@/assets/bradesco_logo.png.png";

export const highlightsData = [
  {
    name: "Fundação Getulio Vargas (FGV)",
    badgeColor: "bg-blue-700",
    badgeText: "Excelência Acadêmica",
    logoUrl: fgvLogo,
    siteUrl: "https://educacao-executiva.fgv.br/cursos/gratuitos",
    description:
      "Referência nacional em educação executiva, a FGV oferece cursos gratuitos online em áreas como Administração, Direito e Economia, promovendo o desenvolvimento profissional com qualidade reconhecida.",
  },
  {
    name: "SENAC – Programa Senac de Gratuidade (PSG)",
    badgeColor: "bg-orange-600",
    badgeText: "Inclusão Profissional",
    logoUrl: senacLogo,
    siteUrl: "https://www.sp.senac.br/bolsas-de-estudo",
    description:
      "O PSG amplia o acesso à educação profissional gratuita para pessoas de baixa renda, oferecendo cursos em diversas áreas como Administração, Saúde, Tecnologia e Turismo, com foco na empregabilidade.",
  },
  {
    name: "Fundação Bradesco – Escola Virtual",
    badgeColor: "bg-red-600",
    badgeText: "Educação Acessível",
    logoUrl: bradescoLogo,
    siteUrl: "https://www.ev.org.br/",
    description:
      "A Fundação Bradesco disponibiliza mais de 80 cursos gratuitos online com certificado, abrangendo áreas como Tecnologia da Informação, Administração e Educação, contribuindo para a formação de milhões de brasileiros.",
  },
];
