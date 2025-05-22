import Logo from "@/assets/logo.svg";
import SocialGitHub from "@/assets/github.svg";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-black text-[#BCBCBC] text-sm py-10 text-center"
    >
      <div className="container mx-auto px-4">
        {/* Logo + Social */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10">
          {/* Logo com efeito */}
          <div className="relative inline-flex before:content-[''] before:absolute before:inset-0 before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)]">
            <Link href="#initial">
              <Image
                src={Logo}
                alt="Logo image"
                width={180}
                height={50}
                className="select-none relative"
              />
            </Link>
          </div>

          {/* GitHub com efeito */}
          <div className="relative inline-flex before:content-[''] before:absolute before:inset-0 before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] rounded-b-lg">
            <Link
              href="https://github.com/GustavoAlmeida-cy/study-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={SocialGitHub}
                alt="GitHub"
                width={50}
                height={50}
                className="select-none cursor-pointer relative"
              />
            </Link>
          </div>
        </div>

        {/* Navegação */}
        <nav className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-8 text-base">
          <Link
            className="hover:opacity-80 transition-opacity font-bold"
            href="#about"
          >
            Sobre
          </Link>
          <Link
            className="hover:opacity-80 transition-opacity font-bold"
            href="#education"
          >
            Cursos
          </Link>
        </nav>

        {/* Copyright */}
        <p className="mt-6 text-xs sm:text-sm">
          &copy; 2025 Study, Inc. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
