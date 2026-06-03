import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'DESIGNS', href: '#designs' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-neo-cream border-b-4 border-black'
            : 'bg-transparent'
        }`}
      >
        <div className="neo-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-neo-accent border-4 border-black px-3 py-1 font-black text-lg uppercase tracking-tight hover:bg-[#ff5252] transition-colors duration-100"
              style={{ boxShadow: '4px 4px 0px 0px #000' }}
            >
              CSA.
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="px-3 py-2 font-bold text-xs uppercase tracking-widest border-4 border-transparent hover:border-black hover:bg-neo-accent hover:shadow-[4px_4px_0px_0px_#000] transition-all duration-100"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden bg-white border-4 border-black p-2"
              style={{ boxShadow: '4px 4px 0px 0px #000' }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 stroke-[3]" />
              ) : (
                <Menu className="w-5 h-5 stroke-[3]" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-neo-cream border-4 border-black md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-4 pt-20">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="w-64 py-4 bg-white border-4 border-black font-black text-xl uppercase tracking-widest hover:bg-neo-accent transition-colors duration-100"
                style={{ boxShadow: '6px 6px 0px 0px #000' }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
