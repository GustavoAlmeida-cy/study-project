"use client";

// * Icons
import mansonImage from "@/assets/mason_1.svg";
import bookImage from "@/assets/book_3.svg";

// * Libs
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Animation variables
const fadeInVariants = (
  direction: "up" | "down" | "left" | "right" | "none",
  delay: number,
  opacity: number
): Variants => ({
  hidden: {
    opacity: opacity,
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1.2,
      delay: delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});

// Text variables
const heading = "Uma maneira mais eficaz de alavancar os seus estudos";
const text =
  "Transforme sua busca por um curso gratuito ideal para você em apenas alguns minutos com esta seleção de faculdades, instituições e cursos gratuitos.";

// * Tabs Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// * Data Table College
import {
  College,
  columnsCollege,
} from "@/components/sections/data_table/college/columns";
import { DataTableCollege } from "@/components/sections/data_table/college/data-table";
import { getCollegesData } from "@/data/colleges-data";

// * Data Table Companies
import {
  Company,
  columnsCompanies,
} from "@/components/sections/data_table/company/columns";
import { DataTableCompany } from "@/components/sections/data_table/company/data-table";
import { getCompaniesData } from "@/data/companies-data";

// * Data Table Courses
import {
  Course,
  columnsCourses,
} from "@/components/sections/data_table/course/columns";
import { DataTableCourse } from "@/components/sections/data_table/course/data-table";
import { getCoursesData } from "@/data/courses-data";

export default function Education() {
  const [collegeData, setCollegeData] = useState<College[]>([]);
  const collegeColumns = columnsCollege;

  const [companyData, setCompanyData] = useState<Company[]>([]);
  const companyColumns = columnsCompanies;

  const [CourseData, setCourseData] = useState<Course[]>([]);
  const courseColumns = columnsCourses;

  useEffect(() => {
    getCollegesData().then((colleges) => setCollegeData(colleges));
    getCompaniesData().then((companies) => setCompanyData(companies));
    getCoursesData().then((courses) => setCourseData(courses));
  }, []);

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="bg-gradient-to-b from-[var(--color-education-bg-1)] to-[var(--color-education-bg-2)] py-25 overflow-x-clip"
    >
      <div className="container mx-auto px-4">
        {/* Cabeçalho de seção */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            variants={fadeInVariants("up", 0.01, 0)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.07 }}
            className="tag"
          >
            📚 Acelere seus estudos!
          </motion.div>
          <motion.div
            variants={fadeInVariants("right", 0.01, 0)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.07 }}
          >
            <h2 className="section-title mt-8 text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-[var(--color-education-h1-2)] to-[var(--color-education-h1-1)] text-transparent bg-clip-text">
              {heading}
            </h2>
            <p className="section-description mt-5 text-lg md:text-xl text-[var(--color-education-txt)] tracking-tight">
              {text}
            </p>
          </motion.div>
        </div>

        {/* Imagens decorativas visíveis somente em telas lg+ */}
        <div className="relative my-12">
          <motion.img
            src={mansonImage.src}
            alt="Manson image"
            height={150}
            width={150}
            className="hidden lg:block select-none absolute right-0 -top-20"
            style={{ translateY }}
          />
          <motion.img
            src={bookImage.src}
            alt="Books image"
            height={150}
            width={150}
            className="hidden lg:block select-none absolute -left-5 bottom-20"
            style={{ translateY }}
          />
        </div>

        {/* Tabs com tabelas */}
        <motion.div
          variants={fadeInVariants("right", 0.01, 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.07 }}
          className="mb-10"
        >
          <Tabs defaultValue="faculdades" className="w-full mt-10">
            <TabsList className="flex flex-wrap justify-center gap-2 bg-[var(--color-table-bg)] rounded-lg shadow p-2 h-12">
              <TabsTrigger
                value="faculdades"
                className="data-[state=active]:bg-[#001E80] data-[state=active]:text-white px-4 py-4 rounded-md text-[#001E80] cursor-pointer hover:opacity-90 transition-opacity"
              >
                Faculdades
              </TabsTrigger>
              <TabsTrigger
                value="empresas"
                className="data-[state=active]:bg-[#001E80] data-[state=active]:text-white px-4 py-2 rounded-md text-[#001E80] cursor-pointer hover:opacity-90 transition-opacity"
              >
                Instituições
              </TabsTrigger>
              <TabsTrigger
                value="cursos"
                className="data-[state=active]:bg-[#001E80] data-[state=active]:text-white px-4 py-2 rounded-md text-[#001E80] cursor-pointer hover:opacity-90 transition-opacity"
              >
                Cursos
              </TabsTrigger>
            </TabsList>

            <TabsContent value="faculdades" className="mt-8">
              <div className="pb-4 px-4 shadow-black/20 shadow-xl rounded-xl bg-[var(--color-table-bg)]">
                <div className="w-full overflow-x-auto bg-transparent rounded-xl">
                  <div className="min-w-[640px] sm:min-w-full p-4 sm:p-6 md:p-8 bg-transparent">
                    <DataTableCollege
                      columns={collegeColumns}
                      data={collegeData}
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="empresas" className="mt-8">
              <div className="pb-4 px-4 shadow-black/20 shadow-xl rounded-xl bg-[var(--color-table-bg)]">
                <div className="w-full overflow-x-auto bg-transparent rounded-xl">
                  <div className="min-w-[640px] sm:min-w-full p-4 sm:p-6 md:p-8 bg-transparent">
                    <DataTableCompany
                      columns={companyColumns}
                      data={companyData}
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cursos" className="mt-8">
              <div className="pb-4 px-4 shadow-black/20 shadow-xl rounded-xl bg-[var(--color-table-bg)]">
                <div className="w-full overflow-x-auto bg-transparent rounded-xl">
                  <div className="min-w-[640px] sm:min-w-full p-4 sm:p-6 md:p-8 bg-transparent">
                    <DataTableCourse
                      columns={courseColumns}
                      data={CourseData}
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
