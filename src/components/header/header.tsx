"use client";

import { useState, useEffect } from "react";
import { NoiseBackground } from "../ui/noise-background";
import { navItems, NavItem } from "@/data/navItems";
import { IconMenu2, IconX } from "@tabler/icons-react";

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string, index: number) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveIndex(index);
      setMobileMenuOpen(false);
    }
  };

  const getSectionId = (label: string) => {
    switch (label.toLowerCase()) {
      case 'home': return 'home';
      case 'skills': return 'skills';
      case 'projects': return 'projects';
      case 'contact': return 'contact';
      default: return label.toLowerCase();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (mobileMenuOpen && !target.closest('header')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <header className="flex justify-center mt-4 md:mt-8 sticky top-4 md:top-8 z-50 px-4">
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <NoiseBackground containerClassName="rounded-full px-2 py-1">
          <nav className="flex items-center gap-2 bg-[#22304a] rounded-full p-2">
            {navItems.map((item: NavItem, index: number) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-200 cursor-pointer ${
                    activeIndex === index
                      ? "bg-[#131a25] text-white shadow-md"
                      : "text-white hover:bg-[#041e4e]"
                  }`}
                  onClick={() => scrollToSection(getSectionId(item.label), index)}
                >
                  {Icon && <Icon size={20} />}
                  <span className="font-semibold">{item.label}</span>
                </div>
              );
            })}
          </nav>
        </NoiseBackground>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden w-full">
        <nav className="flex items-center justify-between p-2 px-4">
          <span className="text-white font-bold">Menu</span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 rounded-full hover:bg-[#041e4e] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-4 right-4 mt-2">
            <nav className="flex flex-col gap-1 rounded-2xl p-3 bg-[#22304a]">
              {navItems.map((item: NavItem, index: number) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors duration-200 cursor-pointer ${
                      activeIndex === index
                        ? "bg-[#131a25] text-white shadow-md"
                        : "text-white hover:bg-[#041e4e]"
                    }`}
                    onClick={() => scrollToSection(getSectionId(item.label), index)}
                  >
                    {Icon && <Icon size={20} />}
                    <span className="font-semibold">{item.label}</span>
                  </div>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
