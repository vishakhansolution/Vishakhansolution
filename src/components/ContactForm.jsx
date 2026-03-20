import React, { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle2, ChevronDown } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Free Test Edit (HDR/Flambient)');
  const dropdownRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const services = [
    'Free Test Edit (HDR/Flambient)',
    'Standard Real Estate Editing',
    'Day to Dusk Conversion',
    'Virtual Staging',
    'Commercial Retouching',
    'Floor Plan Redrawing',
    'Virtual Renovation',
    'Sky & Grass Replacement'
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Data to be sent to your EmailJS Template
    const templateParams = {
      name: formData.name,
      email: formData.email,
      service: selectedService,
    };

    try {
      // Direct Frontend Submission using Environment Variables
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitted(true);
        Swal.fire({
          icon: "success",
          title: "Inquiry Received",
          text: "Vishakhan Solution will contact you within 1 hour.",
          confirmButtonColor: "#0f172a", // Match your slate-900 brand
        });
      }
    } catch (error) {
      console.error("Transmission Error:", error);
      Swal.fire({
        icon: "error",
        title: "Submission Error",
        text: "System uplink failed. Please email us directly at info@vishakhan.com",
        confirmButtonColor: "#ef4444",
      });
    } finally {
      setLoading(false);
    }
  };

  // Success State View
  if (submitted) {
    return (
      <div className="bg-slate-900 p-8 md:p-12 text-center text-white rounded-sm shadow-2xl animate-in fade-in zoom-in duration-700">
        <div className="flex justify-center mb-6">
          <CheckCircle2 size={60} className="text-blue-500" />
        </div>
        <h3 className="text-2xl md:text-3xl font-serif mb-4 italic leading-tight tracking-tight">Transmission Successful.</h3>
        <p className="text-slate-400 max-w-xs mx-auto text-xs md:text-sm leading-relaxed font-light">
          Your project brief is being reviewed by our senior editors. Expect a response at <span className="text-white font-medium">{formData.email}</span> within 1 hour.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-10 text-[10px] font-black tracking-[0.5em] uppercase border-b border-blue-500 pb-1 hover:text-blue-400 transition-all"
        >
          New Project Brief
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-50 relative overflow-hidden rounded-sm">
      {/* Brand Design Accent */}
      <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600"></div>

      <div className="mb-10 md:mb-14">
        <h3 className="text-2xl md:text-4xl font-serif text-slate-900 mb-2 tracking-tighter">Project Inquiry</h3>
        <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-blue-600"></div>
            <p className="text-[9px] md:text-[10px] text-blue-600 uppercase tracking-[0.4em] font-black">Secure Data Uplink</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 md:space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* Name Field */}
          <div className="space-y-2 md:space-y-4">
            <label className="text-[9px] font-black tracking-[0.3em] uppercase text-slate-400 ml-1">Full Name *</label>
            <input 
              required
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full bg-slate-50 border-b border-transparent p-4 text-sm focus:bg-white focus:border-blue-600 outline-none transition-all duration-500 rounded-sm font-medium text-slate-800"
              placeholder="e.g. Alexander Vance"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2 md:space-y-4">
            <label className="text-[9px] font-black tracking-[0.3em] uppercase text-slate-400 ml-1">Corporate Email *</label>
            <input 
              required
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-slate-50 border-b border-transparent p-4 text-sm focus:bg-white focus:border-blue-600 outline-none transition-all duration-500 rounded-sm font-medium text-slate-800"
              placeholder="alex@studio.com"
            />
          </div>
        </div>

        {/* --- CUSTOM SELECT COMPONENT --- */}
        <div className="space-y-2 md:space-y-4" ref={dropdownRef}>
          <label className="text-[9px] font-black tracking-[0.3em] uppercase text-slate-400 ml-1">Service Classification</label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={`w-full bg-slate-50 p-4 text-sm text-left flex justify-between items-center transition-all duration-500 border-b border-transparent ${isOpen ? 'bg-white border-blue-600 shadow-xl' : ''}`}
            >
              <span className={`font-bold truncate pr-4 ${isOpen ? 'text-blue-600' : 'text-slate-900'}`}>
                {selectedService}
              </span>
              <ChevronDown size={16} className={`text-blue-600 shrink-0 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute z-50 w-full mt-2 bg-white shadow-2xl border border-slate-100 py-3 animate-in slide-in-from-top-2 duration-300">
                <div className="max-h-[220px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-slate-50">
                  {services.map((service) => (
                    <div
                      key={service}
                      onClick={() => {
                        setSelectedService(service);
                        setIsOpen(false);
                      }}
                      className="px-6 py-4 text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-500 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-all border-l-2 border-transparent hover:border-blue-600"
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Action Button */}
        <button 
          type="submit"
          disabled={loading}
          className="w-full bg-slate-900 text-white py-5 md:py-7 text-[10px] md:text-[11px] font-black tracking-[0.5em] uppercase flex items-center justify-center gap-5 hover:bg-blue-600 transition-all duration-700 shadow-2xl group disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden relative"
        >
          <span className="relative z-10">{loading ? "ESTABLISHING UPLINK..." : "TRANSMIT PROJECT BRIEF"}</span>
          {!loading && <Send size={16} className="relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />}
          
          {/* Subtle button loading shimmer */}
          {loading && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;