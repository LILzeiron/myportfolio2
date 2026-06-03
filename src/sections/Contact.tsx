import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Github, Star, ArrowUpRight } from 'lucide-react';

const contactInfo = [
  {
    label: 'EMAIL',
    value: 'austriachristian300@gmail.com',
    action: 'mailto:austriachristian300@gmail.com',
    icon: Mail,
    color: 'bg-neo-accent'
  },
  {
    label: 'PHONE',
    value: '0963 765 8937',
    action: 'tel:09637658937',
    icon: Phone,
    color: 'bg-neo-secondary'
  },
  {
    label: 'GITHUB',
    value: 'github.com/LILzeiron',
    action: 'https://github.com/LILzeiron',
    icon: Github,
    color: 'bg-neo-muted'
  }
];

export default function Contact() {
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
      id="contact"
      ref={sectionRef}
      className="neo-section bg-neo-cream relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-halftone opacity-30 pointer-events-none" />

      {/* Decorative elements */}
      <div className="absolute top-16 left-12 hidden lg:block">
        <Star className="w-20 h-20 fill-neo-accent stroke-neo-black stroke-[3] animate-spin-slow" />
      </div>

      <div className="neo-container relative z-10">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div
            className={`inline-block bg-neo-accent border-4 border-black px-4 py-2 mb-4 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ boxShadow: '4px 4px 0px 0px #000' }}
          >
            <span className="font-black text-xs uppercase tracking-widest text-white">
              LET&apos;S CONNECT
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className={`font-black text-5xl md:text-6xl lg:text-8xl uppercase tracking-tighter transition-all duration-500 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Let&apos;s <span className="text-stroke">Connect</span>
            </h2>
          </div>
        </div>

        {/* Greeting / Enormous reach out statement */}
        <div className="mb-16 text-left max-w-4xl">
          <p className="font-black text-2xl md:text-4xl leading-snug uppercase tracking-tight text-black mb-6">
            If you have any projects or have something in mind, feel free to
          </p>
          <span className="font-black text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] text-neo-accent block uppercase leading-[0.85] tracking-tighter text-shadow-hard">
            reach out.
          </span>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-12 items-stretch">
          {contactInfo.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <a
                key={card.label}
                href={card.action}
                target={card.label === 'GITHUB' ? '_blank' : undefined}
                rel={card.label === 'GITHUB' ? 'noopener noreferrer' : undefined}
                className={`transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
              <div
                  className="bg-white border-4 border-black p-6 group hover:-translate-y-2 hover:bg-neo-cream transition-all duration-200 h-full flex flex-col justify-between min-h-[180px]"
                  style={{ boxShadow: '8px 8px 0px 0px #000' }}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 border-4 border-black ${card.color} group-hover:rotate-12 transition-transform duration-200`}>
                      <IconComponent className="w-6 h-6 stroke-[3] text-black" />
                    </div>
                    <ArrowUpRight className="w-6 h-6 stroke-[3] text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                  <div>
                    <span className="font-black text-xs uppercase tracking-widest text-black/60 block mb-2">
                      {card.label}
                    </span>
                    <span className="font-black text-sm break-all tracking-tight block leading-snug">
                      {card.value}
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
