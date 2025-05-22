"use client";

// Assets
import bookImage from "@/assets/book_2.svg";

// Utils
import splitStringByRegex from "@/utils/split-string-by-regex";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

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
const heading = "Educação de qualidade ao seu alcance";
const text =
  "Descubra cursos gratuitos de alta qualidade, para transformar sua jornada de aprendizado e abrir portas para novas oportunidades.";

export const Hero = () => {
  const headingChars = splitStringByRegex(heading);
  const textChars = splitStringByRegex(text);

  return (
    <section className="pt-8 pb-20 md:pt-0 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#1832FF,#EAEEFE)] overflow-x-clip">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* Texto */}
          <div className="w-full md:max-w-[550px] text-center md:text-left">
            <div className="tag">✨ Novidades aqui!</div>
            <motion.h1
              initial="hidden"
              whileInView="reveal"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.015 }}
              className="text-5xl md:text-8xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6"
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
              className="text-2xl text-[#e5e6f1] tracking-tight mt-6"
            >
              {textChars.map((char, index) => (
                <motion.span key={`${char}-${index}`} variants={charVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.p>
            <div className="flex justify-center md:justify-start mt-8">
              <Link href="#education">
                <button className="btn btn-primary">Comece agora</button>
              </Link>
            </div>
          </div>

          {/* Imagem (oculta em telas pequenas) */}
          <div className="hidden md:block w-full max-w-[500px] mx-auto md:mx-0 mt-10 md:mt-0">
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
          </div>
        </div>
      </div>
    </section>
  );
};
