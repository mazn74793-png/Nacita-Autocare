import React, { useState } from 'react';
import { TireProduct, TIRE_PRODUCTS } from '../data/nacitaData';
import { useApp } from '../context/AppContext';
import { ShoppingBag, Eye, ShieldCheck, Check, Sparkles, Filter, RotateCcw } from 'lucide-react';

interface TireCatalogProps {
  filterWidth: number | null;
  filterAspect: number | null;
  filterRim: number | null;
  onResetFilters: () => void;
}

export const TireCatalog: React.FC<TireCatalogProps> = ({
  filterWidth,
  filterAspect,
  filterRim,
  onResetFilters
}) => {
  const { lang, addToCart, setSelectedTireForDetail } = useApp();
  const isAr = lang === 'ar';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRimTab, setSelectedRimTab] = useState<number | 'all'>('all');
  const [addedAnimationId, setAddedAnimationId] = useState<string | null>(null);

  // Filter products based on active filters
  const filteredTires = TIRE_PRODUCTS.filter((tire) => {
    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = tire.name.toLowerCase().includes(q) || tire.nameEn.toLowerCase().includes(q);
      const matchSku = tire.sku.toLowerCase().includes(q);
      const matchPattern = tire.pattern.toLowerCase().includes(q);
      if (!matchName && !matchSku && !matchPattern) return false;
    }

    // Hero widget filter
    if (filterWidth && tire.width !== filterWidth) return false;
    if (filterAspect && tire.aspect !== filterAspect) return false;
    if (filterRim && tire.rim !== filterRim) return false;

    // Segmented Rim Tab
    if (selectedRimTab !== 'all' && tire.rim !== selectedRimTab) return false;

    return true;
  });

  const handleQuickAdd = (product: TireProduct) => {
    addToCart(product, 1, 'branch');
    setAddedAnimationId(product.id);
    setTimeout(() => {
      setAddedAnimationId(null);
    }, 1500);
  };

  const hasActiveFilters = Boolean(filterWidth || filterAspect || filterRim || searchQuery || selectedRimTab !== 'all');

  return (
    <section id="tires" className="py-16 sm:py-24 bg-slate-50/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[11px] sm:text-xs font-black text-amber-800 uppercase tracking-wider mb-2">
              <span>{isAr ? 'وكيل معتمد لإطارات Sailun' : 'Authorized Sailun Distributor'}</span>
              <span aria-hidden="true" className="text-amber-400">·</span>
              <span>{isAr ? 'ضمان رسمي عامين' : '2-Year Official Warranty'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
              {isAr ? 'أفضل الإطارات مبيعاً بأسعار شاملة الضريبة' : 'Best Selling Tires with Official VAT Included'}
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm mt-1.5 max-w-2xl font-medium leading-relaxed">
              {isAr
                ? 'إطارات أصلية معتمدة مع إمكانية التركيب والترصيص في مراكز ناسيتا أو من خلال الورشة المتنقلة عند باب منزلك.'
                : 'Genuine certified tires with optional professional fitting & balancing at 15+ branches or delivered by our mobile workshop.'}
            </p>
          </div>

          {/* Interactive Filter Tabs - Horizontal Swipeable on Mobile */}
          <div className="-mx-4 px-4 sm:mx-0 sm:px-0 flex items-center gap-1.5 overflow-x-auto pb-1.5 sm:pb-0 scrollbar-none">
            <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-300/90 rounded-2xl shadow-xs shrink-0">
              <button
                onClick={() => setSelectedRimTab('all')}
                className={`min-h-[40px] px-4 py-2 text-xs font-black rounded-xl transition-all whitespace-nowrap ${
                  selectedRimTab === 'all'
                    ? 'bg-slate-950 text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                }`}
              >
                {isAr ? 'جميع المقاسات' : 'All Rims'}
              </button>
              <button
                onClick={() => setSelectedRimTab(13)}
                className={`min-h-[40px] px-3.5 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
                  selectedRimTab === 13
                    ? 'bg-slate-950 text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                }`}
              >
                R13
              </button>
              <button
                onClick={() => setSelectedRimTab(15)}
                className={`min-h-[40px] px-3.5 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
                  selectedRimTab === 15
                    ? 'bg-slate-950 text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                }`}
              >
                R15
              </button>
              <button
                onClick={() => setSelectedRimTab(16)}
                className={`min-h-[40px] px-3.5 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
                  selectedRimTab === 16
                    ? 'bg-slate-950 text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                }`}
              >
                R16
              </button>
              <button
                onClick={() => setSelectedRimTab(17)}
                className={`min-h-[40px] px-3.5 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
                  selectedRimTab === 17
                    ? 'bg-slate-950 text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                }`}
              >
                R17 / R18
              </button>
            </div>
          </div>
        </div>

        {/* Filter Feedback Strip when active filters exist */}
        {hasActiveFilters && (
          <div className="mb-6 p-3.5 bg-amber-50/90 border border-amber-200/90 rounded-2xl flex items-center justify-between text-xs text-amber-950 shadow-xs">
            <div className="flex items-center gap-2 flex-wrap font-medium">
              <span className="font-bold">{isAr ? 'الفلاتر النشطة:' : 'Active Filters:'}</span>
              {filterWidth && <span className="bg-white/80 px-2 py-0.5 rounded-md border border-amber-200">{isAr ? `العرض: ${filterWidth}` : `Width: ${filterWidth}`}</span>}
              {filterAspect && <span className="bg-white/80 px-2 py-0.5 rounded-md border border-amber-200">{isAr ? `الارتفاع: ${filterAspect}` : `Aspect: ${filterAspect}`}</span>}
              {filterRim && <span className="bg-white/80 px-2 py-0.5 rounded-md border border-amber-200">{isAr ? `الجنط: R${filterRim}` : `Rim: R${filterRim}`}</span>}
              {selectedRimTab !== 'all' && <span className="bg-white/80 px-2 py-0.5 rounded-md border border-amber-200">{`Rim R${selectedRimTab}`}</span>}
              {searchQuery && <span className="bg-white/80 px-2 py-0.5 rounded-md border border-amber-200">{`"${searchQuery}"`}</span>}
            </div>
            <button
              onClick={() => {
                onResetFilters();
                setSelectedRimTab('all');
                setSearchQuery('');
              }}
              className="flex items-center gap-1 font-bold text-amber-900 hover:text-amber-950 underline shrink-0 min-h-[36px]"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{isAr ? 'إعادة ضبط الفلاتر' : 'Reset Filters'}</span>
            </button>
          </div>
        )}

        {/* Product Grid (3 Columns Desktop, 2 Tablet, 1 Mobile) */}
        {filteredTires.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 shadow-xs">
            <p className="text-slate-900 text-base font-bold mb-3">
              {isAr ? 'لم نعثر على إطارات مطابقة لهذا المقاس المحدد' : 'No matching tires found for this exact size'}
            </p>
            <p className="text-slate-600 text-xs mb-6 max-w-md mx-auto">
              {isAr
                ? 'فريق خدمة عملاء ناسيتا يمكنه توفير أي مقاس خاص خلال ساعات. اتصل بنا على 19725.'
                : 'Our customer support team can source any special dimensions within hours. Call 19725.'}
            </p>
            <button
              onClick={() => {
                onResetFilters();
                setSelectedRimTab('all');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 bg-slate-950 text-white rounded-xl text-xs font-bold hover:bg-slate-800"
            >
              {isAr ? 'عرض جميع الإطارات المتوفرة' : 'View All In-Stock Tires'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredTires.map((tire) => {
              const isAdded = addedAnimationId === tire.id;

              return (
                <div
                  key={tire.id}
                  className="bg-white rounded-3xl border border-slate-200 overflow-hidden luxury-card-glow transition-all duration-300 flex flex-col group hover:-translate-y-1"
                >
                  {/* Luxury Tire Pedestal Studio Display */}
                  <div className="relative bg-gradient-to-b from-slate-100/90 via-slate-50 to-white p-6 sm:p-8 flex items-center justify-center border-b border-slate-100 overflow-hidden min-h-[250px]">
                    {/* Top Tag without pill sandwich: Clean subtle marker */}
                    <div className="absolute top-3 right-3 text-[11px] font-black uppercase tracking-wider">
                      {tire.bestSeller && (
                        <span className="luxury-gold-gradient text-slate-950 px-2.5 py-1 rounded-lg shadow-xs flex items-center gap-1 font-black">
                          ★ Best seller
                        </span>
                      )}
                    </div>

                    <img
                      src={tire.image}
                      alt={tire.name}
                      className="w-48 h-48 sm:w-52 sm:h-52 object-contain transition-transform duration-500 group-hover:scale-108 drop-shadow-md"
                      referrerPolicy="no-referrer"
                    />

                    {/* Stock Alert Warning with High Contrast */}
                    {tire.stock && tire.stock <= 4 && (
                      <div className="absolute bottom-3 left-3 text-[11px] font-bold text-rose-800 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-md shadow-xs">
                        {isAr ? `باقي ${tire.stock} فقط في المخزون!` : `Only ${tire.stock} left in stock!`}
                      </div>
                    )}
                  </div>

                  {/* Card Content & Metadata */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Brand Label */}
                      <div className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                        <span>{tire.brand}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                        <span className="text-slate-500 font-semibold">{tire.pattern}</span>
                      </div>

                      {/* Product Name */}
                      <h3 className="text-base sm:text-lg font-black text-slate-950 group-hover:text-amber-600 transition-colors line-clamp-1">
                        {tire.name}
                      </h3>

                      {/* Unboxed Metadata with Typographic Separators */}
                      <div className="mt-2.5 flex items-center flex-wrap gap-2 text-xs text-slate-600 font-medium">
                        <span className="font-mono text-slate-700">SKU: {tire.sku}</span>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span>{isAr ? `المنشأ: ${tire.origin}` : `Origin: ${tire.originEn}`}</span>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span className="text-slate-800 font-bold">{isAr ? `الضمان: ${tire.warranty}` : `Warranty: ${tire.warrantyEn}`}</span>
                      </div>

                      <p className="mt-2.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {isAr ? tire.descriptionAr : tire.descriptionEn}
                      </p>
                    </div>

                    {/* Price and Purchase Row */}
                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <div className="flex items-baseline justify-between mb-3">
                        <div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-xl sm:text-2xl font-black text-slate-950 tabular-nums">
                              LE {tire.currentPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </span>
                            <span className="text-xs text-slate-400 line-through tabular-nums font-semibold">
                              LE {tire.originalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </span>
                          </div>
                          <div className="text-[11px] font-extrabold text-emerald-800 bg-emerald-50/90 border border-emerald-200/90 px-2 py-0.5 rounded-md mt-1 inline-block">
                            {isAr
                              ? `توفر LE ${tire.savings.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} شامل الضريبة (inc. VAT)`
                              : `Save LE ${tire.savings.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} inc. VAT`}
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <button
                          onClick={() => setSelectedTireForDetail(tire)}
                          className="min-h-[44px] py-2 px-3 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-xl transition-colors flex items-center justify-center gap-1.5 touch-manipulation border border-slate-200"
                        >
                          <Eye className="w-3.5 h-3.5 text-slate-600" />
                          <span>{isAr ? 'المواصفات' : 'Specs'}</span>
                        </button>

                        <button
                          onClick={() => handleQuickAdd(tire)}
                          className={`min-h-[44px] py-2 px-3 text-xs font-black rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md touch-manipulation ${
                            isAdded
                              ? 'bg-emerald-600 text-white'
                              : 'luxury-gold-gradient hover:brightness-105 active:scale-98 text-slate-950 shadow-amber-500/20'
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-4 h-4" />
                              <span>{isAr ? 'تمت الإضافة' : 'Added!'}</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag className="w-4 h-4 text-slate-950" />
                              <span>{isAr ? 'أضف للسلة' : 'Add to Bag'}</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
