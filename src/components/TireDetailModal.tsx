import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, ShieldCheck, Check, ShoppingBag, Truck, MapPin, Gauge, Award, Fuel } from 'lucide-react';

export const TireDetailModal: React.FC = () => {
  const { lang, selectedTireForDetail, setSelectedTireForDetail, addToCart, setIsMobileBookingOpen } = useApp();
  const isAr = lang === 'ar';

  const [quantity, setQuantity] = useState<number>(4);
  const [selectedFitMethod, setSelectedFitMethod] = useState<'branch' | 'mobile_van'>('branch');
  const [added, setAdded] = useState(false);

  if (!selectedTireForDetail) return null;

  const tire = selectedTireForDetail;
  const totalPrice = tire.currentPrice * quantity;
  const totalSaved = tire.savings * quantity;

  const handleAddToCart = () => {
    addToCart(tire, quantity, selectedFitMethod);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setSelectedTireForDetail(null);
    }, 1000);
  };

  const handleBookWithMobileVan = () => {
    addToCart(tire, quantity, 'mobile_van');
    setSelectedTireForDetail(null);
    setIsMobileBookingOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-950/70 backdrop-blur-xs transition-opacity"
        onClick={() => setSelectedTireForDetail(null)}
      />

      {/* Dialog Container / Bottom Sheet */}
      <div className="relative w-full max-w-2xl bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden z-10 max-h-[92vh] flex flex-col animate-in fade-in slide-in-from-bottom duration-200">
        {/* Header with Mobile Drag Bar */}
        <div className="p-4 sm:p-5 border-b border-amber-500/20 flex flex-col bg-[#090d16] text-white">
          <div className="w-10 h-1 bg-slate-700 rounded-full mx-auto mb-2 sm:hidden" />
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                {tire.brand} · {tire.pattern}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white leading-tight mt-0.5">
                {tire.name}
              </h3>
            </div>
            <button
              onClick={() => setSelectedTireForDetail(null)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 touch-manipulation min-h-[38px] min-w-[38px] flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            {/* Image */}
            <div className="sm:col-span-5 bg-neutral-100/90 rounded-xl p-4 flex items-center justify-center border border-neutral-200/80">
              <img
                src={tire.image}
                alt={tire.name}
                className="w-48 h-48 object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Pricing & Key Metrics */}
            <div className="sm:col-span-7 space-y-3">
              <div>
                <div className="flex items-baseline gap-2.5">
                  <span className="text-2xl font-extrabold text-neutral-950 tabular-nums">
                    LE {tire.currentPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </span>
                  <span className="text-xs text-neutral-400 line-through tabular-nums">
                    LE {tire.originalPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="text-xs font-bold text-emerald-700 mt-1">
                  {isAr
                    ? `توفير LE ${tire.savings.toLocaleString(undefined, { minimumFractionDigits: 2 })} للإطار شامل ضريبة القيمة المضافة`
                    : `Save LE ${tire.savings.toLocaleString(undefined, { minimumFractionDigits: 2 })} per tire inc. VAT`}
                </div>
              </div>

              {/* Quantity Preset Selector (1, 2, 4 Tires) */}
              <div className="pt-2">
                <label className="block text-xs font-bold text-neutral-800 mb-1.5">
                  {isAr ? 'الكمية المطلوبة:' : 'Quantity:'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setQuantity(4)}
                    className={`py-1.5 text-xs font-bold rounded-lg border transition-colors ${
                      quantity === 4
                        ? 'bg-neutral-950 text-white border-neutral-950'
                        : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                    }`}
                  >
                    {isAr ? 'طقم كامل (٤)' : 'Set of 4'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setQuantity(2)}
                    className={`py-1.5 text-xs font-bold rounded-lg border transition-colors ${
                      quantity === 2
                        ? 'bg-neutral-950 text-white border-neutral-950'
                        : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                    }`}
                  >
                    {isAr ? 'زوج إطارات (٢)' : 'Pair of 2'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setQuantity(1)}
                    className={`py-1.5 text-xs font-bold rounded-lg border transition-colors ${
                      quantity === 1
                        ? 'bg-neutral-950 text-white border-neutral-950'
                        : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                    }`}
                  >
                    {isAr ? 'إطار واحد (١)' : 'Single (1)'}
                  </button>
                </div>
              </div>

              {/* Calculated Total for Selected Quantity */}
              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 text-xs flex justify-between items-center">
                <span className="text-neutral-600">
                  {isAr ? `إجمالي ${quantity} إطارات:` : `Total for ${quantity} tires:`}
                </span>
                <span className="font-extrabold text-neutral-950 tabular-nums">
                  LE {totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>
          </div>

          {/* Technical Specs Table */}
          <div>
            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2.5">
              {isAr ? 'المواصفات الفنية التفصيلية' : 'Technical Specifications'}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="p-2.5 bg-neutral-50 rounded-lg border border-neutral-200">
                <div className="text-neutral-500 text-[11px]">{isAr ? 'المقاس الكامل' : 'Size'}</div>
                <div className="font-bold text-neutral-900">{tire.width}/{tire.aspect} R{tire.rim}</div>
              </div>
              <div className="p-2.5 bg-neutral-50 rounded-lg border border-neutral-200">
                <div className="text-neutral-500 text-[11px]">{isAr ? 'مؤشر السرعة' : 'Speed Index'}</div>
                <div className="font-bold text-neutral-900">{tire.speedRating}</div>
              </div>
              <div className="p-2.5 bg-neutral-50 rounded-lg border border-neutral-200">
                <div className="text-neutral-500 text-[11px]">{isAr ? 'الضمان الرسمي' : 'Warranty'}</div>
                <div className="font-bold text-neutral-900">{isAr ? tire.warranty : tire.warrantyEn}</div>
              </div>
              <div className="p-2.5 bg-neutral-50 rounded-lg border border-neutral-200">
                <div className="text-neutral-500 text-[11px]">{isAr ? 'بلد المنشأ' : 'Origin'}</div>
                <div className="font-bold text-neutral-900">{isAr ? tire.origin : tire.originEn}</div>
              </div>
              <div className="p-2.5 bg-neutral-50 rounded-lg border border-neutral-200">
                <div className="text-neutral-500 text-[11px]">SKU</div>
                <div className="font-mono font-bold text-neutral-900">{tire.sku}</div>
              </div>
              <div className="p-2.5 bg-neutral-50 rounded-lg border border-neutral-200">
                <div className="text-neutral-500 text-[11px]">{isAr ? 'نقشة المداس' : 'Tread Pattern'}</div>
                <div className="font-bold text-neutral-900">{tire.pattern}</div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="text-xs text-neutral-600 leading-relaxed bg-amber-50/50 border border-amber-200/60 p-3 rounded-xl">
            {isAr ? tire.descriptionAr : tire.descriptionEn}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleBookWithMobileVan}
            className="w-full sm:flex-1 py-3 px-4 bg-slate-900 hover:bg-slate-800 active:scale-[0.99] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs"
          >
            <Truck className="w-4 h-4 text-amber-400" />
            <span>{isAr ? 'طلب تركيب بالورشة المتنقلة' : 'Fit via Mobile Van'}</span>
          </button>

          <button
            onClick={handleAddToCart}
            className={`w-full sm:flex-1 py-3 px-4 rounded-xl text-xs font-black flex items-center justify-center gap-2 transition-all shadow-md ${
              added
                ? 'bg-emerald-600 text-white'
                : 'luxury-gold-gradient text-slate-950 shadow-amber-500/15 hover:brightness-105 active:scale-[0.99]'
            }`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4" />
                <span>{isAr ? 'تمت الإضافة للسلة!' : 'Added to Bag!'}</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4 text-slate-950" />
                <span>{isAr ? `إضافة للسلة (${quantity} إطارات)` : `Add to Bag (${quantity})`}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
