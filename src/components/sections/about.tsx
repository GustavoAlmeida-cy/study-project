"use client";

import webStudyImage from "@/assets/study_web.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const aboutRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="pt-12 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_top_left,#1832FF,#EAEEFE)] overflow-x-clip"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Imagem decorativa */}
          <div className="hidden lg:flex flex-1 justify-center relative h-[400px] lg:h-[500px]">
            <motion.img
              src={webStudyImage.src}
              alt="Web study image"
              width={400}
              height={400}
              className="select-none absolute top-15 left-10 rotate-[-10deg]"
              style={{ translateY }}
            />
          </div>

          {/* Texto */}
          <div className="flex-1 text-center lg:text-left">
            <div className="tag mb-4">Entenda nossa missão!</div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
              Incentivo à educação de qualidade no Brasil
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[#010D3E] mt-6">
              O Study é um projeto dedicado a promover uma educação acessível e
              de excelência. Nosso objetivo é conectar estudantes de todo o
              Brasil a cursos e instituições de ensino gratuitos, ampliando
              oportunidades e construindo futuros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
