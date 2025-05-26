"use client";

import { motion, Variants } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { noticesData } from "@/data/notices-data";
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
  "Editais que Abrem Caminhos para uma Educação Gratuita e Transformadora";
const text =
  "Selecionamos os melhores editais que oferecem acesso gratuito à educação de qualidade em todo o Brasil. Aqui você encontra oportunidades que impulsionam trajetórias, conectam talentos e ajudam a construir um futuro mais justo e promissor.";

export const Notices = () => {
  return (
    <section
      id="notices"
      className="bg-[var(--color-hero-bg-2)] py-16 md:py-24 overflow-x-clip"
    >
      <div className="container mx-auto px-6">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            variants={fadeInVariants("up", 0.01, 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.07 }}
            className="tag font-semibold tracking-wide"
          >
            📌 Melhores Editais!
          </motion.div>

          <motion.div
            variants={fadeInVariants("left", 0.01, 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.07 }}
          >
            <h2 className="section-title mt-8 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-[var(--color-about-h1-2)] to-[var(--color-about-h1-1)] text-transparent bg-clip-text">
              {heading}
            </h2>
            <p className="section-description mt-5 text-base sm:text-lg md:text-xl text-[var(--color-about-txt)] tracking-tight leading-relaxed">
              {text}
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="mt-20 flex flex-col md:flex-row gap-10 justify-center items-stretch">
          {noticesData.map(
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
                className="card max-w-sm min-h-[460px] p-6 bg-[var(--color-about-card-bg)] border-0 rounded-xl shadow-lg flex flex-col justify-between items-center text-center transition-transform hover:scale-[1.03] hover:shadow-2xl"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInVariants("up", 0.1, 0)}
              >
                <div className="flex items-center gap-3 mb-4 justify-center flex-wrap">
                  <h3 className="text-xl font-semibold text-[var(--color-about-h1-1)]">
                    {name}
                  </h3>
                  <span
                    className={twMerge(
                      "text-xs font-semibold px-3 py-1 rounded-full text-white",
                      badgeColor
                    )}
                  >
                    {badgeText}
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center flex-grow">
                  <Image
                    src={logoUrl}
                    alt={`${name} logo`}
                    width={80}
                    height={80}
                    className="mb-6 object-contain select-none"
                    loading="lazy"
                  />
                  <p className="text-sm text-[var(--color-about-card-txt)]">
                    {description}
                  </p>
                </div>

                <a
                  href={siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 btn btn-primary w-full sm:w-auto px-6 py-3 rounded-md font-semibold text-white bg-[var(--color-about-h1-1)] hover:opacity-90 transition-opacity"
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
