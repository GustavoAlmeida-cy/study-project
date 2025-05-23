"use client";

import webStudyImage from "@/assets/study_web.svg";
import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

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
const heading = "Incentivo à educação de qualidade no Brasil";
const text =
  "O Study é um projeto dedicado a promover uma educação acessível e de excelência. Nosso objetivo é conectar estudantes de todo o Brasil a cursos e instituições de ensino gratuitos, ampliando oportunidades e construindo futuros.";

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
      className="pt-12 pb-2 bg-[radial-gradient(ellipse_200%_100%_at_top_left,#1832FF,#EAEEFE)] overflow-x-clip"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Imagem decorativa */}
          <motion.div
            variants={fadeInVariants("left", 0.01, 0)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.07 }}
            className="hidden lg:flex flex-1 justify-center relative h-[400px] lg:h-[500px]"
          >
            <motion.img
              src={webStudyImage.src}
              alt="Web study image"
              width={400}
              height={400}
              className="select-none absolute top-15 left-15 rotate-[-10deg]"
              style={{ translateY }}
            />
          </motion.div>

          {/* Texto */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              variants={fadeInVariants("left", 0.01, 0)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.07 }}
              className="tag mb-8"
            >
              ✌️ Entenda nossa missão!
            </motion.div>
            <motion.h1
              variants={fadeInVariants("down", 0.01, 0)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.07 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text"
            >
              {heading}
            </motion.h1>
            <motion.p
              variants={fadeInVariants("right", 0.01, 0)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.07 }}
              className="text-base sm:text-lg lg:text-xl text-[#06103b] tracking-tight mt-6"
            >
              {text}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};
