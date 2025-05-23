"use client";

// Assets
import bookImage from "@/assets/book_2.svg";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

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
const heading = "Educação de qualidade ao seu alcance";
const text =
  "Descubra cursos gratuitos de alta qualidade, para transformar sua jornada de aprendizado e abrir portas para novas oportunidades.";

export const Hero = () => {
  return (
    <section className="pt-8 pb-10 md:pt-0 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#1832FF,#EAEEFE)] overflow-x-clip">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* Texto */}
          <div className="w-full md:max-w-[550px] text-center md:text-left">
            <motion.div
              variants={fadeInVariants("right", 0.01, 0)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.07 }}
              className="tag"
            >
              ✨ Novidades aqui!
            </motion.div>
            <motion.h1
              variants={fadeInVariants("left", 0.01, 0)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.07 }}
              className="text-5xl md:text-8xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6"
            >
              {heading}
            </motion.h1>
            <motion.p
              variants={fadeInVariants("right", 0.01, 0)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.07 }}
              className="text-2xl text-[#e5e6f1] tracking-tight mt-6"
            >
              {text}
            </motion.p>
            <motion.div
              variants={fadeInVariants("left", 0.01, 0)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.07 }}
              className="flex justify-center md:justify-start mt-8"
            >
              <Link href="#education">
                <button className="btn btn-primary">Comece agora</button>
              </Link>
            </motion.div>
          </div>

          {/* Imagem (oculta em telas pequenas) */}
          <motion.div
            variants={fadeInVariants("up", 0.01, 0)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.07 }}
            className="hidden md:block w-full max-w-[500px] mx-auto md:mx-0 mt-10 md:mt-0"
          >
            <motion.img
              src={bookImage.src}
              alt="Book image"
              className="select-none w-full h-auto"
              animate={{ translateY: [-30, 30] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
