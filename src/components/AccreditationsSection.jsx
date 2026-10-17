'use client';

import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';

const certificates = [
  {
    id: 'airc',
    title: 'AIRC Certified Agency',
    organization: 'American International Recruitment Council (USA)',
    code: 'AIRC/US/REC/2024/08',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    description: 'Gold standard compliance for student recruitment to accredited American colleges and universities.',
  },
  {
    id: 'british-council',
    title: 'British Council Certified Partner',
    organization: 'British Council • UK Education Advisory',
    code: 'BC/UK/AGENT/2023/114',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    description: 'Certified trained counselor for UK Tier 4/Student Route visas, CAS issuance, and British universities.',
  },
  {
    id: 'icef',
    title: 'ICEF Qualified Education Agent',
    organization: 'ICEF International (ITAC Accredited)',
    code: 'ITAC #4892 (Global Recognized)',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80',
    description: 'Global benchmark verifying high ethical standards, transparency, and authenticated advisory.',
  },
  {
    id: 'qeac',
    title: 'PIER QEAC Australia Certified',
    organization: 'International Education Association of Australia',
    code: 'QEAC #P342 (Australia High Comm.)',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    description: 'Qualified counseling status recognized by Australian High Commission and leading CRICOS providers.',
  },
  {
    id: 'enzra',
    title: 'Education New Zealand Recognized',
    organization: 'ENZRA • New Zealand Government Agency',
    code: 'ENZRA/NZ/2024/902',
    image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&w=800&q=80',
    description: 'Government certified education advisor authorized for NZ student visa processing and institutional placement.',
  },
];

export default function AccreditationsSection() {
  return (
    <section
      id="accreditations"
      className="relative py-24 sm:py-32 bg-[#0F1F16] border-t border-[#3B8F7B]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#152a1e] border border-[#a7F432]/40 text-xs text-[#a7F432] mb-3.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#a7F432]" />
            <span className="font-semibold uppercase tracking-widest text-[11px]">
              Trust &amp; Certifications
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#EAF3E7] tracking-tight">
            Accredited by <span className="text-accent-gradient font-extrabold">Global Education Bodies</span>
          </h2>
          <p className="mt-4 text-[#EAF3E7]/80 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
            Your international education journey is safeguarded by strict institutional accreditation,
            certified visa counselors, and government-recognized compliance.
          </p>
        </div>

      </div>

      {/* Smooth Continuous Horizontal Marquee */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Gradient edge fades for seamless marquee flow */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#0F1F16] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#0F1F16] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-8">
          {[...certificates, ...certificates].map((cert, index) => (
            <div
              key={`${cert.id}-${index}`}
              className="w-[320px] sm:w-[380px] shrink-0 forest-glass-card rounded-2xl p-5 border border-[#3B8F7B]/30 hover:border-[#a7F432]/60 group transition-all"
            >
              <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 bg-[#152a1e] border border-[#3B8F7B]/20">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F16] via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold bg-[#0F1F16]/95 text-[#a7F432] border border-[#a7F432]/40">
                  {cert.code}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-1.5">
                <Award className="w-4 h-4 text-[#a7F432] shrink-0" />
                <h3 className="font-serif text-base font-bold text-[#EAF3E7] group-hover:text-[#a7F432] transition-colors truncate">
                  {cert.title}
                </h3>
              </div>

              <p className="text-xs text-[#a7F432] font-medium mb-2 truncate">
                {cert.organization}
              </p>

              <p className="text-[11px] text-[#EAF3E7]/75 font-light leading-relaxed line-clamp-2">
                {cert.description}
              </p>

              <div className="mt-3 pt-3 border-t border-[#3B8F7B]/20 flex items-center justify-between text-[10px] text-[#a7F432] font-semibold uppercase tracking-wider">
                <span>Verified Certification</span>
                <span className="w-2 h-2 rounded-full bg-[#a7F432] animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Guarantee Note */}
      <div className="max-w-4xl mx-auto px-4 mt-12 text-center">
        <p className="text-xs text-[#EAF3E7]/70 font-light">
          Official member of international recruitment associations. All applications processed through accredited university partner portals.
        </p>
      </div>
    </section>
  );
}
