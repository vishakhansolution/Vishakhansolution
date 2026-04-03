import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, Globe, Plus } from 'lucide-react';
import { LogoLoop } from '../components/LogoLoop';

const Home = () => {
  const services = [
    { title: "HDR Blending", img: "./HDR (1).jpeg" },
    { title: "Flambient Editing",  img: "flash-1 (1).jpeg" },
    { title: "Day to Dusk", img: "twlight-1.jpeg" },
    { title: "Object Removal", img: "" },
    { title: "Sky Replacement",  img: "sky (4).jpeg" },
    { title: "Twilight Enhancement",  img: "twlight-3.jpeg" },
    { title: "Grass Replacement",  img: "" },
    { title: "Flash Processing",  img: "flash-1 (2).jpeg" },
  ];

  const partnerLogos = [
  { src: "/logos/remax.png", alt: "RE/MAX" },
  { src: "/logos/century21.png", alt: "Century 21" },
  { src: "/logos/zillow.png", alt: "Zillow" },
  { src: "/logos/sothebys.png", alt: "Sotheby's" },
  { src: "/logos/compass.png", alt: "Compass" },
  { src: "/logos/realtor.png", alt: "Realtor.com" },
];

  return (
    <div className="bg-white selection:bg-blue-100 font-sans overflow-x-hidden">
      
      {/* --- ELEGANT HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center px-6 pt-24 lg:pt-12">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* --- LEFT CONTENT AREA --- */}
          <div className="lg:col-span-8 order-2 lg:order-1 text-center lg:text-left" data-aos="fade-right">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-blue-600">Vishakhan Solution</span>
              <div className="h-px w-12 bg-slate-200"></div>
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-400">Est. 2014</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[95px] font-serif leading-[0.9] text-slate-900 tracking-tighter mb-10">
              Visual Perfection <br />
              <span className="italic text-slate-400 lg:pl-20 block lg:inline mt-4 lg:mt-0">In Every Detail.</span>
            </h1>

            <div className="flex flex-col md:flex-row items-center lg:items-start gap-8 mb-12">
              <p className="max-w-xs text-slate-500 text-sm leading-relaxed border-l-2 border-blue-600 pl-6 text-left">
                Premium HDR & Flambient editing for elite agencies across the 
                <span className="text-slate-900 font-semibold"> US, Australia, Canada, & UK.</span>
              </p>
              
              <div className="flex flex-col items-center md:items-start" data-aos="fade-up" data-aos-delay="200">
                <span className="text-4xl font-serif italic text-blue-900 leading-none">10+</span>
                <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase mt-1">Years of Mastery</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <Link to="/contact#contact-form">
                <button className="bg-slate-900 text-white px-8 lg:px-10 py-4 lg:py-5 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-blue-900 transition-all duration-300 shadow-xl flex items-center gap-3 group">
                  Start Free Trial <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/portfolio">
                <button className="px-8 lg:px-10 py-4 lg:py-5 text-[10px] font-bold tracking-[0.2em] uppercase border border-slate-200 hover:bg-slate-50 transition-all duration-300">
                  View Portfolio
                </button>
              </Link>
            </div>
          </div>
          
          {/* --- RIGHT IMAGE AREA --- */}
          <div className="lg:col-span-4 order-1 lg:order-2" data-aos="zoom-out" data-aos-delay="400">
            <div className="relative group max-w-[400px] mx-auto lg:max-w-none">
              <div className="aspect-[3/4] bg-slate-100 overflow-hidden rounded-sm shadow-2xl transition-transform duration-700 group-hover:-translate-y-2">
                <img 
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                  alt="Velaura Pixolution Luxury Real Estate"
                />
              </div>
              <div className="absolute -inset-4 border border-slate-100 -z-10 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
              <div className="absolute -bottom-4 -right-4 bg-white border border-slate-100 p-4 lg:p-5 shadow-lg flex flex-col items-center text-center">
                <div className="w-8 h-8 rounded-full border border-blue-100 flex items-center justify-center mb-2">
                  <ShieldCheck size={14} className="text-blue-600" />
                </div>
                <span className="text-[8px] font-bold tracking-[0.2em] uppercase text-slate-900">Certified Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONCEPT / PHILOSOPHY --- */}
      <section className="py-32 bg-slate-50" data-aos="fade-up">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-blue-600 mb-8">The VISHAKHAN Standard</h2>
          <p className="text-3xl lg:text-5xl font-serif text-slate-800 leading-snug">
            "We focus on maintaining <span className="text-blue-900 italic">natural colors</span>, clean lines, and balanced lighting that enhances market value."
          </p>
        </div>
      </section>

      {/* --- CLASSY SERVICE CARDS --- */}
     <section className="py-32 px-6 max-w-7xl mx-auto bg-white">
  {/* --- HEADER SECTION --- */}
  <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8" data-aos="fade-up">
    <div className="relative">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px w-8 bg-blue-600"></div>
        <span className="text-blue-600 text-[10px] font-bold tracking-[0.5em] uppercase block">Our Specialization</span>
      </div>
      <h2 className="text-5xl lg:text-6xl font-serif text-slate-900 leading-tight">
        Professional <br /> <span className="italic text-slate-400">Solutions</span>
      </h2>
    </div>
    <div className="md:text-right">
      <p className="text-slate-500 max-w-xs text-sm leading-relaxed mb-6 italic">
        "Precision-focused editing services tailored for high-volume global agencies."
      </p>
      <div className="flex justify-end gap-6 text-[9px] font-bold tracking-[0.3em] uppercase text-slate-400">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 border border-blue-600 rounded-full"></div> 8H Turnaround
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 border border-blue-600 rounded-full"></div> Unlimited Revisions
        </div>
      </div>
    </div>
  </div>

  {/* --- SERVICE GRID --- */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
    {services.map((item, index) => (
      <div 
        key={index} 
        className="group cursor-pointer transition-all duration-500" 
        data-aos="fade-up" 
        data-aos-delay={index * 100}
      >
        <div className="relative mb-8">
          {/* --- FIXED: Changed rounded-t to all-side rounded --- */}
          <div className="relative overflow-hidden aspect-[4/5] rounded-[48px] bg-slate-100 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-blue-900/10">
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0" 
            />
            
            {/* Elegant Glass-morphism Overlay for Name Reveal */}
            <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex items-center justify-center p-6">
              <div className="text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[9px] font-bold tracking-[0.4em] text-blue-400 uppercase mb-2 block">Service</span>
                <h4 className="text-white font-serif text-xl md:text-2xl leading-tight">
                  {item.title}
                </h4>
                <div className="h-px w-8 bg-white/30 mx-auto mt-4 group-hover:w-12 transition-all duration-700"></div>
              </div>
            </div>
          </div>

          {/* Vertical Tag - Adjusted position for new corner shape */}
          <div className="absolute top-16 -left-4 origin-top-left -rotate-90">
            <span className="text-[7px] font-bold tracking-[0.5em] uppercase text-slate-300 group-hover:text-blue-600 transition-colors">
              {item.tag}
            </span>
          </div>
        </div>

        {/* --- BOTTOM TEXT AREA --- */}
        <div className="px-1 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-[9px] font-serif italic text-slate-300">0{index + 1}</span>
            <h3 className="text-lg font-serif text-slate-900 tracking-wide group-hover:text-blue-600 transition-colors">
              {item.title}
            </h3>
          </div>
          
          <div className="relative h-[1px] w-12 mx-auto bg-slate-100 overflow-hidden">
            <div className="absolute inset-0 bg-blue-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>
          </div>
          
          <p className="mt-4 text-[9px] font-bold text-blue-600 uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-2">
            Explore Specialty <ArrowRight size={10} />
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

<section className="py-32 bg-slate-50 border-y border-slate-100" data-aos="fade-up">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid lg:grid-cols-12 gap-16 items-center">
      
      {/* Left Column: The Large Quote/Statement */}
      <div className="lg:col-span-8 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
          <span className="text-[10px] font-black tracking-[0.5em] uppercase text-blue-600">The Vishakhan Standard</span>
          <div className="h-px w-12 bg-blue-200"></div>
        </div>
        
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-slate-900 leading-[1.1] tracking-tight">
          We engineer <span className="italic text-slate-400">Visual Authority</span> <br /> 
          through surgical precision.
        </h2>
      </div>

      {/* Right Column: The Explainer */}
      <div className="lg:col-span-4 border-l border-slate-200 pl-8 md:pl-12 lg:pl-10">
        <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light mb-8">
          In high-stakes real estate, a second is all you have. We refine every pixel to ensure 
          <span className="text-slate-900 font-medium italic"> natural colors</span> and 
          <span className="text-slate-900 font-medium"> structural clarity</span> that stops the scroll.
        </p>
        
        <div className="flex items-center gap-4 group cursor-help">
          <div className="w-10 h-10 rounded-full border border-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
            <span className="text-[10px] font-bold">8H</span>
          </div>
          <span className="text-[9px] font-bold tracking-widest uppercase text-slate-900">Priority Delivery Protocol</span>
        </div>
      </div>

    </div>
  </div>
</section>

{/* --- LOGO LOOP SECTION --- */}
{/* <section className="py-20 bg-white border-t border-slate-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <p className="text-[9px] font-black tracking-[0.5em] text-slate-300 uppercase mb-12">
      Trusted by major franchises in
    </p>
    
    <div className="relative group">
      {/* Using your LogoLoop component:
          - speed: 40 (Slower is classier for high-end brands)
          - logoHeight: 32 (Standard height for real estate logos)
          - gap: 80 (Professional spacing)
          - fadeOut: true (Enables the gradient edges from your CSS)
          - pauseOnHover: true (Good for UX)
      */}
      {/* <LogoLoop 
        logos={partnerLogos}
        speed={40} 
        logoHeight={32}
        gap={80}
        pauseOnHover={true}
        className="opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
      />
    </div>
  </div>
</section>
 */} 


      {/* --- GLOBAL TRUST SECTION --- */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-blue-500/30 text-blue-400 text-[10px] font-bold tracking-widest uppercase mb-8"><Globe size={12} /> Global Presence</div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Reliable partner for agencies worldwide.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {[
                { label: "Consistency", desc: "Predictable quality every time", icon: <ShieldCheck size={20}/> },
                { label: "Speed", desc: "Under 12h delivery", icon: <Zap size={20}/> }
              ].map((stat, i) => (
                <div key={i} data-aos="fade-up" data-aos-delay={i * 200}>
                  <div className="text-blue-500 mb-3">{stat.icon}</div>
                  <h4 className="font-bold text-sm tracking-widest uppercase mb-2">{stat.label}</h4>
                  <p className="text-slate-400 text-sm">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative" data-aos="fade-left">
            <div className="p-8 lg:p-10 border border-slate-700 bg-slate-800/50 backdrop-blur-md shadow-2xl">
              <p className="text-blue-400 font-bold tracking-widest text-[10px] uppercase mb-4">The Offer</p>
              <h3 className="text-2xl lg:text-3xl font-serif mb-6 text-white">Experience the difference with a free test.</h3>
              <p className="text-slate-400 mb-8 leading-relaxed text-sm">Send us 2-3 raw properties. We'll edit them to your specifications and deliver within 8 hours—completely free.</p>
              <Link to="/contact#contact-form">
                <button className="w-full bg-white text-slate-900 py-5 font-bold tracking-widest uppercase text-[11px] hover:bg-blue-600 hover:text-white transition-all shadow-xl group flex items-center justify-center gap-3">
                  Get My Free Test Edit <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. LOGISTICAL FAQ --- */}
<section className="py-32 bg-slate-50 px-6">
  <div className="max-w-3xl mx-auto">
    <div className="text-center mb-20" data-aos="fade-up">
      <h2 className="text-3xl lg:text-4xl font-serif text-slate-900 italic">Common Inquiries</h2>
    </div>
    <div className="space-y-6">
      {[
        { q: "What is your typical turnaround time?", a: "Our standard delivery is within 8-12 hours, ensuring you can list properties the very next morning." },
        { q: "Do you offer bulk volume discounts?", a: "Yes, for agencies processing more than 50 properties per month, we offer bespoke enterprise pricing." },
        { q: "Can I request a custom editing style?", a: "Absolutely. We can match your agency’s specific presets or lighting preferences to maintain brand consistency." }
      ].map((item, idx) => (
        <div key={idx} className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 group hover:border-blue-200 transition-colors" data-aos="fade-up" data-aos-delay={idx * 100}>
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-3">
             <div className="w-1 h-4 bg-blue-600"></div> {item.q}
          </h4>
          <p className="text-slate-500 text-sm leading-relaxed font-light">{item.a}</p>
        </div>
      ))}
    </div>
  </div>
</section>
      
    </div>
  );
};

export default Home;