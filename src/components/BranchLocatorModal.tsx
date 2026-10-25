import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SERVICE_CENTERS, ServiceCenter } from '../data/nacitaData';
import { X, MapPin, PhoneCall, Clock, Check, Search, ExternalLink, Navigation } from 'lucide-react';

export const BranchLocatorModal: React.FC = () => {
  const { lang, isBranchModalOpen, setIsBranchModalOpen, setIsServiceBookingOpen } = useApp();
  const isAr = lang === 'ar';

  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  if (!isBranchModalOpen) return null;

  const filteredCenters = SERVICE_CENTERS.filter((center) => {
    if (selectedCity !== 'all') {
      if (selectedCity === 'cairo' && !center.cityAr.includes('القاهرة')) return false;
      if (selectedCity === 'giza' && !center.cityAr.includes('الجيزة')) return false;
      if (selectedCity === 'alex' && !center.cityAr.includes('الإسكندرية')) return false;
      if (selectedCity === 'delta' && !['الغربية', 'الدقهلية'].includes(center.cityAr)) return false;
    }
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      const matchName = center.nameAr.toLowerCase().includes(q) || center.nameEn.toLowerCase().includes(q);
      const matchArea = center.areaAr.toLowerCase().includes(q) || center.addressAr.toLowerCase().includes(q);
      if (!matchName && !matchArea) return false;
    }
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-950/70 backdrop-blur-xs transition-opacity"
        onClick={() => setIsBranchModalOpen(false)}
      />

      {/* Modal Dialog / Bottom Sheet */}
      <div className="relative w-full max-w-4xl bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden z-10 max-h-[90vh] flex flex-col animate-in fade-in slide-in-from-bottom duration-200">
        {/* Header with Mobile Drag Bar */}
        <div className="bg-[#090d16] text-white p-4 sm:p-5 flex flex-col border-b border-amber-500/20">
          <div className="w-10 h-1 bg-slate-700 rounded-full mx-auto mb-2 sm:hidden" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl luxury-gold-gradient text-slate-950 font-bold flex items-center justify-center shrink-0 shadow-sm shadow-amber-500/20">
                <MapPin className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white leading-none">
                  {isAr ? 'شبكة مراكز خدمة ناسيتا (١٥+ مركز)' : 'Nacita 15+ Service Centers'}
                </h3>
                <p className="text-[11px] text-slate-300 mt-1">
                  {isAr ? 'فروع مجهزة بأحدث أجهزة الليزر وضبط الزوايا 3D' : 'Laser balancers and 3D alignment bays'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsBranchModalOpen(false)}
              className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 touch-manipulation min-h-[38px] min-w-[38px] flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 bg-neutral-50 border-b border-neutral-200 flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute top-2.5 right-3 text-neutral-400" />
            <input
              type="text"
              placeholder={isAr ? 'ابحث باسم المنطقة أو الفرع (مثل: العبور، التجمع، المهندسين)' : 'Search by area or branch...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-neutral-300 rounded-lg pr-9 pl-3 py-2 text-xs focus:outline-hidden focus:border-neutral-950"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            <button
              onClick={() => setSelectedCity('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                selectedCity === 'all'
                  ? 'bg-neutral-900 text-white'
                  : 'bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {isAr ? 'جميع المحافظات' : 'All Regions'}
            </button>
            <button
              onClick={() => setSelectedCity('cairo')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                selectedCity === 'cairo'
                  ? 'bg-neutral-900 text-white'
                  : 'bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {isAr ? 'القاهرة' : 'Cairo'}
            </button>
            <button
              onClick={() => setSelectedCity('giza')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                selectedCity === 'giza'
                  ? 'bg-neutral-900 text-white'
                  : 'bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {isAr ? 'الجيزة (زايد / أكتوبر)' : 'Giza & Zayed'}
            </button>
            <button
              onClick={() => setSelectedCity('alex')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                selectedCity === 'alex'
                  ? 'bg-neutral-900 text-white'
                  : 'bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {isAr ? 'الإسكندرية' : 'Alexandria'}
            </button>
            <button
              onClick={() => setSelectedCity('delta')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                selectedCity === 'delta'
                  ? 'bg-neutral-900 text-white'
                  : 'bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {isAr ? 'وجه بحري' : 'Delta'}
            </button>
          </div>
        </div>

        {/* Branches Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCenters.map((center) => (
            <div
              key={center.id}
              className="p-4 rounded-xl border border-neutral-200 bg-white hover:border-neutral-300 transition-all flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="text-sm font-bold text-neutral-950">
                    {isAr ? center.nameAr : center.nameEn}
                  </h4>
                  {center.isPopular && (
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-sm shrink-0">
                      {isAr ? 'فرع رئيسي' : 'Flagship'}
                    </span>
                  )}
                </div>

                <div className="space-y-1.5 text-xs text-neutral-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <span>{isAr ? center.addressAr : center.addressEn}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                    <span>{isAr ? center.hoursAr : center.hoursEn}</span>
                  </div>
                </div>

                {/* Available services in this branch */}
                <div className="mt-3 flex flex-wrap gap-1">
                  {center.services.map((srv, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded-sm"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
                <a
                  href={`tel:${center.phone}`}
                  className="flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span className="tabular-nums">19725</span>
                </a>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      `Nacita Autocare ${center.addressAr}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg text-xs flex items-center gap-1"
                    title={isAr ? 'فتح على خرائط Google' : 'Open in Maps'}
                  >
                    <Navigation className="w-3.5 h-3.5 text-neutral-600" />
                    <span className="text-[11px]">{isAr ? 'الخريطة' : 'Map'}</span>
                  </a>

                  <button
                    onClick={() => {
                      setIsBranchModalOpen(false);
                      setIsServiceBookingOpen(true);
                    }}
                    className="px-3.5 py-1.5 luxury-gold-gradient text-slate-950 text-xs font-bold rounded-lg hover:brightness-105 active:scale-[0.98] shadow-xs transition-all"
                  >
                    {isAr ? 'حجز موعد' : 'Book Visit'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
