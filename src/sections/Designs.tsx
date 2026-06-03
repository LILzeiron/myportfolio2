import { useEffect, useRef, useState } from 'react';
import { Palette, Figma, ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

const designs = [
  {
    title: 'Sintra Board',
    category: 'Print Design',
    thumbnail: 'assets/SintraBoard/1.webp',
    gallery: [
      'assets/SintraBoard/1.webp',
      'assets/SintraBoard/2.webp',
      'assets/SintraBoard/3.webp',
      'assets/SintraBoard/4.webp'
    ],
    color: 'bg-neo-accent',
    rotation: '-rotate-2'
  },
  {
    title: 'Layouts',
    category: 'Digital Graphic',
    thumbnail: 'assets/Layouts/1.webp',
    gallery: [
      'assets/Layouts/1.webp',
      'assets/Layouts/2.webp',
      'assets/Layouts/3.webp',
      'assets/Layouts/4.webp',
      'assets/Layouts/5.webp'
    ],
    color: 'bg-neo-secondary',
    rotation: 'rotate-1'
  },
  {
    title: 'Prototype',
    category: 'User Interface',
    thumbnail: 'assets/UI/1.webp',
    gallery: [
      'assets/UI/1.webp',
      'assets/UI/2.webp',
      'assets/UI/3.webp'
    ],
    color: 'bg-neo-muted',
    rotation: 'rotate-2'
  }
];

export default function Designs() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openGallery = (gallery: string[], title: string) => {
    // Preload all images immediately so navigation is instant
    gallery.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
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
      id="designs"
      ref={sectionRef}
      className="neo-section bg-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />

      {/* Decorative elements */}
      <div className="absolute top-16 right-16 hidden lg:block">
        <Palette className="w-20 h-20 stroke-neo-black stroke-[3] animate-float" />
      </div>
      <div className="absolute bottom-24 left-12 hidden lg:block">
        <Figma className="w-16 h-16 stroke-neo-accent stroke-[3]" />
      </div>

      <div className="neo-container relative z-10">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div
            className={`inline-block bg-neo-muted border-4 border-black px-4 py-2 mb-4 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ boxShadow: '4px 4px 0px 0px #000' }}
          >
            <span className="font-black text-xs uppercase tracking-widest">
              GRAPHIC DESIGN
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className={`font-black text-5xl md:text-6xl lg:text-8xl uppercase tracking-tighter transition-all duration-500 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Visual <span className="text-stroke">Work</span>
            </h2>
            <p
              className={`font-bold text-lg max-w-md transition-all duration-500 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Click any card below to open the gallery carousel and view the full visual projects.
            </p>
          </div>
        </div>

        {/* Designs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center">
          {designs.map((design, index) => (
            <div
              key={design.title}
              className={`transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div
                onClick={() => openGallery(design.gallery, design.title)}
                className={`bg-neo-cream border-4 border-black h-full group cursor-pointer hover:-translate-y-2 transition-all duration-200 flex flex-col ${design.rotation}`}
                style={{ boxShadow: '10px 10px 0px 0px #000' }}
              >
                {/* Color Header */}
                <div
                  className={`${design.color} border-b-4 border-black p-4 flex items-center justify-between`}
                >
                  <span className="font-black text-xs uppercase tracking-widest">
                    {design.category}
                  </span>
                  <ArrowUpRight className="w-5 h-5 stroke-[3] group-hover:rotate-45 transition-transform" />
                </div>

                {/* Thumbnail Image Container */}
                <div className="border-b-4 border-black aspect-video bg-neo-cream overflow-hidden relative">
                  <img
                    src={design.thumbnail}
                    alt={design.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback
                      (e.target as HTMLElement).style.display = 'none';
                      const parent = (e.target as HTMLElement).parentElement;
                      if (parent) {
                        const fallback = parent.querySelector('.fallback-design');
                        if (fallback) fallback.classList.remove('hidden');
                      }
                    }}
                  />
                  <div className="fallback-design hidden absolute inset-0 bg-neo-cream flex items-center justify-center">
                    <Palette className="w-12 h-12 stroke-[1.5]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6 flex-grow flex flex-col justify-between">
                  <h3 className="font-black text-xl md:text-2xl uppercase tracking-tight mb-2 group-hover:text-neo-accent transition-colors">
                    {design.title}
                  </h3>
                  <span className="font-bold text-xs uppercase tracking-wider bg-white border-2 border-black px-2 py-1 inline-block self-start mt-2">
                    Click to view gallery ({design.gallery.length} items)
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Carousel Modal */}
      {activeGallery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div
            className="relative w-full max-w-4xl bg-neo-cream border-4 border-black p-4 md:p-6"
            style={{ boxShadow: '12px 12px 0px 0px #000' }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-4 border-b-4 border-black pb-3">
              <h3 className="font-black text-xl md:text-3xl uppercase tracking-tight">
                {activeTitle}
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
                alt={`${activeTitle} - ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                  const parent = (e.target as HTMLElement).parentElement;
                  if (parent) {
                    const fallback = parent.querySelector('.fallback-modal-img');
                    if (fallback) fallback.classList.remove('hidden');
                  }
                }}
              />
              <div className="fallback-modal-img hidden absolute inset-0 bg-neo-cream flex items-center justify-center">
                <p className="font-black text-lg text-black/60 uppercase">Image Missing: {activeGallery[currentImageIndex]}</p>
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

            {/* Image Counter Indicator */}
            <div className="flex justify-between items-center mt-4">
              <span className="font-black text-sm uppercase tracking-widest bg-neo-secondary border-2 border-black px-3 py-1">
                Image {currentImageIndex + 1} of {activeGallery.length}
              </span>
              <div className="flex gap-2">
                {activeGallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImageIndex(i)}
                    className={`w-3.5 h-3.5 border-2 border-black rounded-full transition-colors ${
                      i === currentImageIndex ? 'bg-neo-accent' : 'bg-white'
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
