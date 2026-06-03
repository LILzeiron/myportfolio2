import { useEffect, useRef, useState } from 'react';
import { Star, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'PathWise',
    platform: 'Mobile · Web',
    description: 'Developed an intelligent tutoring system (mobile + web) delivering personalized learning via games, quizzes, and an AI‑powered chatbot. Utilized machine learning to track student performance, improving accessibility and engagement while providing data‑driven insights for teachers. Technologies used: Flutter, Dart, PHP, CakePHP, Python, Flask, MySQL, DigitalOcean.',
    technologies: ['Flutter', 'Dart', 'PHP', 'CakePHP', 'Python', 'Flask', 'MySQL', 'DigitalOcean'],
    features: [
      { label: 'AI', value: 'Chatbot' },
      { label: 'ML', value: 'Analytics' }
    ],
    gallery: [
      'assets/PathWise/1.webp',
      'assets/PathWise/2.webp',
      'assets/PathWise/3.webp',
      'assets/PathWise/4.webp',
      'assets/PathWise/5.webp',
      'assets/PathWise/6.webp',
      'assets/PathWise/7.webp',
      'assets/PathWise/8.webp'
    ],
    color: 'bg-neo-accent',
    rotation: '-rotate-1'
  },
  {
    title: 'PhoneTap',
    platform: 'Mobile · Web',
    description: 'Developed an NFC‑based attendance system using mobile phones to scan student ID cards for fast, contactless time‑in/time‑out with offline support and cloud sync. Reduced queues, prevented long attendance delays, and improved accuracy and efficiency of event monitoring. Technologies used: Flutter, Dart, Typescript, SQLite, PostgreSQL, Supabase, Vercel.',
    technologies: ['Flutter', 'NFC', 'Payments', 'Security'],
    features: [
      { label: 'NFC', value: 'Tap Attendance' },
      { label: 'Offline', value: 'Cloud Sync' }
    ],
    gallery: [
      'assets/PhoneTap/1.webp',
      'assets/PhoneTap/2.webp',
      'assets/PhoneTap/3.webp',
      'assets/PhoneTap/4.webp',
      'assets/PhoneTap/5.webp'
    ],
    color: 'bg-neo-secondary',
    rotation: 'rotate-1'
  }
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeGallery, setActiveGallery] = useState<string[] | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const openGallery = (gallery: string[], title: string) => {
    setActiveGallery(gallery);
    setActiveTitle(title);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setActiveGallery(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeGallery) {
      setCurrentImageIndex((prev) => (prev + 1) % activeGallery.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeGallery) {
      setCurrentImageIndex((prev) => (prev - 1 + activeGallery.length) % activeGallery.length);
    }
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="neo-section bg-neo-black text-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-radial-dots opacity-10 pointer-events-none" />

      <div className="neo-container relative z-10">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div
            className={`inline-block bg-neo-accent text-black border-4 border-white px-4 py-2 mb-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            style={{ boxShadow: '4px 4px 0px 0px #fff' }}
          >
            <span className="font-black text-xs uppercase tracking-widest">
              FEATURED WORK
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className={`font-black text-5xl md:text-6xl lg:text-8xl uppercase tracking-tighter transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              Projects <span className="text-neo-accent">I&apos;ve Worked On</span>
            </h2>
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-12 md:space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              <div
                onClick={() => openGallery(project.gallery, project.title)}
                className={`bg-neo-cream text-black border-4 border-white cursor-pointer ${project.rotation} hover:rotate-0 transition-all duration-300`}
                style={{ boxShadow: '12px 12px 0px 0px #fff' }}
              >
                <div className="grid lg:grid-cols-5">
                  {/* Left - Visual/Header */}
                  <div
                    className={`${project.color} border-b-4 lg:border-b-0 lg:border-r-4 border-black p-6 md:p-8 lg:col-span-2 flex flex-col justify-between`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Star className="w-5 h-5 fill-black stroke-[3]" />
                        <span className="font-black text-xs uppercase tracking-widest">
                          {project.platform}
                        </span>
                      </div>
                      <h3 className="font-black text-3xl md:text-4xl uppercase tracking-tight mb-2">
                        {project.title}
                      </h3>
                    </div>

                    {/* Features / Highlights */}
                    <div className="space-y-2 mt-6">
                      {project.features.map((feature, fIndex) => (
                        <div
                          key={fIndex}
                          className="bg-white border-2 border-black px-3 py-2 flex justify-between items-center"
                          style={{ boxShadow: '3px 3px 0px 0px #000' }}
                        >
                          <span className="font-black text-xs uppercase text-neo-accent">{feature.label}</span>
                          <span className="font-bold text-xs uppercase">{feature.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right - Details */}
                  <div className="p-6 md:p-8 lg:col-span-3 flex flex-col justify-between">
                    <div>
                      <p className="font-medium text-base md:text-lg leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="font-black text-xs uppercase tracking-widest text-black/60 mb-2">
                          TECHNOLOGIES USED
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="font-bold text-xs uppercase tracking-wider bg-white border-2 border-black px-3 py-1 hover:bg-neo-secondary transition-colors cursor-default"
                              style={{ boxShadow: '2px 2px 0px 0px #000' }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-4 text-xs font-black uppercase text-neo-accent animate-pulse">
                      <Sparkles className="w-4 h-4" />
                      <span>Click card to view gallery ({project.gallery.length} screens)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Carousel Modal */}
      {activeGallery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div
            className="relative w-full max-w-4xl bg-neo-cream border-4 border-black p-4 md:p-6 text-black"
            style={{ boxShadow: '12px 12px 0px 0px #fff' }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-4 border-b-4 border-black pb-3">
              <h3 className="font-black text-xl md:text-3xl uppercase tracking-tight">
                {activeTitle} Gallery
              </h3>
              <button
                onClick={closeGallery}
                className="bg-neo-accent border-4 border-black p-1 hover:bg-[#ff5252] transition-colors"
                style={{ boxShadow: '3px 3px 0px 0px #000' }}
              >
                <X className="w-6 h-6 stroke-[3]" />
              </button>
            </div>

            {/* Carousel Container */}
            <div className="relative aspect-video w-full bg-white border-4 border-black overflow-hidden flex items-center justify-center">
              <img
                src={activeGallery[currentImageIndex]}
                alt={`${activeTitle} Screen ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                  const parent = (e.target as HTMLElement).parentElement;
                  if (parent) {
                    const fallback = parent.querySelector('.fallback-project-img');
                    if (fallback) fallback.classList.remove('hidden');
                  }
                }}
              />
              <div className="fallback-project-img hidden absolute inset-0 bg-neo-cream flex items-center justify-center">
                <p className="font-black text-lg text-black/60 uppercase">Screen Image Missing: {activeGallery[currentImageIndex]}</p>
              </div>

              {/* Prev Button */}
              <button
                onClick={prevImage}
                className="absolute left-4 bg-white border-4 border-black p-2 hover:bg-neo-secondary transition-colors"
                style={{ boxShadow: '4px 4px 0px 0px #000' }}
              >
                <ChevronLeft className="w-6 h-6 stroke-[3]" />
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-4 bg-white border-4 border-black p-2 hover:bg-neo-secondary transition-colors"
                style={{ boxShadow: '4px 4px 0px 0px #000' }}
              >
                <ChevronRight className="w-6 h-6 stroke-[3]" />
              </button>
            </div>

            {/* Counter */}
            <div className="flex justify-between items-center mt-4">
              <span className="font-black text-sm uppercase tracking-widest bg-neo-secondary border-2 border-black px-3 py-1">
                Screen {currentImageIndex + 1} of {activeGallery.length}
              </span>
              <div className="flex gap-2">
                {activeGallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImageIndex(i)}
                    className={`w-3.5 h-3.5 border-2 border-black rounded-full transition-colors ${i === currentImageIndex ? 'bg-neo-accent' : 'bg-white'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
