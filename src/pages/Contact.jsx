import React from 'react';
import { Mail, Globe, Linkedin, Instagram, Facebook, MessageCircle, ArrowUpRight, ShieldCheck, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const operationalZones = [
    { region: "Americas", status: "24/7 Monitoring", lead: "12h Turnaround" },
    { region: "Australia/NZ", status: "Priority Support", lead: "Express Delivery" },
    { region: "Europe/UK", status: "Global Standard", lead: "Daily Capacity" }
  ];

  return (
    <div className="bg-white min-h-screen selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      <main className="pt-44 pb-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* --- HERO HEADER: ASYMMETRIC REVEAL --- */}
          <div className="grid lg:grid-cols-12 gap-12 mb-32 items-end">
            <div className="lg:col-span-8" data-aos="fade-right" data-aos-duration="1200">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-16 bg-blue-600"></div>
                <span className="text-blue-600 text-[10px] font-bold tracking-[0.6em] uppercase">Vishakhan Solution</span>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-[130px] font-serif leading-[0.8] text-slate-900 tracking-tighter">
                Global <br />
                <span className="italic text-slate-400">Connectivity.</span>
              </h1>
            </div>
            <div className="lg:col-span-4" data-aos="fade-up" data-aos-delay="400">
               <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light border-l border-slate-100 pl-8 mb-4">
                  "Efficiency is our baseline. Visual excellence is our standard. Let's engineer your brand's global consistency."
               </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-20 items-start">
            
            {/* --- LEFT: THE SOCIAL & INFO ANCHOR --- */}
            <div className="lg:col-span-4 space-y-16 order-2 lg:order-1">
              
              {/* Communication Suite */}
              <div className="space-y-12">
                <div className="group cursor-pointer" data-aos="fade-up">
                  <p className="text-[9px] font-bold text-blue-600 uppercase tracking-[0.4em] mb-4">Primary Channel</p>
                  <p className="text-2xl md:text-3xl font-serif text-slate-900 flex items-center gap-3">
                    vishakhansolution@gmail.com <ArrowUpRight size={18} className="text-slate-200 group-hover:text-blue-600 transition-all" />
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.4em] mb-6">Digital Presence</p>
                  
                  <div className="flex flex-col gap-3">
                    {/* WhatsApp */}
                    <a 
                      href="https://wa.me/91YOURNUMBER?text=Hi%20Velaura%20Pixolution%2C..." 
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-between p-5 bg-slate-50 hover:bg-[#25D366] group transition-all duration-500"
                      data-aos="fade-right" data-aos-delay="100"
                    >
                      <div className="flex items-center gap-4">
                        <svg viewBox="0 0 24 24" width="20" height="20" className="fill-slate-400 group-hover:fill-white transition-colors duration-500">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .01 5.403.007 12.04c0 2.123.554 4.197 1.606 6.03L0 24l6.117-1.605a11.803 11.803 0 005.925 1.588h.005c6.631 0 12.032-5.403 12.035-12.041a11.78 11.78 0 00-3.517-8.472z"/>
                        </svg>
                        <span className="text-[10px] font-bold tracking-widest uppercase text-slate-900 group-hover:text-white">WhatsApp</span>
                      </div>
                      <span className="text-[9px] text-slate-300 group-hover:text-white/80 transition-colors">Direct Support</span>
                    </a>

                    {/* Instagram */}
                    <a href="#" className="flex items-center justify-between p-5 bg-slate-50 hover:bg-[#E1306C] group transition-all duration-500" data-aos="fade-right" data-aos-delay="200">
                      <div className="flex items-center gap-4">
                        <Instagram size={18} className="text-slate-400 group-hover:text-white" />
                        <span className="text-[10px] font-bold tracking-widest uppercase text-slate-900 group-hover:text-white">Instagram</span>
                      </div>
                      <span className="text-[9px] text-slate-300 group-hover:text-white/80">Portfolio</span>
                    </a>

                    {/* Facebook */}
                    <a href="#" className="flex items-center justify-between p-5 bg-slate-50 hover:bg-[#1877F2] group transition-all duration-500" data-aos="fade-right" data-aos-delay="300">
                      <div className="flex items-center gap-4">
                        <Facebook size={18} className="text-slate-400 group-hover:text-white" />
                        <span className="text-[10px] font-bold tracking-widest uppercase text-slate-900 group-hover:text-white">Facebook</span>
                      </div>
                      <span className="text-[9px] text-slate-300 group-hover:text-white/80">Updates</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="pt-12 border-t border-slate-100" data-aos="fade-up">
                <div className="flex items-start gap-4">
                  <MapPin size={18} className="text-blue-600 mt-1" />
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-900 mb-2">Studio HQ</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-light italic">
                      Karur, Tamil Nadu <br /> India — 639001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* --- RIGHT: THE SUBMISSION PORTAL --- */}
            <div className="lg:col-span-8 order-1 lg:order-2" data-aos="zoom-in-up" data-aos-duration="1000">
              <div className="relative">
                {/* Floating Badge */}
                <div className="absolute -top-6 right-6 md:right-12 bg-white border border-slate-100 shadow-2xl px-4 md:px-6 py-4 flex items-center gap-4 z-20" data-aos="zoom-in" data-aos-delay="600">
                  <ShieldCheck size={16} className="text-blue-600" />
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-slate-900">Encrypted</span>
                    <span className="text-[8px] text-slate-400 uppercase tracking-widest font-medium">File Submission</span>
                  </div>
                </div>

                {/* Form Container */}
                <div className="bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] contact-form border border-slate-50" id="contact-form">
                   <ContactForm />
                </div>
              </div>

              {/* Operational Grid */}
              <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 px-6">
                {operationalZones.map((item, i) => (
                  <div key={i} className="space-y-3" data-aos="fade-up" data-aos-delay={i * 150}>
                    <div className="flex items-center gap-2">
                       <Globe size={12} className="text-blue-600 animate-pulse" />
                       <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-900">{item.region}</h5>
                    </div>
                    <p className="text-[10px] text-slate-400 leading-none">{item.status}</p>
                    <p className="text-[10px] text-blue-600 italic font-medium">{item.lead}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
     
    </div>
  );
};

export default Contact;