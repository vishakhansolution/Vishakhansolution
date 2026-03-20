import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronRight, Globe } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
            : 'bg-white py-5 lg:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex justify-between items-center">
          
          {/* --- BRAND LOGO --- */}
          <Link to="/" className="flex flex-col group relative z-[110]" onClick={() => setMobileMenuOpen(false)}>
            <span className="text-lg md:text-xl lg:text-2xl font-bold tracking-[0.3em] text-slate-900 leading-none transition-colors group-hover:text-blue-600">
              VISHAKHAN 
            </span>
            <div className="flex items-center gap-2 mt-1">
              <div className="h-px w-4 bg-blue-600"></div>
              <span className="text-[8px] lg:text-[10px] tracking-[0.5em] text-blue-600 font-black uppercase">
                SOLUTION
              </span>
            </div>
          </Link>

          {/* --- DESKTOP NAV --- */}
          <div className="hidden lg:flex items-center gap-12">
            <ul className="flex gap-10 text-[10px] font-black uppercase tracking-[0.3em]">
              {navLinks.map((link) => (
                <li key={link.to} className="relative group">
                  <NavLink 
                    to={link.to}
                    className={({ isActive }) => 
                      `transition-all duration-300 py-2 ${isActive ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'}`
                    }
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Subtle Vertical Divider */}
            <div className="h-4 w-px bg-slate-200"></div>

            <Link to="/contact#contact-form">
              <button className="text-[9px] font-black uppercase tracking-[0.2em] px-6 py-2.5 border border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-500 rounded-sm">
                Free Test Edit
              </button>
            </Link>
          </div>

          {/* --- MOBILE/TABLET TOGGLE --- */}
          <div className="lg:hidden flex items-center gap-5 relative z-[110]">
            <Link 
              to="/contact#contact-form"
              className="text-[8px] font-black uppercase tracking-widest bg-blue-600 text-white px-4 py-2 rounded-sm sm:flex hidden"
            >
              Start Trial
            </Link>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-900 hover:text-blue-600 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- FULLSCREEN MOBILE OVERLAY --- */}
      <div 
        className={`fixed inset-0 z-[105] bg-white transition-all duration-700 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="flex flex-col h-full pt-40 px-10 pb-16 max-w-lg mx-auto">
          <div className="space-y-2 mb-12">
            <span className="text-blue-600 text-[9px] font-black tracking-[0.5em] uppercase block">Navigation</span>
            <div className="h-px w-12 bg-slate-100"></div>
          </div>
          
          <ul className="flex flex-col gap-8">
            {navLinks.map((link, idx) => (
              <li key={link.to} className="overflow-hidden">
                <NavLink 
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => 
                    `text-4xl sm:text-5xl font-serif flex items-center justify-between group transition-all duration-500 ${
                      isActive ? 'text-blue-600 italic pl-4' : 'text-slate-900'
                    }`
                  }
                >
                  <span className="group-hover:italic group-hover:pl-6 transition-all duration-500">
                    {link.label}
                  </span>
                  <ChevronRight 
                    className={`transition-transform duration-500 group-hover:translate-x-2 ${mobileMenuOpen ? 'scale-100' : 'scale-0'}`} 
                    size={32} 
                    strokeWidth={1}
                  />
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mt-auto space-y-10">
            <Link 
              to="/contact#contact-form" 
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full bg-slate-900 text-white text-center py-5 font-black uppercase tracking-[0.3em] text-[10px] hover:bg-blue-600 transition-colors"
            >
              Claim Free Test Edit
            </Link>

            <div className="border-t border-slate-100 pt-8 flex justify-between items-center text-slate-400">
               <div className="flex items-center gap-2">
                 <Globe size={12} className="text-blue-600" />
                 <p className="text-[9px] tracking-[0.2em] uppercase font-black">Vishakhan • India</p>
               </div>
               <div className="flex gap-4 text-[9px] tracking-[0.2em] uppercase font-black">
                 <span>USA</span> <span>AUS</span> <span>UK</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;