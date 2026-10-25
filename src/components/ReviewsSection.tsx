import React, { useState } from 'react';
import { CUSTOMER_REVIEWS, ReviewItem } from '../data/nacitaData';
import { useApp } from '../context/AppContext';
import { Star, MessageSquareQuote, CheckCircle, ChevronRight, ChevronLeft } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const { lang } = useApp();
  const isAr = lang === 'ar';

  const [activeTab, setActiveTab] = useState<'all' | 'sailun' | 'inspection' | 'branches'>('all');

  const filteredReviews = CUSTOMER_REVIEWS.filter((rev) => {
    if (activeTab === 'sailun') {
      return rev.commentAr.includes('Sailun') || rev.commentAr.includes('إطارات');
    }
    if (activeTab === 'inspection') {
      return rev.commentAr.includes('فحص') || rev.commentAr.includes('أوبر');
    }
    if (activeTab === 'branches') {
      return rev.branch || rev.commentAr.includes('العبور') || rev.commentAr.includes('فرع');
    }
    return true;
  });

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header & Google Score Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-black text-amber-800 uppercase tracking-wider mb-2">
              {isAr ? 'تجارب حقيقية وموثقة' : 'Verified Driver Experiences'}
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
              {isAr ? 'آراء عملائنا' : 'Customer Reviews'}
            </h2>
            <p className="mt-2 text-slate-600 text-xs sm:text-sm max-w-xl font-medium">
              {isAr
                ? 'تجارب حقيقية من عملاء حقيقيين في جميع أنحاء مصر، موثقة على خرائط Google.'
                : 'Real feedback from drivers across Cairo, Alexandria, and all of Egypt.'}
            </p>
          </div>

          {/* Google Maps Aggregate Score Box (Luxury Titanium Tile) */}
          <div className="bg-white border border-slate-200 rounded-3xl p-4 sm:p-5 flex items-center gap-4 self-start md:self-auto shadow-md">
            <div className="w-13 h-13 rounded-2xl luxury-gold-gradient text-slate-950 font-black text-2xl flex items-center justify-center tabular-nums shadow-sm">
              4.1
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < 4 ? 'fill-amber-400 text-amber-400' : 'text-amber-200'}`}
                  />
                ))}
              </div>
              <div className="text-xs sm:text-sm font-black text-slate-950">
                {isAr ? 'تقييم ٤.١ من ٥' : '4.1 out of 5 Rating'}
              </div>
              <div className="text-[11px] text-slate-600 font-medium">
                {isAr ? 'بناءً على أكثر من ٣٠٠٠ مراجعة على خرائط Google' : 'Based on 3,000+ reviews on Google Maps'}
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs for Reviews - Swipeable on Mobile */}
        <div className="-mx-4 px-4 sm:mx-0 sm:px-0 flex items-center gap-1.5 mb-6 sm:mb-8 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveTab('all')}
            className={`min-h-[38px] px-4 py-2 text-xs font-black rounded-xl transition-all whitespace-nowrap touch-manipulation ${
              activeTab === 'all'
                ? 'bg-slate-950 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-100'
            }`}
          >
            {isAr ? 'جميع التقييمات (١٠)' : 'All Reviews (10)'}
          </button>
          <button
            onClick={() => setActiveTab('sailun')}
            className={`min-h-[38px] px-4 py-2 text-xs font-black rounded-xl transition-all whitespace-nowrap touch-manipulation ${
              activeTab === 'sailun'
                ? 'bg-slate-950 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-100'
            }`}
          >
            {isAr ? 'إطارات Sailun' : 'Sailun Tires'}
          </button>
          <button
            onClick={() => setActiveTab('inspection')}
            className={`min-h-[38px] px-4 py-2 text-xs font-black rounded-xl transition-all whitespace-nowrap touch-manipulation ${
              activeTab === 'inspection'
                ? 'bg-slate-950 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-100'
            }`}
          >
            {isAr ? 'الفحص وفحص أوبر' : 'Inspection & Uber'}
          </button>
          <button
            onClick={() => setActiveTab('branches')}
            className={`min-h-[38px] px-4 py-2 text-xs font-black rounded-xl transition-all whitespace-nowrap touch-manipulation ${
              activeTab === 'branches'
                ? 'bg-slate-950 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-100'
            }`}
          >
            {isAr ? 'إشادة بالفروع والمهندسين' : 'Branch Staff'}
          </button>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 luxury-card-glow hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Stars and Attribution */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
                    {isAr ? rev.source : rev.sourceEn}
                  </span>
                </div>

                {/* Comment Body */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-5 font-medium">
                  "{isAr ? rev.commentAr : rev.commentEn}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 text-amber-400 font-black text-xs flex items-center justify-center shrink-0 border border-slate-800 shadow-xs">
                    {rev.initials}
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-black text-slate-950 leading-none">
                      {rev.name}
                    </div>
                    {rev.branch && (
                      <div className="text-[11px] text-amber-700 font-bold mt-1">
                        {rev.branch}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-emerald-800 font-extrabold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{isAr ? 'عميل موثق' : 'Verified'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
