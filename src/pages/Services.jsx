import React, { useEffect } from 'react';
import { Check, ArrowUpRight, ArrowRight, Layers, ShieldCheck, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contact-form') {
      const element = document.getElementById('contact-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    window.scrollTo(0, 0);
  }, [location]);

  const serviceDetails = [
    {
      id: "01",
      title: "HDR & Flambient Editing",
      desc: "Our signature service. We merge multiple exposures to create a single, perfectly balanced image that mimics how the human eye perceives light—retaining natural highlights and deep shadows.",
      features: ["Manual Window Masking", "Color Cast Correction", "Balanced Flash/Ambient Blending"],
      img: "./Hdr-1 (3).jpeg"
    },
    {
      id: "02",
      title: "Day to Dusk Conversion",
      desc: "Transform standard daylight photos into warm, atmospheric twilight scenes. This process increases property appeal and engagement, making the home feel cozy and inviting.",
      features: ["Sky Replacement", "Interior Lighting Glow", "Exterior Lamp Activation"],
      img: "./twlight-1.jpeg"
    },
    {
      id: "03",
      title: "Object Removal & Decluttering",
      desc: "Eliminate distracting elements that take away from the property's value. We remove vehicles, pool cleaners, hoses, and interior clutter with seamless texture matching.",
      features: ["Driveway Cleaning", "Cable/Wire Removal", "Furniture Removal"],
      img: "https://images.unsplash.com/photo-1600607687940-4e524cb35a3a?auto=format&fit=crop&q=80"
    },
   {
  id: "04",
  title: "Flash & Interior", 
  desc: "Utilizing advanced Flash/Ambient blending to reveal the true architectural character of your property. We synchronize flash exposures with natural light to eliminate shadows and restore authentic material colors.",
  features: [
    "Flash/Ambient Luminescence", 
    "Surgical Shadow Removal", 
    "Material Color Calibration",
    "Pool & Sky Harmonization"
  ],
  // This image shows a high-end exterior with perfect lighting
  img: "./flash-1 (3).jpeg" 
}
  ];

  return (
    <div className="bg-white overflow-x-hidden max-w-full selection:bg-blue-600 selection:text-white">
      
      {/* --- SECTION 1: CINEMATIC HEADER --- */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden bg-slate-50/50">
        <div 
          className="absolute top-10 right-[-10%] text-[15rem] md:text-[25rem] font-serif text-slate-100 select-none pointer-events-none italic opacity-50"
          data-aos="zoom-out"
          data-aos-duration="2000"
        >
          Solutions
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8" data-aos="fade-right" data-aos-duration="1200">
              <div className="flex items-center gap-6 mb-10">
                <div className="h-px w-20 bg-blue-600"></div>
                <span className="text-[10px] font-black tracking-[0.8em] uppercase text-blue-600">Studio Expertise</span>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-[130px] font-serif text-slate-900 tracking-tighter leading-[0.85] mb-4">
                Redefining <br /> 
                <span className="italic text-slate-300">Visual Standards</span>.
              </h1>
            </div>
            <div className="lg:col-span-4 pb-4" data-aos="fade-up" data-aos-delay="400">
               <p className="text-slate-400 text-sm md:text-base leading-relaxed border-l border-slate-200 pl-8">
                  "At Vishakhan, we don't just process pixels; we engineer visual authority through surgical precision."
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: LAYERED SERVICES GRID --- */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-32 md:space-y-48">
          {serviceDetails.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col lg:flex-row items-center gap-16 md:gap-24 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Frame with Floating Decor */}
              <div className="w-full lg:w-3/5 relative" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} data-aos-duration="1200">
                <div className="absolute -inset-4 border border-slate-100 -z-10 translate-x-4 translate-y-4 rounded-sm"></div>
                <div className="relative overflow-hidden aspect-[16/9] shadow-2xl group rounded-sm">
                  <img 
                    src={service.img} 
                    alt={service.title}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>
                {/* Floating ID Badge */}
                <div className="absolute -bottom-8 right-8 bg-slate-900 text-white w-20 h-20 flex items-center justify-center font-serif italic text-3xl shadow-2xl">
                  {service.id}
                </div>
              </div>

              {/* Text Content with Staggered Reveal */}
              <div className="w-full lg:w-2/5" data-aos="fade-up" data-aos-duration="1000">
                <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[9px] font-black tracking-widest uppercase mb-6">
                  Vishakhan Specialty
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8 leading-tight">
                  {service.title}
                </h2>
                <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-10 font-light italic">
                  "{service.desc}"
                </p>
                <div className="space-y-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-default">
                      <div className="w-6 h-6 rounded-full border border-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                        <Check size={12} className="text-blue-600 group-hover:text-white" />
                      </div>
                      <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase group-hover:text-slate-900 transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 3: DARK CAPABILITIES MATRIX --- */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-10">
            <div data-aos="fade-right">
               <h2 className="text-4xl md:text-5xl font-serif italic">Supporting Assets</h2>
               <p className="text-slate-500 text-[10px] font-black tracking-[0.6em] uppercase mt-4">Precision-Matched Deliverables</p>
            </div>
            <div className="h-px flex-1 bg-slate-800 hidden md:block mx-12" data-aos="grow-width"></div>
            <div data-aos="fade-left" className="text-center md:text-right">
               <ShieldCheck className="text-blue-500 mb-2 ml-auto hidden md:block" size={32} />
               <p className="text-xs text-slate-400 font-light">Global standard compliance.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-800 border border-slate-800">
            {[
              { t: "Flash Blending", d: "Clinical color accuracy.", icon: <Zap size={18}/> },
              { t: "Grass Repair", d: "Lush, realistic textures.", icon: <Check size={18}/> },
              { t: "Sky Library", d: "Atmospheric perfection.", icon: <Layers size={18}/> },
              { t: "Twilight Logic", d: "Cozy exterior lighting.", icon: <ArrowUpRight size={18}/> }
            ].map((s, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900 p-12 hover:bg-blue-600 transition-all duration-700 group cursor-default"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                <div className="text-blue-500 group-hover:text-white mb-8 transition-colors">
                  {s.icon}
                </div>
                <h4 className="text-xl font-serif mb-4 group-hover:italic transition-all">{s.t}</h4>
                <p className="text-[10px] text-slate-500 group-hover:text-blue-100 leading-relaxed uppercase tracking-[0.2em] font-medium">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: ARCHITECTURAL CTA --- */}
      <section className="py-44 px-6 text-center bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto" data-aos="zoom-in-up" data-aos-duration="1500">
          <span className="text-[11px] font-black tracking-[0.5em] text-blue-600 uppercase mb-12 block">Secure Your Next Project</span>
          <h2 className="text-5xl md:text-7xl lg:text-[100px] font-serif text-slate-900 mb-16 leading-[0.9] tracking-tighter">
            Elevate your <br /> 
            <span className="italic text-slate-300">Digital Presence</span>.
          </h2>
          <Link to="/contact#contact-form">
            <button className="bg-slate-900 text-white px-16 py-7 text-[12px] font-black tracking-[0.4em] uppercase hover:bg-blue-600 transition-all duration-500 shadow-[0_20px_50px_-10px_rgba(37,99,235,0.3)] flex items-center gap-5 mx-auto group">
              Get Free Test Edit <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Services;