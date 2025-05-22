"use client";

// Assets
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
      className="pt-8 pb-20 md:pt-6 md:pb-20 bg-[radial-gradient(ellipse_200%_100%_at_top_left,#1832FF,#EAEEFE)] overflow-x-clip"
    >
      <div className="container mx-auto px-5 w-300">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-10 mx-10">
          {/* Image */}
          <div className="hidden lg:flex mt-20 h-[650px] flex-1 relative w-[250px] md:w-[550px] xs:w-[220px]">
            <motion.img
              src={webStudyImage.src}
              alt="Web study image"
              height={500}
              width={500}
              className="hidden lg:block md:absolute select-none absolute top-10 -left-30 rotate-[-15deg]"
              style={{
                translateY: translateY,
              }}
            />
          </div>

          {/* Text */}
          <div className="w-[250px]  md:w-[550px] xs:w-[220px]">
            <div className="tag">Entenda nossa missão!</div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Incentivo à educação de qualidade no Brasil
            </h1>
            <p className="text-2xl text-[#010D3E] tracking-tight mt-6">
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
