import { useEffect, useRef, useState } from 'react';
import { Briefcase, Star, Calendar, ArrowRight } from 'lucide-react';

const experiences = [
  {
    color: 'bg-neo-accent',
    title: 'OJT · Multimedia & Graphic Design',
    company: 'Southern Isabela Medical Center',
    period: 'Nov 2025 – Mar 2026',
    bulletPoints: [
      'Helped update monthly hospital display layouts for public areas.',
      'Edited videos for hospital staff events.',
      'Assisted in capturing event photos for official documentation.'
    ]
  },
  {
    color: 'bg-neo-secondary',
    title: 'Graphic Designer',
    company: 'Freelance · Remote',
    period: '2020 – 2022',
    bulletPoints: [
      'Connected with clients through online community groups.',
      'Created social media graphics for small online businesses.'
    ]
  }
];

export default function Experience() {
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
      id="experience"
      ref={sectionRef}
      className="neo-section bg-neo-cream relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      {/* Decorative elements */}
      <div className="absolute top-16 right-12 hidden lg:block">
        <Briefcase className="w-20 h-20 stroke-neo-black stroke-[3] opacity-20" />
      </div>
      <div className="absolute bottom-20 left-16 hidden lg:block">
        <Star className="w-16 h-16 fill-neo-secondary stroke-neo-black stroke-[3] animate-spin-slow" />
      </div>

      <div className="neo-container relative z-10">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div
            className={`inline-block bg-neo-secondary border-4 border-black px-4 py-2 mb-4 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ boxShadow: '4px 4px 0px 0px #000' }}
          >
            <span className="font-black text-xs uppercase tracking-widest">
              WORK HISTORY
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className={`font-black text-5xl md:text-6xl lg:text-8xl uppercase tracking-tighter transition-all duration-500 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Work <span className="text-neo-accent">Experience</span>
            </h2>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-8 top-2 bottom-2 w-1.5 bg-black" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex gap-8 md:gap-12 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-[18px] md:left-[26px] top-6 w-8 h-8 rounded-full border-4 border-black z-10 flex items-center justify-center ${exp.color}`}
                  style={{ boxShadow: '2px 2px 0px 0px #000' }}
                >
                  <Briefcase className="w-3.5 h-3.5 stroke-[3]" />
                </div>

                <div className="pl-14 md:pl-20 w-full">
                  <div
                    className="bg-white border-4 border-black group hover:-translate-y-1 transition-transform duration-200"
                    style={{ boxShadow: '8px 8px 0px 0px #000' }}
                  >
                    {/* Header */}
                    <div
                      className={`${exp.color} border-b-4 border-black p-4 md:p-5 flex flex-col md:flex-row md:items-center justify-between gap-2`}
                    >
                      <div>
                        <h3 className="font-black text-lg md:text-xl uppercase tracking-tight">
                          {exp.title}
                        </h3>
                        <p className="font-bold text-sm">
                          {exp.company}
                        </p>
                      </div>
                      <span className="flex items-center gap-1.5 font-black text-xs uppercase tracking-widest bg-white border-2 border-black px-2.5 py-1 self-start md:self-auto">
                        <Calendar className="w-3.5 h-3.5 stroke-[3]" />
                        {exp.period}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-4 md:p-5">
                      <ul className="space-y-3">
                        {exp.bulletPoints.map((point, bpIndex) => (
                          <li
                            key={bpIndex}
                            className="flex items-start gap-2.5 font-medium text-sm md:text-base leading-relaxed"
                          >
                            <ArrowRight className="w-4 h-4 stroke-[3] text-neo-accent mt-1 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
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
