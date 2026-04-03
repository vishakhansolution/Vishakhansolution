import React, { useState, useEffect, useMemo } from 'react'; 
import { ArrowRight, MousePointer2, Globe, Plus, Maximize2, ArrowUpRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'HDR Blending', 'Day to Dusk', 'Sky Replacement','Flash Processing'];

  const projects = useMemo(() => [
  // --- HDR & FLAMBIENT ---
 { id: 1, category: 'HDR Blending', title: 'HDR Blending',  img: './Hdr-1 (4).JPEG' },
  { id: 2, category: 'HDR Blending', title: 'HDR Blending',  img: './Hdr-1 (3).JPEG' },
  { id: 3, category: 'HDR Blending', title: 'HDR Blending',  img: './Hdr-1 (1).JPEG' },
  { id: 4, category: 'HDR Blending', title: 'HDR Blending',  img: './Hdr-1 (2).JPEG' },
  { id: 5, category: 'HDR Blending', title: 'HDR Blending',  img: './Hdr-1 (5).JPEG' },

  // --- DAY TO DUSK ---
  { id: 6, category: 'Day to Dusk', title: 'Day to Dusk',  img: './twlight-2.jpeg' },
  { id: 7, category: 'Day to Dusk', title: 'Day to Dusk',  img: './twlight-1.jpeg' },
  { id: 8, category: 'Day to Dusk', title: 'Day to Dusk',  img: './twlight-3.jpeg' },
  { id: 9, category: 'Day to Dusk', title: 'Day to Dusk',  img: './twlight.JPEG' },

  // --- SKY REPLACEMENT ---
  { id: 10, category: 'Sky Replacement', title: 'Sky Replacement',  img: './sky (1).jpeg' },
  { id: 11, category: 'Sky Replacement', title: 'Sky Replacement',  img: './sky (2).jpeg' },
  { id: 12, category: 'Sky Replacement', title: 'Sky Replacement',  img: './sky (3).jpeg' },

  // --- FLASH PROCESSING ---
  { id: 13, category: 'Flash Processing', title: 'Flash Processing',  img: './twlight-2.jpeg' },
  { id: 14, category: 'Flash Processing', title: 'Flash Processing',  img: './twlight-3.jpeg' },
  { id: 15, category: 'Flash Processing', title: 'Flash Processing',  img: './twlight-1.jpeg' }
], []);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="bg-white min-h-screen selection:bg-blue-900 selection:text-white overflow-x-hidden">
     

      <main className="pt-32 md:pt-40 pb-32">
        {/* --- HERO HEADER --- */}
        <section className="px-6 mb-20 md:mb-32 max-w-7xl mx-auto" data-aos="fade-up">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="relative">
              <div className="flex items-center gap-4 mb-8" data-aos="fade-right" data-aos-delay="200">
                <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-blue-600 whitespace-nowrap">Vishakhan Solution</span>
                <div className="h-px w-8 md:w-16 bg-slate-200"></div>
              </div>
              <h1 className="text-5xl sm:text-7xl lg:text-[130px] font-serif leading-[0.9] lg:leading-[0.8] text-slate-900 tracking-tighter">
                Global <br />
                <span className="italic text-slate-300">Portfolios.</span>
              </h1>
            </div>
            <div className="max-w-xs border-l border-slate-100 pl-8 pb-4" data-aos="fade-left" data-aos-delay="400">
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                Delivering surgical precision for elite agencies across the <span className="text-slate-900 font-medium">US, AU, UK, and Canada.</span>
              </p>
            </div>
          </div>
        </section>

        {/* --- STICKY FILTER --- */}
        <section className="sticky top-[70px] md:top-[80px] z-40 bg-white/90 backdrop-blur-md border-y border-slate-50 mb-16 md:mb-24 shadow-sm md:shadow-none" data-aos="fade-down">
          <div className="max-w-7xl mx-auto px-6 py-4 md:py-6 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-slate-400">
              <MousePointer2 size={12} /> <span className="hidden sm:inline">FILTER BY SERVICE</span>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-8">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] transition-all duration-500 relative pb-1 ${
                    filter === cat ? 'text-blue-600' : 'text-slate-400 hover:text-slate-900'
                  }`}
                >
                  {cat}
                  {filter === cat && <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-600"></div>}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* --- SYMMETRICAL GRID --- */}
        <section className="max-w-7xl mx-auto px-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 md:gap-x-16 gap-y-24 md:gap-y-32">
    {filteredProjects.map((project, idx) => (
      <div 
        key={project.id} 
        className="group relative"
        data-aos="fade-up"
        data-aos-delay={(idx % 3) * 150} 
      >
        {/* --- IMAGE CONTAINER: ROUNDED TOP CORNERS ONLY --- */}
        <div className="relative overflow-hidden aspect-[4/5] rounded-t-[60px] md:rounded-t-[80px] bg-slate-50 transition-all duration-1000 group-hover:shadow-[0_40px_80px_-15px_rgba(30,41,59,0.15)] group-hover:-translate-y-2">
          <img 
            src={project.img} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1500ms] ease-out"
          />
          
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          {/* Category Badge - Refined Position */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-6 py-2 text-[8px] font-black tracking-[0.4em] uppercase text-slate-900 opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-xl border border-slate-100">
            {project.category}
          </div>
        </div>

        {/* --- CONTENT AREA --- */}
        <div className="mt-10 md:mt-12 px-2">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black text-blue-600 tracking-tighter">/ ARCHIVE_0{project.id}</span>
              <div className="h-px w-10 bg-slate-100 group-hover:w-16 group-hover:bg-blue-300 transition-all duration-700"></div>
            </div>
           
          </div>

          {/* Title: Same as Category but styled as a Primary Heading */}
          <h3 className="text-2xl md:text-3xl font-serif text-slate-900 mb-4 group-hover:italic group-hover:text-blue-600 transition-all duration-500 leading-none">
            {project.title}
          </h3>

          {/* Animated Progress Line */}
          <div className="relative h-[1px] w-full bg-slate-100 overflow-hidden">
            <div className="absolute inset-0 bg-blue-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
        {/* --- SIGNATURE CTA --- */}
        <section className="mt-40 md:mt-60 px-6 max-w-5xl mx-auto text-center" data-aos="zoom-in-up">
           <div className="inline-block px-4 py-1.5 border border-blue-600 text-blue-600 text-[9px] font-bold tracking-[0.5em] uppercase mb-8 md:mb-12">
              Bespoke Partnership
           </div>
           <h2 className="text-3xl md:text-4xl lg:text-6xl font-serif text-slate-900 mb-10 md:mb-12 leading-tight">
             Experience the <span className="italic text-slate-400">Vishakhan Solution</span> <br className="hidden md:block" /> 
             on your next project.
           </h2>
           <a 
              href="/contact#contact-form"
              className="inline-flex items-center gap-4 md:gap-6 bg-slate-900 text-white px-10 md:px-14 py-5 md:py-6 text-[10px] md:text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-blue-600 transition-all duration-500 shadow-2xl"
           >
             Claim Free Test Edit <ArrowRight size={16} />
           </a>
        </section>
      </main>

    
    </div>
  );
};

export default Portfolio;