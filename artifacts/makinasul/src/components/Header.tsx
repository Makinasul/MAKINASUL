import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoMakinasul from "@assets/WhatsApp Image 2026-06-16 at 12.52.15.jpeg";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Empresa", href: "/#empresa" },
    { label: "Catálogo", href: "/catalogo" },
    { label: "Marcas", href: "/#marcas" },
    { label: "Locação", href: "/#locacao" },
    { label: "Contato", href: "/#contato" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src={logoMakinasul}
              alt="Makinasul" 
              className="h-10 sm:h-12 w-auto object-contain ml-[1px] mr-[1px]"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a 
              href={`https://wa.me/5551983433435?text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento. Podem me ajudar?')}`}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-destructive hover:bg-destructive/90 text-white font-medium">
                Solicitar Orçamento
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-border shadow-lg py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base font-medium text-foreground py-2 border-b border-border/50"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a 
            href={`https://wa.me/5551983433435?text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento. Podem me ajudar?')}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="pt-2"
            onClick={closeMenu}
          >
            <Button className="w-full bg-destructive hover:bg-destructive/90 text-white font-medium">
              Solicitar Orçamento
            </Button>
          </a>
        </div>
      )}
    </header>
  );
}
