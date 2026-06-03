import { useEffect, useRef, useState } from 'react';
import {
  Code,
  Terminal,
  Laptop,
  Smartphone,
  Server,
  Layers,
  LayoutGrid,
  PenTool,
  Figma,
  Palette,
  Video,
  Film,
  Star,
  FileCode2,
  Database
} from 'lucide-react';

const skillCategories = [
  {
    title: 'LANGUAGES',
    color: 'bg-neo-accent',
    skills: [
      { name: 'JavaScript', icon: FileCode2 },
      { name: 'PHP', icon: Database },
      { name: 'Dart', icon: Code },
      { name: 'C#', icon: Terminal },
      { name: 'C++', icon: Laptop },
    ],
  },
  {
    title: 'FRAMEWORKS & LIBRARIES',
    color: 'bg-neo-secondary',
    skills: [
      { name: 'Flutter', icon: Smartphone },
      { name: 'CakePHP', icon: Server },
      { name: 'Tailwind CSS', icon: Layers },
      { name: 'Bootstrap 5', icon: LayoutGrid },
    ],
  },
  {
    title: 'DESIGN & CREATIVE TOOLS',
    color: 'bg-neo-muted',
    skills: [
      { name: 'Adobe CS', icon: PenTool },
      { name: 'Figma', icon: Figma },
      { name: 'Canva', icon: Palette },
      { name: 'Alight Motion', icon: Video },
      { name: 'CapCut', icon: Film },
    ],
  },
];

export default function Skills() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="neo-section bg-neo-cream relative overflow-hidden animate-fade-in"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-radial-dots opacity-20 pointer-events-none" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-8 hidden lg:block">
        <div className="w-24 h-24 bg-neo-secondary border-4 border-black rotate-12" />
      </div>
      <div className="absolute bottom-16 right-12 hidden lg:block">
        <Star className="w-16 h-16 fill-neo-accent stroke-neo-black stroke-[3] animate-spin-slow" />
      </div>

      <div className="neo-container relative z-10">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div
            className={`inline-block bg-neo-secondary border-4 border-black px-4 py-2 mb-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            style={{ boxShadow: '4px 4px 0px 0px #000' }}
          >
            <span className="font-black text-xs uppercase tracking-widest">
              SKILLS & TOOLSET
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className={`font-black text-5xl md:text-6xl lg:text-8xl uppercase tracking-tighter transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              Tools <span className="text-neo-accent">I Use</span>
            </h2>
            <p
              className={`font-bold text-lg max-w-md transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              I am familiar with a range of tools, from writing code in Dart and PHP to designing interfaces and editing media.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              style={{ transitionDelay: `${300 + catIndex * 100}ms` }}
            >
              <div
                className="bg-white border-4 border-black h-full group hover:-translate-y-2 transition-transform duration-200 flex flex-col"
                style={{ boxShadow: '10px 10px 0px 0px #000' }}
              >
                {/* Card Header */}
                <div
                  className={`${category.color} border-b-4 border-black p-5 flex items-center justify-between`}
                >
                  <h3 className="font-black text-xl uppercase tracking-tight">
                    {category.title}
                  </h3>
                  <Star className="w-5 h-5 fill-white stroke-black stroke-2" />
                </div>

                {/* Skills List */}
                <div className="p-5 flex-grow space-y-3">
                  {category.skills.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 bg-neo-cream border-2 border-black p-3 hover:bg-white hover:translate-x-1 hover:-translate-y-0.5 transition-all duration-100"
                        style={{ boxShadow: '4px 4px 0px 0px #000' }}
                      >
                        <div className={`p-1.5 border-2 border-black bg-white group-hover:bg-neo-accent`}>
                          <IconComponent className="w-5 h-5 stroke-[2.5]" />
                        </div>
                        <span className="font-black text-sm uppercase tracking-wider">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Marquee */}
        <div className="mt-12 md:mt-16 overflow-hidden border-y-4 border-black bg-neo-black py-3 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 px-4">
                {[
                  'JAVASCRIPT',
                  'PHP',
                  'DART',
                  'FLUTTER',
                  'CAKEPHP',
                  'TAILWIND CSS',
                  'FIGMA',
                  'ADOBE CS',
                  'CANVA',
                  'ALIGHT MOTION',
                  'CAPCUT',
                ].map((tech) => (
                  <span
                    key={`${i}-${tech}`}
                    className="font-black text-2xl md:text-3xl uppercase tracking-tight text-white flex items-center gap-3"
                  >
                    <span>{tech}</span>
                    <Star className="w-5 h-5 fill-neo-secondary stroke-none flex-shrink-0" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
