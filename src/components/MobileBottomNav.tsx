import React from 'react';
import { useApp } from '../context/AppContext';
import { Home, Disc, Truck, MapPin, ShoppingBag, PhoneCall } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const {
    lang,
    totalItemCount,
    setIsCartOpen,
    setIsMobileBookingOpen,
    setIsBranchModalOpen
  } = useApp();

  const isAr = lang === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTires = () => {
    const el = document.getElementById('tires');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200/90 shadow-[0_-8px_25px_rgba(0,0,0,0.08)] pb-[env(safe-area-inset-bottom,0px)]"
      aria-label="Mobile Navigation Bar"
    >
      <div className="grid grid-cols-5 items-center h-16 max-w-lg mx-auto px-2">
        {/* Tab 1: Home */}
        <button
          onClick={scrollToTop}
          className="flex flex-col items-center justify-center h-full text-slate-700 hover:text-slate-950 active:scale-95 transition-all touch-manipulation"
        >
          <Home className="w-5 h-5 text-slate-700" />
          <span className="text-[10px] font-bold tracking-tight mt-1">
            {isAr ? 'الرئيسية' : 'Home'}
          </span>
        </button>

        {/* Tab 2: Tires */}
        <button
          onClick={scrollToTires}
          className="flex flex-col items-center justify-center h-full text-slate-700 hover:text-slate-950 active:scale-95 transition-all touch-manipulation"
        >
          <Disc className="w-5 h-5 text-slate-700" />
          <span className="text-[10px] font-bold tracking-tight mt-1">
            {isAr ? 'الإطارات' : 'Tires'}
          </span>
        </button>

        {/* Tab 3: Mobile Van (Central Highlighted Tab) */}
        <button
          onClick={() => setIsMobileBookingOpen(true)}
          className="relative flex flex-col items-center justify-center h-full -mt-2 group active:scale-95 transition-all touch-manipulation"
        >
          <div className="w-12 h-12 rounded-2xl luxury-gold-gradient text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/25 border-2 border-white group-active:brightness-95">
            <Truck className="w-5 h-5 text-slate-950" />
          </div>
          <span className="text-[10px] font-black text-slate-950 tracking-tight mt-0.5">
            {isAr ? 'الورشة' : 'Van'}
          </span>
        </button>

        {/* Tab 4: Branches */}
        <button
          onClick={() => setIsBranchModalOpen(true)}
          className="flex flex-col items-center justify-center h-full text-slate-700 hover:text-slate-950 active:scale-95 transition-all touch-manipulation"
        >
          <MapPin className="w-5 h-5 text-slate-700" />
          <span className="text-[10px] font-bold tracking-tight mt-1">
            {isAr ? 'الفروع' : 'Branches'}
          </span>
        </button>

        {/* Tab 5: Cart */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative flex flex-col items-center justify-center h-full text-slate-700 hover:text-slate-950 active:scale-95 transition-all touch-manipulation"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 text-slate-700" />
            {totalItemCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center tabular-nums shadow-xs border-2 border-white">
                {totalItemCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-bold tracking-tight mt-1">
            {isAr ? 'السلة' : 'Cart'}
          </span>
        </button>
      </div>
    </nav>
  );
};
