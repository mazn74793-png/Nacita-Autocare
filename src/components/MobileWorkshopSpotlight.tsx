import React from 'react';
import { useApp } from '../context/AppContext';
import { Truck, CheckCircle2, Clock, MapPin, Wrench, Shield, ArrowRight, ArrowLeft, PhoneCall } from 'lucide-react';

export const MobileWorkshopSpotlight: React.FC = () => {
  const { lang, setIsMobileBookingOpen } = useApp();
  const isAr = lang === 'ar';

  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const vanBenefits = [
    {
      titleAr: 'تركيب وترصيص الإطارات فورياً',
      titleEn: 'On-Site Tire Fitting & Laser Balancing',
      descAr: 'معدات إيطالية وألمانية متنقلة متطورة تركّب وترصّص الإطارات بدقة متناهية أمام منزلك.',
      descEn: 'State-of-the-art European mobile mount & balance equipment operating right at your curb.'
    },
    {
      titleAr: 'تغيير بطاريات وزيوت',
      titleEn: 'Battery & Lubricant Service',
      descAr: 'فحص جهد الدينامو وتبديل البطاريات وتغيير زيوت المحرك المعتمدة بدون الحاجة لزيارة الورشة.',
      descEn: 'Alternator diagnostic testing, brand new battery replacements, and certified synthetic oil change.'
    },
    {
      titleAr: 'تغطية واسعة وسرعة وصول',
      titleEn: 'Expansive Urban Coverage',
      descAr: 'أسطول متنقل يغطي القاهرة الكبرى، التجمع، الشيخ زايد، 6 أكتوبر، والإسكندرية.',
      descEn: 'Dedicated fleet serving New Cairo, Sheikh Zayed, 6th October, and Alexandria.'
    }
  ];

  return (
    <section id="mobile-workshop" className="py-16 sm:py-24 bg-[#090d16] text-white overflow-hidden relative border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Visual Column: Modern Mobile Van Image */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/src/assets/images/nacita_mobile_van_1792957345833.jpg"
                alt="Nacita Mobile Workshop service van equipped with tire changer and balancing machine"
                className="w-full h-72 sm:h-96 lg:h-[440px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0c121d]/90 border border-white/15 rounded-2xl backdrop-blur-md flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-bold text-slate-200">
                    {isAr ? 'أسطول الورش المتنقلة متاح الآن للحجز الفوري' : 'Mobile Van Fleet Active & Ready'}
                  </span>
                </div>
                <span className="text-amber-400 font-mono font-bold text-sm">19725</span>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-bold text-amber-300 uppercase tracking-wider mb-3">
                <Truck className="w-3.5 h-3.5 text-amber-400" />
                <span>{isAr ? 'الورشة المتنقلة' : 'Mobile Workshop'}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                {isAr ? 'خدمة السيارات حتى باب منزلك' : 'Professional Car Care at Your Doorstep'}
              </h2>
              <p className="mt-3 text-slate-300 text-xs sm:text-base leading-relaxed font-normal">
                {isAr
                  ? 'خدمات سيارات احترافية متنقلة تصل إليك أينما كنت، من تركيب الإطارات وترصيص العجلات إلى تغيير الزيوت والعناية الكاملة بالسيارة دون أن تترك مكانك.'
                  : 'Professional mobile automotive care that comes to you wherever you are—from tire fitment and wheel balancing to oil service and full diagnostic care.'}
              </p>
            </div>

            {/* Benefit Items */}
            <div className="space-y-4 pt-2">
              {vanBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white">
                      {isAr ? benefit.titleAr : benefit.titleEn}
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      {isAr ? benefit.descAr : benefit.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <button
                onClick={() => setIsMobileBookingOpen(true)}
                className="min-h-[46px] px-6 py-3.5 luxury-gold-gradient hover:brightness-105 active:scale-98 text-slate-950 font-black text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 touch-manipulation"
              >
                <Truck className="w-4 h-4 text-slate-950" />
                <span>{isAr ? 'اطلب وحدة متنقلة الآن' : 'Book Mobile Van Now'}</span>
                <ArrowIcon className="w-4 h-4 text-slate-950" />
              </button>

              <a
                href="tel:19725"
                className="min-h-[46px] px-5 py-3.5 bg-slate-900/90 hover:bg-slate-800 active:bg-slate-950 text-slate-200 text-xs sm:text-sm font-bold rounded-xl border border-white/15 transition-colors flex items-center justify-center gap-2 touch-manipulation hover:border-amber-400/40"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>{isAr ? 'طلب هاتفي: 19725' : 'Call 19725 for Dispatch'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
