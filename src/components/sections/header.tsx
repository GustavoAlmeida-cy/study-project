"use client";

import * as React from "react";
import { ThemeToggleButton } from "@/components/misc/theme-toggle-btn";
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
    <header className="sticky top-0 z-50 backdrop-blur-md bg-section-bg-2/10">
      <div className="py-3 sm:py-4 md:py-5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="#initial">
              <Logomark className="h-10 sm:h-12 w-auto select-none" />
            </Link>

            <div className="flex gap-10">
              {/* Desktop navigation */}
              <nav className="hidden md:flex items-center gap-6 text-sm sm:text-base text-7 font-semibold">
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
                  href="#notices"
                >
                  Editais
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

              {/* Right side (desktop + mobile trigger) */}
              <div className="flex items-center gap-2 sm:gap-4">
                {/* Mobile menu */}
                <Sheet>
                  <SheetTrigger className="ml-1.5 cursor-pointer md:hidden shadow-2xl">
                    <div className="shadow-2xl shadow-black rounded-lg p-1 bg-transparent hover:bg-1/40">
                      <Menu
                        size={32}
                        className="text-nav-txt transition-opacity hover:opacity-85"
                        strokeWidth={2.5}
                        aria-label="Abrir menu"
                      />
                    </div>
                  </SheetTrigger>

                  <SheetContent className="p-5 pt-0 w-[240px] bg-nav-bg">
                    <SheetHeader className="px-0">
                      <SheetTitle className="text-nav-txt">Menu</SheetTitle>
                    </SheetHeader>

                    <div className="flex flex-col gap-4 text-sm text-nav-txt font-semibold">
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
                        href="#notices"
                      >
                        Editais
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

                    {/* Separador */}
                    <div className="flex justify-between items-center mt-6 border-t border-[#050505]/30 pt-4"></div>
                  </SheetContent>
                </Sheet>

                {/* Theme button */}
                <ThemeToggleButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
