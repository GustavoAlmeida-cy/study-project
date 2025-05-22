"use client";

// * Icons
import mansonImage from "@/assets/mason_1.svg";
import bookImage from "@/assets/book_3.svg";

// * Libs
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// * Data Table Components
import { College, columns } from "@/components/sections/data_table/columns";
import { DataTable } from "@/components/sections/data_table/data-table";
import { getCollegesData } from "@/data/colleges-data";

export default function Education() {
  const [data, setData] = useState<College[]>([]);

  useEffect(() => {
    getCollegesData().then((colleges) => setData(colleges));
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
      className="bg-gradient-to-b from-[#EAEEFE] to-[#D2DCFF] py-16 md:py-24 overflow-x-clip"
    >
      <div className="container mx-auto px-4">
        {/* Cabeçalho de seção */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="tag">Acelere seus estudos!</div>
          <h2 className="section-title mt-5 text-3xl md:text-5xl font-bold text-[#001E80]">
            Uma maneira mais eficaz de alavancar os seus estudos
          </h2>
          <p className="section-description mt-5 text-lg md:text-xl text-[#010D3E]">
            Transforme sua busca por um curso gratuito ideal para você em apenas
            alguns minutos com esta seleção de faculdades, empresas e cursos
            técnicos.
          </p>
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
            className="hidden lg:block select-none absolute -left-5 bottom-0"
            style={{ translateY }}
          />
        </div>
      </div>

      {/* Tabela de dados */}
      <div className="container mx-auto px-4 py-10">
        <div className="w-full overflow-x-auto">
          <div className="min-w-[640px] sm:min-w-full p-4 sm:p-6 md:p-8 border shadow-black/20 shadow-xl rounded-xl border-gray-200 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#FEFEFE,#EAEEFE)]">
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </section>
  );
}
