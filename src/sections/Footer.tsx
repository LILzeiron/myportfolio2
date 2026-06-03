import { ArrowUp } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Designs', href: '#designs' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neo-black text-white relative overflow-hidden">
      {/* Top decorative border */}
      <div className="h-4 bg-neo-accent border-b-4 border-black" />

      {/* Main Footer Content */}
      <div className="neo-container py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="inline-block bg-neo-accent text-black border-4 border-white px-4 py-2 mb-4 font-black text-2xl uppercase tracking-tight">
              CSA.
            </div>
            <p className="font-bold text-lg text-white/80 max-w-md mb-6 leading-relaxed">
              Christian S. Austria — Multimedia Artist, Web Developer, and
              Mobile App Developer. Bridging the gap between code and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest mb-4 pb-2 border-b-2 border-white/20">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="font-bold text-sm uppercase tracking-wide text-white/70 hover:text-neo-accent transition-colors flex items-center gap-2 group"
                  >
                    <ArrowUp className="w-3 h-3 rotate-90 stroke-[3] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest mb-4 pb-2 border-b-2 border-white/20">
              Contact
            </h4>
            <div className="space-y-3">
              <p className="font-medium text-sm text-white/70">
                Santiago City, Isabela
                <br />
                Philippines
              </p>
              <p className="font-medium text-sm text-white/70">
                BSIT Student at
                <br />
                Northeastern College
              </p>
              <div className="inline-block bg-neo-secondary text-black border-4 border-black px-3 py-1 font-black text-xs uppercase tracking-widest mt-2">
                Open for Work
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t-2 border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-bold text-xs uppercase tracking-wider text-white/50 flex items-center gap-1">
            © 2026 Christian Austria
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-white/50 hover:text-neo-accent transition-colors group"
          >
            Back to Top
            <div className="bg-white/10 border-2 border-white/20 p-1.5 group-hover:bg-neo-accent group-hover:border-black group-hover:text-black transition-all">
              <ArrowUp className="w-4 h-4 stroke-[3]" />
            </div>
          </button>
        </div>
      </div>

      {/* Decorative bottom strip */}
      <div className="h-2 bg-neo-secondary" />
    </footer>
  );
}
