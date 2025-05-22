"use client";

import webStudyImage from "@/assets/study_web.svg";
import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

// Utils
import splitStringByRegex from "@/utils/split-string-by-regex";

// Animation variables
const charVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  reveal: {
    opacity: 1,
    transition: {
      duration: 0.2, // mais lento
      ease: [0.25, 0.1, 0.25, 1], // ease-out suave (custom bezier)
    },
  },
};

// Text variables
const heading = "Incentivo à educação de qualidade no Brasil";
const text =
  "O Study é um projeto dedicado a promover uma educação acessível e de excelência. Nosso objetivo é conectar estudantes de todo o Brasil a cursos e instituições de ensino gratuitos, ampliando oportunidades e construindo futuros.";

export const About = () => {
  const aboutRef = useRef(null);

  const headingChars = splitStringByRegex(heading);
  const textChars = splitStringByRegex(text);

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
            <div className="tag mb-4">✌️ Entenda nossa missão!</div>
            <motion.h1
              initial="hidden"
              whileInView="reveal"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.015 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text"
            >
              {headingChars.map((char, index) => (
                <motion.span key={`${char}-${index}`} variants={charVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="reveal"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.01 }}
              className="text-base sm:text-lg lg:text-xl text-[#06103b] tracking-tight mt-6"
            >
              {textChars.map((char, index) => (
                <motion.span key={`${char}-${index}`} variants={charVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};
