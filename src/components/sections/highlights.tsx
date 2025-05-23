"use client";

import { motion, Variants } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { highlightsData } from "@/data/highlights-data";
import Image from "next/image";

// Animação de fade + direção
const fadeInVariants = (
  direction: "up" | "down" | "left" | "right" | "none",
  delay: number,
  opacity: number
): Variants => ({
  hidden: {
    opacity,
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
      delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});

// Título e descrição principais
const heading =
  "Destaques das Instituições que Transformam a Educação no Brasil";
const text =
  "O Study conecta estudantes brasileiros às instituições que promovem uma educação gratuita, inclusiva e inovadora. Nosso compromisso é ampliar o acesso a oportunidades educacionais que moldam futuros e fortalecem o desenvolvimento do país.";

export const Highlights = () => {
  return (
    <section
      id="highlights"
      className="bg-[#EAEEFE] py-16 md:py-24 overflow-x-clip"
    >
      <div className="container mx-auto px-6">
        {/* Cabeçalho do bloco */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Tag do topo */}
          <motion.div
            variants={fadeInVariants("up", 0.01, 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.07 }}
            className="tag text-indigo-700 font-semibold tracking-wide"
          >
            🏆 Nosso pódio!
          </motion.div>

          <motion.div
            variants={fadeInVariants("left", 0.01, 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.07 }}
          >
            {/* Título animado */}
            <h2 className="section-title mt-8 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
              {heading}
            </h2>

            {/* Parágrafo animado */}
            <p className="section-description mt-5 text-base sm:text-lg md:text-xl text-[#010D3E] tracking-tight leading-relaxed">
              {text}
            </p>
          </motion.div>
        </div>

        {/* Cards de destaque */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {highlightsData.map(
            ({
              name,
              badgeColor,
              badgeText = "Destaque",
              logoUrl,
              siteUrl,
              description,
            }) => (
              <motion.div
                key={name}
                className="card max-w-sm min-h-[460px] p-6 bg-white rounded-xl shadow-lg flex flex-col justify-between items-center text-center transition-transform hover:scale-[1.03] hover:shadow-2xl"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInVariants("up", 0.1, 0)}
                transition={{ duration: 0.8 }}
              >
                {/* Nome e badge */}
                <div className="flex items-center gap-3 mb-4 justify-center flex-wrap">
                  <h3 className="text-xl font-semibold text-[#001E80]">
                    {name}
                  </h3>
                  <span
                    className={twMerge(
                      "text-xs font-semibold px-3 py-1 rounded-full text-white whitespace-nowrap",
                      badgeColor
                    )}
                    title={badgeText}
                  >
                    {badgeText}
                  </span>
                </div>

                {/* Logo e descrição (conteúdo central que cresce) */}
                <div className="flex flex-col items-center justify-center flex-grow">
                  <Image
                    src={logoUrl}
                    alt={`${name} logo`}
                    width={80}
                    height={80}
                    className="mb-6 object-contain select-none"
                    loading="lazy"
                  />
                  <p className="text-sm text-gray-700">{description}</p>
                </div>

                {/* Botão */}
                <a
                  href={siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 btn btn-primary w-full sm:w-auto px-6 py-3 rounded-md font-semibold text-white bg-[#001E80] hover:bg-[#0030b3] transition-colors"
                >
                  Saiba mais
                </a>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
