import { Logomark } from "@/components/misc/logomark";
import { Menu } from "lucide-react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/5 dark:bg-black/60">
      <div className="py-3 sm:py-4 md:py-5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="#initial" className="text-base">
              <Logomark className="h-10 sm:h-12 w-auto select-none" />
            </Link>

            {/* Sheet menu (mobile only) */}
            <Sheet>
              <SheetTrigger className="cursor-pointer md:hidden">
                <Menu
                  size={40}
                  className="text-[#001E80] transition-opacity hover:opacity-80"
                  strokeWidth={2.5}
                  aria-label="Abrir menu"
                />
              </SheetTrigger>
              <SheetContent className="w-[220px] bg-[#EAEEFE]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  {/* Troquei SheetDescription por div para evitar div dentro de p */}
                  <div className="mt-5 flex flex-col gap-4 items-right text-sm text-[#001E80] font-semibold">
                    <Link
                      className="hover:opacity-80 transition-opacity"
                      href="#about"
                    >
                      Sobre
                    </Link>
                    <Link
                      className="hover:opacity-80 transition-opacity"
                      href="#highlights"
                    >
                      Destaques
                    </Link>
                    <Link
                      className="hover:opacity-80 transition-opacity"
                      href="#education"
                    >
                      Cursos
                    </Link>
                    <Link
                      className="hover:opacity-80 transition-opacity"
                      href="#footer"
                    >
                      Mais informações
                    </Link>
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            {/* Menu de navegação (desktop only) */}
            <nav className="hidden md:flex gap-4 md:gap-6 items-center text-sm sm:text-base text-[#001E80] font-semibold">
              <Link
                className="hover:opacity-80 transition-opacity"
                href="#about"
              >
                Sobre
              </Link>
              <Link
                className="hover:opacity-80 transition-opacity"
                href="#highlights"
              >
                Destaques
              </Link>
              <Link
                className="hover:opacity-80 transition-opacity"
                href="#education"
              >
                Cursos
              </Link>
              <Link
                className="hover:opacity-80 transition-opacity"
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
