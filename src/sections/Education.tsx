import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Star, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    level: 'TERTIARY',
    period: '2022 – 2026',
    degree: 'Bachelor of Science in Information Technology',
    institution: 'Northeastern College',
    location: 'Villasis, Santiago City, Isabela',
    color: 'bg-neo-accent'
  },
  {
    level: 'SECONDARY',
    period: '2016 – 2022',
    degree: 'General Academic Strand (ICT)',
    institution: 'Santiago City National High School',
    location: 'Calaocan, Santiago City, Isabela',
    color: 'bg-neo-secondary'
  },
  {
    level: 'ELEMENTARY',
    period: '2010 – 2016',
    degree: 'Primary Education',
    institution: 'Santiago West Central School',
    location: 'Victory Norte, Santiago City, Isabela',
    color: 'bg-neo-muted'
  }
];

export default function Education() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="neo-section bg-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      {/* Decorative elements */}
      <div className="absolute top-16 left-12 hidden lg:block">
        <GraduationCap className="w-20 h-20 stroke-neo-black stroke-[3] opacity-20" />
      </div>
      <div className="absolute bottom-20 right-16 hidden lg:block">
        <Star className="w-16 h-16 fill-neo-secondary stroke-neo-black stroke-[3] animate-spin-slow" />
      </div>

      <div className="neo-container relative z-10">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div
            className={`inline-block bg-neo-accent text-black border-4 border-black px-4 py-2 mb-4 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ boxShadow: '4px 4px 0px 0px #000' }}
          >
            <span className="font-black text-xs uppercase tracking-widest text-white">
              EDUCATION
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className={`font-black text-5xl md:text-6xl lg:text-8xl uppercase tracking-tighter transition-all duration-500 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Educational <span className="text-stroke">Background</span>
            </h2>
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-8 top-2 bottom-2 w-1.5 bg-black" />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative flex gap-8 md:gap-12 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-[18px] md:left-[26px] top-6 w-8 h-8 rounded-full border-4 border-black z-10 flex items-center justify-center ${edu.color}`}
                  style={{ boxShadow: '2px 2px 0px 0px #000' }}
                >
                  <GraduationCap className="w-3.5 h-3.5 stroke-[3]" />
                </div>

                <div className="pl-14 md:pl-20 w-full">
                  <div
                    className="bg-neo-cream border-4 border-black group hover:-translate-y-1 transition-transform duration-200"
                    style={{ boxShadow: '8px 8px 0px 0px #000' }}
                  >
                    {/* Header */}
                    <div
                      className={`${edu.color} border-b-4 border-black p-4 md:p-5 flex flex-col md:flex-row md:items-center justify-between gap-3`}
                    >
                      <div>
                        {/* Highlight Tag for Level above date */}
                        <span className="inline-block bg-white text-black border-2 border-black font-black text-xs px-2 py-0.5 mb-2 uppercase">
                          {edu.level}
                        </span>
                        <h3 className="font-black text-lg md:text-xl uppercase tracking-tight">
                          {edu.degree}
                        </h3>
                      </div>
                      <span className="flex items-center gap-1.5 font-black text-xs uppercase tracking-widest bg-white border-2 border-black px-2.5 py-1 self-start md:self-auto">
                        <Calendar className="w-3.5 h-3.5 stroke-[3]" />
                        {edu.period}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-4 md:p-5">
                      <p className="font-black text-base md:text-lg mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-2 text-black/70">
                        <MapPin className="w-4 h-4 stroke-[3]" />
                        <span className="font-bold text-sm">{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
