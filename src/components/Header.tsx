import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ShoppingBag, PhoneCall, MapPin, Truck, Menu, X, Globe } from 'lucide-react';

export const Header: React.FC = () => {
  const { lang, setLang, cartTotal, totalItemCount, setIsCartOpen, setIsMobileBookingOpen, setIsBranchModalOpen } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isAr = lang === 'ar';

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-colors">
      {/* Luxury Obsidian Notice Bar */}
      <div className="bg-[#090d16] text-slate-300 text-[11px] sm:text-xs py-1.5 px-3 sm:px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a
              href="tel:19725"
              className="flex items-center gap-1.5 font-bold text-amber-400 hover:text-amber-300 transition-colors py-0.5 group"
            >
              <div className="w-5 h-5 rounded-full bg-amber-400/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-400/20">
                <PhoneCall className="w-3 h-3" />
              </div>
              <span className="tabular-nums tracking-wider font-mono font-bold text-xs sm:text-sm text-amber-400">19725</span>
              <span className="text-slate-400 font-normal text-[11px] sm:text-xs mr-1">
                {isAr ? 'الخط الساخن الموحد' : 'Unified Hotline'}
              </span>
            </a>
          </div>
          <div className="flex items-center gap-3 sm:gap-5 text-slate-300 text-[11px] sm:text-xs font-medium">
            <span className="truncate max-w-[170px] sm:max-w-none text-slate-300 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
              {isAr ? 'وكيل معتمد لإطارات Sailun الرسمية' : 'Authorized Sailun Dealer'}
            </span>
            <span aria-hidden="true" className="hidden sm:inline text-slate-600">·</span>
            <span className="hidden sm:inline text-slate-300">
              {isAr ? 'فحص ٣٢ نقطة مجاني مع كل خدمة' : 'Free 32-Pt Inspection with Every Service'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Top Bar adhering to 3-Zone Contract */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a href="#" className="flex items-center gap-2.5 shrink-0 group">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 flex items-center justify-center text-amber-400 font-black text-lg shadow-md border border-slate-800 group-hover:border-amber-400/40 transition-colors">
            N
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-black tracking-tight text-slate-950 uppercase leading-none">
              NACITA
            </span>
            <span className="text-[9px] sm:text-[10px] font-bold text-amber-600 uppercase tracking-widest leading-none mt-0.5">
              AUTOCARE
            </span>
          </div>
        </a>

        {/* Zone 2: 4-5 Clean Single-Line Nav Links for Desktop */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
          <a
            href="#tires"
            className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 hover:underline decoration-amber-400 decoration-2 underline-offset-8"
          >
            {isAr ? 'إطارات السيارات' : 'Tires Catalog'}
          </a>
          <a
            href="#services"
            className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 hover:underline decoration-amber-400 decoration-2 underline-offset-8"
          >
            {isAr ? 'الخدمات والصيانة' : 'Auto Services'}
          </a>
          <a
            href="#mobile-workshop"
            className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 hover:underline decoration-amber-400 decoration-2 underline-offset-8"
          >
            {isAr ? 'الورشة المتنقلة' : 'Mobile Workshop'}
          </a>
          <button
            onClick={() => setIsBranchModalOpen(true)}
            className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer hover:underline decoration-amber-400 decoration-2 underline-offset-8"
          >
            {isAr ? '١٥+ مركز خدمة' : '15+ Service Centers'}
          </button>
          <a
            href="#reviews"
            className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 hover:underline decoration-amber-400 decoration-2 underline-offset-8"
          >
            {isAr ? 'آراء العملاء' : 'Customer Reviews'}
          </a>
        </nav>

        {/* Zone 3: Functional Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Language Switcher */}
          <button
            onClick={() => setLang(isAr ? 'en' : 'ar')}
            className="min-h-[40px] px-2.5 sm:px-3 py-1.5 text-xs font-bold text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-xl transition-colors flex items-center gap-1.5 border border-slate-200"
            title={isAr ? 'Switch to English' : 'التحويل إلى العربية'}
          >
            <Globe className="w-3.5 h-3.5 text-slate-600" />
            <span className="uppercase text-[11px] sm:text-xs font-extrabold">{isAr ? 'English' : 'عربي'}</span>
          </button>

          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="min-h-[40px] min-w-[40px] px-3 py-2 text-slate-800 hover:text-slate-950 hover:bg-slate-100 rounded-xl transition-colors relative flex items-center justify-center gap-2 border border-slate-200"
            aria-label={isAr ? 'سلة المشتريات' : 'Shopping Cart'}
          >
            <ShoppingBag className="w-4 h-4 text-slate-700" />
            {totalItemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-xs tabular-nums border-2 border-white">
                {totalItemCount}
              </span>
            )}
            <span className="hidden xl:inline text-xs font-bold tabular-nums text-slate-900">
              {cartTotal > 0 ? `${cartTotal.toLocaleString()} LE` : ''}
            </span>
          </button>

          {/* Primary Action Button (Desktop Only) */}
          <button
            onClick={() => setIsMobileBookingOpen(true)}
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 text-xs font-black text-slate-950 luxury-gold-gradient hover:brightness-105 active:scale-98 rounded-xl shadow-md shadow-amber-500/15 transition-all whitespace-nowrap shrink-0"
          >
            <Truck className="w-3.5 h-3.5" />
            <span>{isAr ? 'اطلب ورشة متنقلة' : 'Book Mobile Van'}</span>
          </button>

          {/* Direct call button on mobile phones */}
          <a
            href="tel:19725"
            className="sm:hidden min-h-[40px] min-w-[40px] flex items-center justify-center luxury-gold-gradient text-slate-950 rounded-xl shadow-xs active:scale-95 font-black text-xs px-3 gap-1"
            title="اتصل بـ 19725"
          >
            <PhoneCall className="w-3.5 h-3.5 text-slate-950" />
            <span className="font-mono text-xs font-black">19725</span>
          </a>
        </div>
      </div>
    </header>
  );
};
