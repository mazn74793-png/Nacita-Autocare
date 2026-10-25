import React from 'react';
import { TRUST_PILLARS } from '../data/nacitaData';
import { useApp } from '../context/AppContext';
import { ShieldCheck, UserCheck, Tag, Zap } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const { lang } = useApp();
  const isAr = lang === 'ar';

  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <ShieldCheck className="w-5 h-5 text-amber-500" />;
      case 1:
        return <UserCheck className="w-5 h-5 text-amber-500" />;
      case 2:
        return <Tag className="w-5 h-5 text-amber-500" />;
      case 3:
        return <Zap className="w-5 h-5 text-amber-500" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-black text-amber-800 uppercase tracking-wider mb-2.5">
            {isAr ? 'الثقة والاعتمادية' : 'Trust & Reliability'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            {isAr ? 'لماذا يثق أكثر من ٥٠,٠٠٠ سائق في ناسيتا' : 'Why 50,000+ Drivers Trust Nacita'}
          </h2>
          <p className="mt-2.5 text-slate-600 text-xs sm:text-sm font-medium">
            {isAr
              ? 'معايير جودة صارمة وفحص احترافي يضمن سلامتك وأداء سيارتك على كل كيلومتر.'
              : 'Strict safety standards, genuine parts guarantee, and certified technicians.'}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 luxury-card-glow hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-5 text-amber-600">
                {getPillarIcon(idx)}
              </div>
              <h3 className="text-base sm:text-lg font-black text-slate-950 mb-2">
                {isAr ? pillar.titleAr : pillar.titleEn}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {isAr ? pillar.descAr : pillar.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
