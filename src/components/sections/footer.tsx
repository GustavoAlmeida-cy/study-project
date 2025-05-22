import Logo from "@/assets/logo.svg";
import SocialGitHub from "@/assets/github.svg";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-black text-[#BCBCBC] text-sm py-10 text-center overflow-x-clip"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-10">
          <div className="inline-flex relative before:content-[''] before:h-full before:w-full before:top-0 before:bottom-0 before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
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
          <div className="inline-flex rounded-b-lg relative before:content-[''] before:h-full before:w-full before:top-0 before:bottom-0 before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
            <Link
              href="https://github.com/GustavoAlmeida-cy/study-project"
              target="_black"
            >
              {" "}
              <Image
                src={SocialGitHub}
                alt="Menu"
                width={50}
                height={50}
                className="select-none cursor-pointer relative"
              />
            </Link>
          </div>
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-8">
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
          <Link
            className="hover:opacity-80 transition-opacity font-bold"
            href="#footer"
          >
            Mais informações
          </Link>
        </nav>
        <p className="mt-6">
          &copy; 2025 Study, Inc. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
