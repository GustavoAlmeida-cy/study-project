"use client";

// Assets
import bookImage from "@/assets/book_2.svg";

import { motion } from "framer-motion";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-0 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#1832FF,#EAEEFE)] overflow-x-clip">
      <div className="container mx-auto px-15">
        <div className="flex items-center justify-between gap-100">
          <div className="w-[250px]  md:w-[550px] xs:w-[220px]">
            <div className="tag">Novidades aqui!</div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Educação de qualidade ao seu alcance
            </h1>
            <p className="text-2xl text-[#010D3E] tracking-tight mt-6">
              Descubra cursos gratuitos de alta qualidade, para transformar sua
              jornada de aprendizado e abrir portas para novas oportunidades.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <Link href="#education">
                <button className="btn btn-primary">Comece agora</button>
              </Link>
            </div>
          </div>

          <div className="mt-20 h-[650px] flex-1 relative">
            <motion.img
              src={bookImage.src}
              alt="Book image"
              height={500}
              width={500}
              className="select-none xl:absolute xl:h-full xl:w-auto xl:max-w-none lg:-left-80 xl:-top-8"
              animate={{
                translateY: [-30, 30],
              }}
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
