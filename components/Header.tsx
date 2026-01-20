"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/context/ActiveSectionContext";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { activeSection } = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header if at the top, or scrolling up
      // Hide header if scrolling down and not at the top
      if (currentScrollY <= 0) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false); // Close menu on click
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "About", id: "me" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experiences" },
    { label: "Projects", id: "projects" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-6 h-16 bg-black transition-transform duration-300 ease-in-out",
          isVisible || isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="flex flex-col z-110 relative">
          <div className="font-bold text-white text-xl tracking-wider">
            ALBAN ELEZI
          </div>
          <div className="text-white text-sm">Software Engineer</div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative px-2 py-1 group h-[40px]"
            >
              <span
                className={cn(
                  "absolute inset-0 bg-custom-green skew-x-[-15deg] transition-all duration-300 ease-in-out",
                  activeSection === item.id ? "opacity-100" : "opacity-0"
                )}
              />
              <span
                className={cn(
                  "relative z-10 font-medium text-sm uppercase tracking-wide transition-colors duration-300",
                  activeSection === item.id
                    ? "text-black"
                    : "text-white group-hover:text-custom-green"
                )}
              >
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-custom-green hover:bg-transparent"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/alban-elezi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-custom-green hover:bg-transparent"
            asChild
          >
            <a
              href="https://github.com/xAlban"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-110 relative focus:outline-none p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>

        {/* Gradient Bottom Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[linear-gradient(to_right,black_0%,var(--color-custom-green)_25%,var(--color-custom-green)_75%,black_100%)]" />
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black z-90 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white hover:text-custom-green transition-colors font-bold text-2xl uppercase tracking-widest"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex gap-6 mt-4">
          <a
            href="https://www.linkedin.com/in/alban-elezi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-custom-green transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a
            href="https://github.com/xAlban"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-custom-green transition-colors"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-8 h-8" />
          </a>
        </div>
      </div>
    </>
  );
}
