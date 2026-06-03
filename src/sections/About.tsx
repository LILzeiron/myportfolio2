import { useEffect, useRef, useState } from 'react';
import { Star, Zap, User } from 'lucide-react';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="neo-section bg-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      {/* Decorative elements */}
      <div className="absolute top-12 right-12 hidden lg:block">
        <Star className="w-20 h-20 fill-neo-secondary stroke-neo-black stroke-[3] animate-spin-slow" />
      </div>
      <div className="absolute bottom-20 left-8 hidden lg:block">
        <Zap className="w-16 h-16 fill-neo-accent stroke-neo-black stroke-[3]" />
      </div>

      <div className="neo-container relative z-10">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-black text-sm uppercase tracking-widest text-neo-accent">
              ABOUT ME
            </span>
            <div className="h-1 bg-neo-accent flex-grow max-w-[100px] border border-black" />
          </div>
          <h2
            className={`font-black text-5xl md:text-6xl lg:text-8xl uppercase tracking-tighter leading-tight transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            A GLIMPSE <span className="text-stroke">INTO MY</span> BACKGROUND
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Avatar Image */}
          <div
            className={`lg:col-span-5 flex justify-center transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
          >
            <div className="relative group">
              {/* Glow / Shadow effect box behind the image */}
              <div className="absolute inset-0 rounded-full bg-neo-secondary border-4 border-black translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-200" />
              <div className="absolute inset-0 rounded-full bg-neo-accent/20 blur-xl -z-20 group-hover:scale-110 transition-transform duration-200" />

              {/* Circular Avatar Frame */}
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-black bg-neo-cream relative">
                <img
                  src="assets/me.webp"
                  alt="Christian Austria"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback in case the image does not exist yet
                    (e.target as HTMLElement).style.display = 'none';
                    const parent = (e.target as HTMLElement).parentElement;
                    if (parent) {
                      const fallback = parent.querySelector('.fallback-avatar');
                      if (fallback) fallback.classList.remove('hidden');
                    }
                  }}
                />
                {/* Fallback Icon */}
                <div className="fallback-avatar hidden absolute inset-0 flex items-center justify-center bg-neo-cream text-black">
                  <User className="w-32 h-32 stroke-[1.5]" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Body Copy */}
          <div
            className={`lg:col-span-7 space-y-8 transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <div
              className="bg-neo-cream border-4 border-black p-8 relative"
              style={{ boxShadow: '8px 8px 0px 0px #000' }}
            >
              <div className="absolute -top-5 -right-4 bg-neo-secondary border-4 border-black px-4 py-1.5 font-black text-xs uppercase tracking-widest rotate-3">
                CSA.
              </div>

              <div className="space-y-6">
                <p className="font-bold text-xl md:text-2xl leading-relaxed text-black">
                  I’m a recent IT graduate eager to learn and contribute. I enjoy blending code with design to create useful and pleasant experiences.
                </p>
                <p className="font-medium text-lg leading-relaxed text-black/80">
                  I love exploring both development and design, aiming to create solutions that are both functional and aesthetically pleasing.
                </p>
              </div>
            </div>

            {/* Micro details or features to maintain neo-brutalism aesthetics */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-neo-secondary/10 border-4 border-black p-4">
                <span className="font-black text-xs uppercase tracking-widest text-neo-accent block mb-1">
                  CORE VALUES
                </span>
                <span className="font-bold text-base">
                  Function & Aesthetics
                </span>
              </div>
              <div className="bg-neo-muted/20 border-4 border-black p-4">
                <span className="font-black text-xs uppercase tracking-widest text-neo-accent block mb-1">
                  CURRENT GOAL
                </span>
                <span className="font-bold text-base">
                  Learn & Contribute
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
