import { Logomark } from "@/components/misc/logomark";
import { Menu } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-50">
      <div className="py-5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="#initial" className="text-base">
              <Logomark className="h-12 w-auto select-none" />
            </Link>

            {/* Ícone de menu da Lucide */}
            <Menu
              size={50}
              className="select-none cursor-pointer md:hidden text-[#001E80]"
              strokeWidth={2.5}
            />

            {/* Menu de navegação */}
            <nav className="hidden md:flex gap-6 text-[#001E80] items-center">
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
          </div>
        </div>
      </div>
    </header>
  );
};
