import React from 'react';
import { SERVICES, ServiceItem } from '../data/nacitaData';
import { useApp } from '../context/AppContext';
import { Wrench, Compass, Wind, Snowflake, ShieldCheck, Truck, PhoneCall, ArrowRight, ArrowLeft } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const { lang, openBookingForService } = useApp();
  const isAr = lang === 'ar';

  const getIcon = (name: ServiceItem['iconName']) => {
    switch (name) {
      case 'wrench':
        return <Wrench className="w-5 h-5 text-amber-500" />;
      case 'compass':
        return <Compass className="w-5 h-5 text-amber-500" />;
      case 'wind':
        return <Wind className="w-5 h-5 text-amber-500" />;
      case 'snowflake':
        return <Snowflake className="w-5 h-5 text-amber-500" />;
      case 'shieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-500" />;
      case 'truck':
        return <Truck className="w-5 h-5 text-amber-500" />;
      default:
        return <Wrench className="w-5 h-5 text-amber-500" />;
    }
  };

  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">
            {isAr ? 'خدمات ناسيتا المتكاملة' : 'Nacita Automotive Solutions'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            {isAr ? 'الخدمات' : 'Auto Services'}
          </h2>
          <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
            {isAr
              ? 'من الصيانة الدورية إلى الإصلاحات المتقدمة، فريقنا جاهز دائمًا بأحدث التقنيات وأفضل الفنيين المعتمدين.'
              : 'From periodic maintenance to advanced mechanical alignment, our certified crew is always ready.'}
          </p>
        </div>

        {/* Services Grid (3 Columns on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const isFree = service.includedFree;
            const isVan = service.highlight;

            return (
              <div
                key={service.id}
                className={`rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between border ${
                  isVan
                    ? 'dark-luxury-card text-white shadow-2xl relative overflow-hidden'
                    : isFree
                    ? 'bg-gradient-to-br from-emerald-50/90 to-emerald-100/50 border-emerald-300/80 luxury-card-glow'
                    : 'bg-white border-slate-200 luxury-card-glow hover:-translate-y-1'
                }`}
              >
                <div>
                  {/* Top Bar with Icon & Price Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-xs ${
                        isVan
                          ? 'bg-amber-400/10 border border-amber-400/20'
                          : isFree
                          ? 'bg-emerald-100 border border-emerald-300'
                          : 'bg-slate-100 border border-slate-200'
                      }`}
                    >
                      {getIcon(service.iconName)}
                    </div>

                    <div
                      className={`text-xs font-black px-3 py-1 rounded-lg ${
                        isVan
                          ? 'text-amber-300 bg-amber-400/10 border border-amber-400/20'
                          : isFree
                          ? 'text-emerald-900 bg-emerald-100 border border-emerald-200'
                          : 'text-slate-800 bg-slate-100 border border-slate-200'
                      }`}
                    >
                      {isAr ? service.priceNoteAr : service.priceNoteEn}
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-lg sm:text-xl font-black mb-2 tracking-tight ${
                      isVan ? 'text-white' : 'text-slate-950'
                    }`}
                  >
                    {isAr ? service.name : service.nameEn}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-xs sm:text-sm leading-relaxed font-normal ${
                      isVan ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {isAr ? service.descriptionAr : service.descriptionEn}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-4 border-t border-slate-200/40 flex items-center justify-between">
                  {service.actionTextAr.includes('19725') ? (
                    <div className="flex items-center gap-2 w-full justify-between">
                      <a
                        href="tel:19725"
                        className="min-h-[42px] px-2.5 flex items-center gap-1.5 text-xs font-black text-amber-600 hover:text-amber-700"
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                        <span className="font-mono text-sm">19725</span>
                      </a>
                      <button
                        onClick={() => openBookingForService(service)}
                        className="min-h-[42px] px-4 rounded-xl text-xs font-black bg-slate-950 text-white hover:bg-slate-800 active:bg-slate-900 transition-colors touch-manipulation shadow-xs"
                      >
                        {isAr ? 'حجز موعد' : 'Book Slot'}
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => openBookingForService(service)}
                      className={`w-full min-h-[44px] py-2.5 px-4 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 touch-manipulation shadow-md ${
                        isVan
                          ? 'luxury-gold-gradient hover:brightness-105 active:scale-98 text-slate-950 shadow-amber-500/20'
                          : 'bg-slate-950 hover:bg-slate-800 active:scale-98 text-white'
                      }`}
                    >
                      <span>{isAr ? service.actionTextAr : service.actionTextEn}</span>
                      <ArrowIcon className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
