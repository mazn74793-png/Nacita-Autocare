import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Users, MapPin, Award, Search, PhoneCall, Truck, ArrowRight, ArrowLeft } from 'lucide-react';

interface HeroProps {
  onFilterTires: (width: number | null, aspect: number | null, rim: number | null) => void;
}

export const Hero: React.FC<HeroProps> = ({ onFilterTires }) => {
  const { lang, setIsMobileBookingOpen, setIsBranchModalOpen } = useApp();
  const isAr = lang === 'ar';

  const [selectedWidth, setSelectedWidth] = useState<string>('');
  const [selectedAspect, setSelectedAspect] = useState<string>('');
  const [selectedRim, setSelectedRim] = useState<string>('');

  const handleSearchTires = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterTires(
      selectedWidth ? Number(selectedWidth) : null,
      selectedAspect ? Number(selectedAspect) : null,
      selectedRim ? Number(selectedRim) : null
    );
    const element = document.getElementById('tires');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <section className="relative overflow-hidden bg-[#090d16] text-white pt-6 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 border-b border-white/10">
      {/* Background Ambient Glow with Luxury Warm Gold & Obsidian Radial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(245,158,11,0.15),rgba(9,13,22,0.95),#090d16)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Proposition & Quick Tire Matcher */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            {/* Trust Kicker with High Contrast Champagne Accents */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-wide text-amber-300">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>{isAr ? 'وكيل معتمد لأفضل العلامات التجارية' : 'Authorized Master Tire Dealer'}</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span className="text-slate-200">{isAr ? 'Sailun Official Partner' : 'Sailun Official Partner'}</span>
            </div>

            {/* Hero Display Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-snug sm:leading-[1.15]">
              {isAr ? (
                <>
                  خدمات سيارات متكاملة <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                    في مراكزنا أو حتى باب منزلك
                  </span>
                </>
              ) : (
                <>
                  Premium Automotive Care <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                    At Our Centers or Your Doorstep
                  </span>
                </>
              )}
            </h1>

            {/* Value Proposition Description */}
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed max-w-xl font-normal">
              {isAr
                ? 'ناسيتا أوتوكير رائدة خدمات الإطارات، الترصيص بالليزر، ضبط الزوايا 3D، وشحن التكييف مع ورشة متنقلة مجهزة بأحدث المعدات الألمانية تصل إليك أينما كنت.'
                : 'Nacita Autocare delivers cutting-edge tire fitment, laser balancing, 3D computerized alignment, and AC recharge with fully equipped German mobile workshops serving Greater Cairo and Alexandria.'}
            </p>

            {/* Quick Interactive Tire Size Finder Widget (Dark Luxury Card) */}
            <div className="dark-luxury-card rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between mb-3.5">
                <span className="text-xs font-black uppercase tracking-wider text-slate-100 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center">
                    <Search className="w-3.5 h-3.5" />
                  </div>
                  <span>{isAr ? 'ابحث عن مقاس إطار سيارتك' : 'Find Tire Dimensions'}</span>
                </span>
                <span className="text-[11px] font-mono text-amber-400/80 bg-amber-400/10 px-2 py-0.5 rounded-md">
                  {isAr ? 'مثال: 185 / 65 R 15' : 'e.g. 185 / 65 R 15'}
                </span>
              </div>

              <form onSubmit={handleSearchTires} className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-2.5">
                <div>
                  <label className="block text-[10px] sm:text-[11px] text-slate-300 mb-1 font-bold">
                    {isAr ? 'العرض (Width)' : 'Width'}
                  </label>
                  <select
                    value={selectedWidth}
                    onChange={(e) => setSelectedWidth(e.target.value)}
                    className="w-full bg-[#0d131f] border border-white/15 rounded-xl px-2.5 py-2.5 text-xs font-bold text-white focus:outline-hidden focus:border-amber-400 transition-colors"
                  >
                    <option value="">{isAr ? 'الكل' : 'All'}</option>
                    <option value="175">175</option>
                    <option value="185">185</option>
                    <option value="195">195</option>
                    <option value="205">205</option>
                    <option value="215">215</option>
                    <option value="225">225</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] text-slate-300 mb-1 font-bold">
                    {isAr ? 'الارتفاع (Aspect)' : 'Aspect'}
                  </label>
                  <select
                    value={selectedAspect}
                    onChange={(e) => setSelectedAspect(e.target.value)}
                    className="w-full bg-[#0d131f] border border-white/15 rounded-xl px-2.5 py-2.5 text-xs font-bold text-white focus:outline-hidden focus:border-amber-400 transition-colors"
                  >
                    <option value="">{isAr ? 'الكل' : 'All'}</option>
                    <option value="45">45</option>
                    <option value="55">55</option>
                    <option value="60">60</option>
                    <option value="65">65</option>
                    <option value="70">70</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] text-slate-300 mb-1 font-bold">
                    {isAr ? 'الجنط (Rim)' : 'Rim'}
                  </label>
                  <select
                    value={selectedRim}
                    onChange={(e) => setSelectedRim(e.target.value)}
                    className="w-full bg-[#0d131f] border border-white/15 rounded-xl px-2.5 py-2.5 text-xs font-bold text-white focus:outline-hidden focus:border-amber-400 transition-colors"
                  >
                    <option value="">{isAr ? 'الكل' : 'All'}</option>
                    <option value="13">R13</option>
                    <option value="14">R14</option>
                    <option value="15">R15</option>
                    <option value="16">R16</option>
                    <option value="17">R17</option>
                    <option value="18">R18</option>
                  </select>
                </div>

                <div className="flex items-end col-span-3 sm:col-span-1 mt-1 sm:mt-0">
                  <button
                    type="submit"
                    className="w-full min-h-[44px] flex items-center justify-center gap-1.5 py-2.5 px-3 luxury-gold-gradient hover:brightness-105 active:scale-98 text-slate-950 font-black text-xs rounded-xl transition-all shadow-md shadow-amber-500/20"
                  >
                    <Search className="w-4 h-4 text-slate-950" />
                    <span>{isAr ? 'عرض الإطارات' : 'Search Tires'}</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Quick CTAs on Mobile / Desktop */}
            <div className="flex items-center gap-2.5 sm:gap-3.5 pt-1">
              <button
                onClick={() => setIsMobileBookingOpen(true)}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 min-h-[44px] px-5 py-3 text-xs sm:text-sm font-black text-slate-950 luxury-gold-gradient hover:brightness-105 active:scale-98 rounded-xl transition-all shadow-lg shadow-amber-500/20"
              >
                <Truck className="w-4 h-4 text-slate-950" />
                <span>{isAr ? 'اطلب الورشة المتنقلة' : 'Request Mobile Van'}</span>
                <ArrowIcon className="w-4 h-4 text-slate-950" />
              </button>

              <button
                onClick={() => setIsBranchModalOpen(true)}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 min-h-[44px] px-4 sm:px-5 py-3 text-xs sm:text-sm font-bold text-white bg-slate-900/90 hover:bg-slate-800 border border-white/15 rounded-xl transition-colors hover:border-amber-400/40"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>{isAr ? 'مراكز الخدمة' : 'Centers'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Anchor */}
          <div className="lg:col-span-5 relative mt-2 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src="/src/assets/images/hero_nacita_service_bay_1792957344582.jpg"
                alt="Nacita Autocare modern service bay"
                className="w-full h-56 sm:h-80 lg:h-[410px] object-cover transition-transform duration-700 group-hover:scale-103"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/30 to-transparent" />
              
              {/* Overlay Quality Badge */}
              <div className="absolute bottom-3 left-3 right-3 p-3 sm:p-4 bg-[#0c121d]/90 border border-white/15 backdrop-blur-md rounded-xl flex items-center justify-between text-xs">
                <div>
                  <div className="font-extrabold text-white flex items-center gap-1.5 text-xs sm:text-sm">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>{isAr ? 'فحص ٣٢ نقطة مجاني' : 'Free 32-Point Check'}</span>
                  </div>
                  <p className="text-slate-300 text-[10px] sm:text-xs mt-0.5">
                    {isAr ? 'معتمد لأوبر وللسيارات الخاصة مع كل خدمة' : 'Certified for Uber & private cars'}
                  </p>
                </div>
                <span className="text-amber-400 font-black tabular-nums text-xs sm:text-sm px-2.5 py-1 bg-amber-400/10 border border-amber-400/20 rounded-lg">100% Free</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-KPI Metric Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex items-center sm:items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-400/30 transition-colors">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/20 font-black text-xs sm:text-base">
              ١٥+
            </div>
            <div>
              <div className="text-sm sm:text-xl font-black text-white tabular-nums tracking-tight">
                {isAr ? '١٥+ عاماً' : '15+ Years'}
              </div>
              <div className="text-[11px] text-slate-300 mt-0.5 font-medium">
                {isAr ? 'سنوات التميز والريادة' : 'Years of Excellence'}
              </div>
            </div>
          </div>

          <div className="flex items-center sm:items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-400/30 transition-colors">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/20 font-black text-xs sm:text-base">
              ٥٠K+
            </div>
            <div>
              <div className="text-sm sm:text-xl font-black text-white tabular-nums tracking-tight">
                {isAr ? '٥٠K+ سائق' : '50K+ Drivers'}
              </div>
              <div className="text-[11px] text-slate-300 mt-0.5 font-medium">
                {isAr ? 'عملاء سعداء وموثوقون' : 'Happy Customers'}
              </div>
            </div>
          </div>

          <div className="flex items-center sm:items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-400/30 transition-colors">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/20 font-black text-xs sm:text-base">
              ١٥+
            </div>
            <div>
              <div className="text-sm sm:text-xl font-black text-white tabular-nums tracking-tight">
                {isAr ? '١٥+ مركز' : '15+ Centers'}
              </div>
              <div className="text-[11px] text-slate-300 mt-0.5 font-medium">
                {isAr ? 'بجميع أنحاء مصر' : 'Across Egypt'}
              </div>
            </div>
          </div>

          <div className="flex items-center sm:items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-400/30 transition-colors">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/20 font-bold text-xs sm:text-base">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm sm:text-xl font-black text-white truncate tracking-tight">
                {isAr ? 'وكيل معتمد' : 'Authorized'}
              </div>
              <div className="text-[11px] text-slate-300 mt-0.5 font-medium">
                {isAr ? 'ضمان رسمي عامين' : '2-Yr Official Warranty'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
