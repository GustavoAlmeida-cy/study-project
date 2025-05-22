"use client";

// * Icons
import mansonImage from "@/assets/mason_1.svg";
import bookImage from "@/assets/book_3.svg";

// * Libs
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// * Data Table Components
import { College, columns } from "@/components/sections/data_table/columns";
import { DataTable } from "@/components/sections/data_table/data-table";
import { getCollegesData } from "@/data/colleges-data";

import { useEffect, useState } from "react";

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
      className="bg-gradient-to-b from-[#EAEEFE] to=[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container mx-auto px-4">
        {/* Text */}
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Acelere seus estudos!</div>
          </div>
          <h2 className="section-title mt-5">
            Uma maneira mais eficaz de alavancar os seus estudos
          </h2>
          <p className="section-description mt-5">
            Transforme sua busca por um curso gratuito ideal para você em apenas
            alguns minutos com esta seleção de faculdades, empresas e cursos
            técnicos.
          </p>
        </div>
        {/* Images */}
        <div className="relative">
          <motion.img
            src={mansonImage.src}
            alt="Manson image"
            height={250}
            width={250}
            className="hidden select-none lg:block absolute right-0 -top-50"
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={bookImage.src}
            alt="Books image"
            height={250}
            width={250}
            className="hidden select-none lg:block absolute -left-5 bottom-50"
            style={{
              translateY: translateY,
            }}
          />
        </div>
      </div>
      {/* Table antiga não tem o problema de scroll */}
      <div className="container mx-auto flex py-10 justify-center">
        <div className="overflow-x-auto">
          <div className="p-5 border-4shadow-black/20 shadow-2xl rounded-lg border-gray-100  bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#FEFEFE,#EAEEFE)] overflow-x-clip">
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </section>
  );
}
