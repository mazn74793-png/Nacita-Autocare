import React from 'react';
import { useApp } from '../context/AppContext';
import { PhoneCall, ShieldCheck, MapPin, Truck, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const { lang, setIsMobileBookingOpen, setIsBranchModalOpen } = useApp();
  const isAr = lang === 'ar';

  return (
    <footer className="bg-[#070a12] text-slate-300 border-t border-white/10 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand & Hotline Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-slate-950 font-black text-lg shadow-md">
                N
              </div>
              <div className="flex flex-col">
                <span className="text-base font-black tracking-tight text-white uppercase">
                  NACITA AUTOCARE
                </span>
                <span className="text-[10px] text-amber-400 uppercase tracking-widest font-bold">
                  ناسيتا أوتوكير مصر
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm font-normal">
              {isAr
                ? 'ناسيتا أوتوكير: أكثر من ١٥ عاماً من الريادة في خدمات السيارات والإطارات وصيانتها. وكيل معتمد لأفضل الماركات العالمية وخدمة الورشة المتنقلة الرائدة في مصر.'
                : 'Nacita Autocare: 15+ years of excellence in automotive maintenance, tire retail, and on-demand mobile workshop services across Egypt.'}
            </p>

            <div className="pt-2">
              <a
                href="tel:19725"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-amber-300 font-bold hover:bg-white/10 transition-colors hover:border-amber-400/40"
              >
                <div className="w-6 h-6 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-400">
                  <PhoneCall className="w-3.5 h-3.5" />
                </div>
                <span className="tabular-nums tracking-wider text-sm font-mono font-bold text-amber-300">19725</span>
                <span className="text-slate-400 font-normal text-xs mr-1">
                  {isAr ? 'الخط الساخن الموحد في مصر' : 'Unified Egypt Hotline'}
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-wider mb-3">
              {isAr ? 'الخدمات المتخصصة' : 'Specialized Services'}
            </h4>
            <ul className="space-y-2.5 text-slate-300">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {isAr ? 'ترصيص العجلات بالليزر' : 'Laser Wheel Balancing'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {isAr ? 'ضبط زوايا 3D' : '3D Computer Alignment'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {isAr ? 'شحن فريون التكييف' : 'AC Refrigerant Recharge'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {isAr ? 'ملء الإطارات بالنيتروجين' : 'Nitrogen Inflation'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {isAr ? 'فحص شامل وفحص أوبر' : 'Uber & 32-Pt Inspection'}
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Van & Centers */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-wider mb-3">
              {isAr ? 'التغطية والفروع' : 'Coverage & Centers'}
            </h4>
            <ul className="space-y-2.5 text-slate-300">
              <li>
                <button
                  onClick={() => setIsMobileBookingOpen(true)}
                  className="hover:text-amber-400 transition-colors text-right cursor-pointer"
                >
                  {isAr ? 'طلب الورشة المتنقلة للمنزل' : 'Mobile Van Doorstep Request'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsBranchModalOpen(true)}
                  className="hover:text-amber-400 transition-colors text-right cursor-pointer"
                >
                  {isAr ? 'فرع العبور (م. مينا شكري)' : 'El Obour Branch'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsBranchModalOpen(true)}
                  className="hover:text-amber-400 transition-colors text-right cursor-pointer"
                >
                  {isAr ? 'فرع التجمع الخامس (شارع التسعين)' : 'New Cairo 90th St'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsBranchModalOpen(true)}
                  className="hover:text-amber-400 transition-colors text-right cursor-pointer"
                >
                  {isAr ? 'فرع الشيخ زايد و 6 أكتوبر' : 'Sheikh Zayed & October'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsBranchModalOpen(true)}
                  className="hover:text-amber-400 transition-colors text-right cursor-pointer"
                >
                  {isAr ? 'فرع الإسكندرية (سموحة ومحرم بك)' : 'Alexandria Branches'}
                </button>
              </li>
            </ul>
          </div>

          {/* Guarantee & Transparency */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-wider mb-3">
              {isAr ? 'الضمان والاعتماد' : 'Official Warranty'}
            </h4>
            <ul className="space-y-2.5 text-slate-300">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{isAr ? 'ضمان رسمي سنتين لإطارات Sailun' : '2-Yr Official Warranty on Sailun'}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{isAr ? 'مواعيد العمل: يومياً 9ص - 11م' : 'Hours: Daily 9 AM - 11 PM'}</span>
              </li>
              <li className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{isAr ? 'تغطية فورية للورش المتنقلة' : 'Immediate Mobile Van Dispatch'}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Clean Copyright & Disclaimer without fake telemetry */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-medium">
          <div>
            © {new Date().getFullYear()} Nacita Autocare (ناسيتا أوتوكير). {isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>{isAr ? 'الأسعار تشمل ضريبة القيمة المضافة (inc. VAT)' : 'All prices include VAT'}</span>
            <span aria-hidden="true">·</span>
            <span>{isAr ? 'خدمة العملاء: 19725' : 'Customer Support: 19725'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
