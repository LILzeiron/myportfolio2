import { useEffect, useRef } from 'react';
import { ArrowDown, Star } from 'lucide-react';

const stats = [
  { value: '5+', label: 'LANGUAGES' },
  { value: '4+', label: 'FRAMEWORKS' },
  { value: '2', label: 'MAJOR PROJECTS' },
  { value: '5+', label: 'DESIGN TOOLS' },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (!heroRef.current) return;
      const scrolled = window.scrollY;
      const elements = heroRef.current.querySelectorAll('.parallax');
      elements.forEach((el, i) => {
        const speed = 0.1 * (i + 1);
        (el as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
      });
    };
    window.addEventListener('scroll', handleParallax, { passive: true });
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const element = document.querySelector('#designs');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center bg-neo-cream overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-halftone opacity-30 pointer-events-none" />

      {/* Decorative floating shapes */}
      <div className="parallax absolute top-20 left-10 md:left-20">
        <Star className="w-12 h-12 md:w-16 md:h-16 fill-neo-accent stroke-neo-black stroke-[3] animate-spin-slow" />
      </div>
      <div className="parallax absolute top-40 right-10 md:right-32 rotate-12">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-neo-secondary border-4 border-black animate-float" />
      </div>
      <div className="parallax absolute bottom-40 left-16 md:left-40 -rotate-6">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-neo-muted border-4 border-black rounded-full animate-wiggle" />
      </div>
      <div className="parallax absolute top-60 left-1/3 hidden lg:block">
        <div className="w-8 h-24 bg-neo-accent border-4 border-black rotate-45" />
      </div>

      {/* Giant background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[20vw] font-black uppercase tracking-tighter text-stroke opacity-10 select-none">
          AUSTRIA
        </span>
      </div>

      <div className="neo-container relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Name */}
            <div className="space-y-1">
              <h1 className="font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.85]">
                <span className="block">CHRISTIAN</span>
                <span className="block text-neo-accent">AUSTRIA</span>
              </h1>
            </div>

            {/* Title */}
            <div className="inline-block bg-neo-secondary border-4 border-black px-4 py-2 -rotate-2">
              <p className="font-bold text-lg md:text-xl italic font-serif">
                Developer & Designer
              </p>
            </div>

            {/* Bio */}
            <p className="font-medium text-lg md:text-xl max-w-lg leading-relaxed">
              I enjoy bridging the gap between code and creativity by building systems, crafting user interfaces, and creating layout designs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button onClick={scrollToWork} className="neo-btn-primary">
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 ml-2 stroke-[3]" />
              </button>
              <button onClick={scrollToContact} className="neo-btn-outline">
                Get in Touch
              </button>
            </div>
          </div>

          {/* Right Column - Stats Card */}
          <div className="relative">
            {/* Decorative badge */}
            <div className="absolute -top-6 -right-4 z-20 bg-neo-accent border-4 border-black px-4 py-2 rotate-6 font-black text-sm uppercase tracking-widest shadow-hard-sm">
              BSIT Student
            </div>

            {/* Stats Card */}
            <div
              className="bg-white border-4 border-black p-6 md:p-8 relative"
              style={{ boxShadow: '12px 12px 0px 0px #000' }}
            >
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`p-4 ${
                      index % 2 === 0 ? 'bg-neo-cream' : 'bg-neo-secondary/20'
                    } border-4 border-black`}
                    style={{
                      boxShadow: '4px 4px 0px 0px #000',
                      transform: `rotate(${index % 2 === 0 ? '-1' : '1'}deg)`,
                    }}
                  >
                    <div className="font-black text-4xl md:text-5xl text-neo-accent mb-1">
                      {stat.value}
                    </div>
                    <div className="font-bold text-xs uppercase tracking-widest">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Education info */}
              <div className="mt-6 pt-6 border-t-4 border-black">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-neo-accent border-2 border-black mt-1.5 flex-shrink-0" />
                  <p className="font-medium text-sm md:text-base leading-relaxed">
                    I earned a Bachelor of Science in Information Technology from
                    Northeastern College, Villasis, Santiago City, Isabela (2022 –
                    2026).
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative element behind card */}
            <div
              className="absolute -bottom-4 -left-4 w-full h-full bg-neo-muted border-4 border-black -z-10"
              style={{ boxShadow: '8px 8px 0px 0px #000' }}
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center mt-16 md:mt-24">
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 font-bold text-xs uppercase tracking-[0.2em] text-black/60 hover:text-black transition-colors"
          >
            <span>Scroll</span>
            <ArrowDown className="w-5 h-5 stroke-[3] animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
