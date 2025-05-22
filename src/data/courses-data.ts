import { Courses } from "@/components/sections/data_table/course/columns";

export async function getCoursesData(): Promise<Courses[]> {
  return [
    {
      id: "1",
      college: "USP",
      type: "Estadual",
      cost: "Grátis",
      students: "+90 mil",
      entrances: "FUVEST/ENEM",
      quality: "⭐⭐⭐⭐⭐",
      focus: "Medicina, Engenharia, Direito",
      link: "https://www5.usp.br/",
    },
    {
      id: "2",
      college: "Unicamp",
      type: "Estadual",
      cost: "Grátis",
      students: "+35 mil",
      entrances: "Comvest/ENEM",
      quality: "⭐⭐⭐⭐⭐",
      focus: "Exatas, Medicina, Computação",
      link: "https://www.unicamp.br/",
    },
    {
      id: "3",
      college: "Unesp",
      type: "Estadual",
      cost: "Grátis",
      students: "+50 mil",
      entrances: "Vestibular/ENEM",
      quality: "⭐⭐⭐⭐",
      focus: "Saúde, Engenharia, Agrárias",
      link: "https://www2.unesp.br/",
    },
    {
      id: "4",
      college: "FATEC",
      type: "Estadual",
      cost: "Grátis",
      students: "+80 mil",
      entrances: "Vestibular",
      quality: "⭐⭐⭐",
      focus: "Tecnologia Aplicada, Gestão, TI",
      link: "https://www.vestibular.fatec.sp.gov.br/",
    },
  ];
}
