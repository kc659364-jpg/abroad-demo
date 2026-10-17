'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  PhoneCall,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Destinations', href: '#destinations' },
    { label: 'Why Demo', href: '#why-us' },
    { label: 'Mentors', href: '#mentors' },
    { label: 'Accreditations', href: '#accreditations' },
    { label: 'Campus & Stories', href: '/gallery' },
    { label: 'Inquiry', href: '#inquiry' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1C2541]/95 backdrop-blur-xl border-b border-[#E6AF2E]/20 py-3 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#1C2541] to-[#0B132B] border border-[#E6AF2E]/50 flex items-center justify-center text-[#E6AF2E] shadow-[0_0_20px_rgba(230,175,46,0.25)] group-hover:scale-105 group-hover:border-[#E6AF2E] transition-all">
              <GraduationCap className="w-6 h-6 text-[#E6AF2E]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-[#F4F6F8] group-hover:text-[#E6AF2E] transition-colors flex items-center gap-1.5">
                DEMO
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-[#E6AF2E] font-semibold -mt-1">
                Study Abroad • Global Careers
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-medium uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#F4F6F8]/80 hover:text-[#E6AF2E] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E6AF2E] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Hotline & Free Assessment CTA */}
          <div className="hidden sm:flex items-center space-x-5">
            <a
              href="tel:+919825012345"
              className="hidden xl:flex items-center gap-2 text-xs text-[#F4F6F8]/90 hover:text-[#E6AF2E] transition-colors font-medium"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#E6AF2E]" />
              <span>+91 98250 12345</span>
            </a>

            <a
              href="#inquiry"
              className="px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold bg-[#E6AF2E] text-[#0B132B] shadow-[0_0_20px_rgba(230,175,46,0.35)] hover:shadow-[0_0_30px_rgba(230,175,46,0.65)] hover:scale-105 transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Free Assessment</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="#inquiry"
              className="px-3.5 py-1.5 rounded-full text-[11px] font-bold bg-[#E6AF2E] text-[#0B132B]"
            >
              Apply Now
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#F4F6F8] hover:text-[#E6AF2E] border border-[#E6AF2E]/30 bg-[#1C2541]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1C2541]/98 border-b border-[#E6AF2E]/25 px-6 pt-5 pb-8 backdrop-blur-2xl transition-all">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium uppercase tracking-wider text-[#F4F6F8] hover:text-[#E6AF2E] py-2 border-b border-[#0B132B]/50 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-[#E6AF2E]" />
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="tel:+919825012345"
                className="flex items-center justify-center gap-2 py-3 rounded-xl border border-[#E6AF2E]/30 text-xs text-[#E6AF2E] font-semibold"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Helpline: +91 98250 12345</span>
              </a>
              <a
                href="#inquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl text-xs uppercase tracking-wider font-bold bg-[#E6AF2E] text-[#0B132B]"
              >
                Book Free Profile Evaluation
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
