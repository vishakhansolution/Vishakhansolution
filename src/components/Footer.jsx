import React from 'react';
import { Mail, MapPin, Globe, Linkedin, Instagram, ArrowUpRight, Facebook } from 'lucide-react';

const Footer = () => {
  const regions = ["USA", "Australia", "Canada", "UK"];
  const services = ["HDR & Flambient", "Day to Dusk", "Object Removal", "Virtual Staging"];
  
  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-12">
        
        {/* --- MAIN GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mb-24">
          
          {/* 1. BRAND IDENTITY */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-serif tracking-tighter text-slate-900">Vishakhan</span>
                <div className="h-px w-8 bg-blue-600"></div>
              </div>
              <p className="text-[10px] tracking-[0.5em] text-blue-600 font-bold uppercase pl-1">Solution</p>
            </div>
            
            <p className="text-slate-500 text-sm leading-relaxed font-light max-w-xs">
              Professional real estate image processing. Engineering visual authority for global market leaders since 2014.
            </p>
            
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-9 h-9 border border-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all duration-300">
                <Linkedin size={15} />
              </a>
              <a href="#" className="w-9 h-9 border border-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:bg-[#E1306C] hover:text-white transition-all duration-300">
                <Instagram size={15} />
              </a>
              <a href="#" className="w-9 h-9 border border-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:bg-[#1877F2] hover:text-white transition-all duration-300">
                <Facebook size={15} />
              </a>
            </div>
          </div>

          {/* 2. SERVICES */}
          <div className="space-y-8 lg:pl-4">
            <h4 className="text-[10px] font-bold text-slate-900 tracking-[0.4em] uppercase border-l-2 border-blue-600 pl-4">Capabilities</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-light">
              {services.map((service, i) => (
                <li key={i} className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors">
                  <span className="text-[10px] text-slate-300">0{i+1}</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* 3. GLOBAL FOOTPRINT */}
          <div className="space-y-8 lg:pl-4">
            <h4 className="text-[10px] font-bold text-slate-900 tracking-[0.4em] uppercase border-l-2 border-blue-600 pl-4">Presence</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-sm bg-slate-50 flex items-center justify-center shrink-0">
                  <MapPin size={14} className="text-blue-600" />
                </div>
                <p className="text-sm text-slate-500 leading-snug font-light">
                  Karur, Tamil Nadu<br />
                  <span className="text-slate-900 font-medium">India — 639001</span>
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-sm bg-slate-50 flex items-center justify-center shrink-0">
                  <Globe size={14} className="text-blue-600" />
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {regions.map((r) => (
                    <span key={r} className="text-[9px] font-bold tracking-widest text-slate-400 border border-slate-100 px-2 py-0.5 uppercase">{r}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 4. INQUIRY PORTAL */}
          <div className="lg:col-span-1">
            <div className="bg-slate-50 p-8 relative overflow-hidden">
              <p className="text-blue-500 text-[9px] font-bold tracking-[0.4em] uppercase mb-6">New Projects</p>
              <a href="mailto:vishakhansolution@gmail.com" className="text-blue-500 text-lg font-serif flex items-center gap-2 hover:text-blue-400 transition-colors mb-6">
                vishakhansolution@gmail.com <ArrowUpRight size={16} />
              </a>
              <div className="h-px w-full bg-slate-800 mb-6"></div>
              <p className="text-slate-500 text-[10px] leading-relaxed uppercase tracking-widest font-medium">
                Available 24/7 for <br /> priority global support.
              </p>
            </div>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            © 2026 Vishakhan Solution. <span className="text-slate-200 font-light mx-2">|</span> Studio Crafted in India. | Developed by ROHITH
          </p>
          
          <div className="flex gap-10 text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;