import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck, Truck, Check, ArrowRight, ArrowLeft } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    lang,
    cart,
    cartTotal,
    totalSavings,
    totalItemCount,
    removeFromCart,
    updateQuantity,
    clearCart,
    isCartOpen,
    setIsCartOpen
  } = useApp();

  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('القاهرة');
  const [address, setAddress] = useState('');
  const [installationMethod, setInstallationMethod] = useState<'branch' | 'mobile_van' | 'delivery'>('branch');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'card' | 'valu'>('cod');
  const [orderNumber, setOrderNumber] = useState('');

  if (!isCartOpen) return null;

  const installationFee = installationMethod === 'mobile_van' ? 150 : 0;
  const grandTotal = cartTotal + installationFee;

  const handleProceedToCheckout = () => {
    setCheckoutStep('checkout');
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrderId = `NAC-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(newOrderId);
    setCheckoutStep('success');
    clearCart();
  };

  const resetAndClose = () => {
    setIsCartOpen(false);
    setCheckoutStep('cart');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-950/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Slide-over panel */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 overflow-hidden">
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-neutral-800" />
            <h2 className="text-base font-bold text-neutral-900">
              {checkoutStep === 'cart'
                ? isAr
                  ? `سلة المشتريات (${totalItemCount})`
                  : `Shopping Bag (${totalItemCount})`
                : checkoutStep === 'checkout'
                ? isAr
                  ? 'إتمام الطلب وتحديد الاستلام'
                  : 'Checkout & Delivery'
                : isAr
                ? 'تم تأكيد طلبك بنجاح'
                : 'Order Confirmed'}
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 text-neutral-500 hover:text-neutral-900 rounded-lg hover:bg-neutral-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5">
          {checkoutStep === 'cart' && (
            <>
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-900">
                      {isAr ? 'سلة المشتريات فارغة' : 'Your bag is empty'}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1 max-w-xs">
                      {isAr
                        ? 'تصفح قائمة إطارات Sailun واختر المقاس المناسب لسيارتك.'
                        : 'Explore our certified Sailun tires and find the exact fit for your vehicle.'}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="px-5 py-2.5 bg-neutral-950 text-white rounded-xl text-xs font-bold hover:bg-neutral-800"
                  >
                    {isAr ? 'تصفح الإطارات الآن' : 'Browse Tires'}
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="p-3.5 rounded-xl border border-neutral-200 bg-white flex gap-3 shadow-xs"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-contain bg-neutral-50 rounded-lg p-1 border border-neutral-100"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-neutral-900 truncate">
                          {item.product.name}
                        </h4>
                        <div className="text-[11px] text-neutral-500 mt-0.5">
                          SKU: {item.product.sku} · {item.product.warranty}
                        </div>
                        <div className="text-xs font-bold text-neutral-950 mt-1 tabular-nums">
                          LE {item.product.currentPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </div>

                        {/* Quantity Counter */}
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-neutral-100">
                          <div className="flex items-center border border-neutral-200 rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="p-1 hover:bg-neutral-100 text-neutral-600 rounded-l-lg"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="px-2.5 text-xs font-bold tabular-nums">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1 hover:bg-neutral-100 text-neutral-600 rounded-r-lg"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-neutral-400 hover:text-rose-600 p-1"
                            title={isAr ? 'حذف' : 'Remove'}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Installation Preference */}
                  <div className="pt-2">
                    <label className="block text-xs font-bold text-neutral-900 mb-2">
                      {isAr ? 'طريقة التركيب المفضلة:' : 'Fitting & Installation Preference:'}
                    </label>
                    <div className="space-y-2">
                      <label
                        className={`flex items-start gap-2.5 p-3 rounded-xl border text-xs cursor-pointer transition-colors ${
                          installationMethod === 'branch'
                            ? 'border-neutral-950 bg-neutral-50'
                            : 'border-neutral-200 hover:bg-neutral-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="installOption"
                          checked={installationMethod === 'branch'}
                          onChange={() => setInstallationMethod('branch')}
                          className="mt-0.5"
                        />
                        <div>
                          <div className="font-bold text-neutral-900">
                            {isAr ? 'التركيب والترصيص بأحد الفروع (مجاني)' : 'Fit & Balance at Branch (Free)'}
                          </div>
                          <div className="text-[11px] text-neutral-500">
                            {isAr ? 'في أي من مراكزنا الـ ١٥ في مصر' : 'At any of our 15+ branches'}
                          </div>
                        </div>
                      </label>

                      <label
                        className={`flex items-start gap-2.5 p-3 rounded-xl border text-xs cursor-pointer transition-colors ${
                          installationMethod === 'mobile_van'
                            ? 'border-neutral-950 bg-neutral-50'
                            : 'border-neutral-200 hover:bg-neutral-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="installOption"
                          checked={installationMethod === 'mobile_van'}
                          onChange={() => setInstallationMethod('mobile_van')}
                          className="mt-0.5"
                        />
                        <div>
                          <div className="font-bold text-neutral-900 flex items-center justify-between gap-4">
                            <span>{isAr ? 'الورشة المتنقلة حتى باب منزلك' : 'Mobile Van at Your Doorstep'}</span>
                            <span className="font-bold text-amber-700 tabular-nums">+150 LE</span>
                          </div>
                          <div className="text-[11px] text-neutral-500">
                            {isAr ? 'فريقنا يصلك بالمعدات ويركب الإطارات' : 'Technicians arrive at your home/office'}
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {checkoutStep === 'checkout' && (
            <form onSubmit={handleCompleteOrder} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-neutral-800 mb-1">
                  {isAr ? 'الاسم الكامل *' : 'Full Name *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={isAr ? 'أحمد محمد' : 'Ahmed Mohamed'}
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full border border-neutral-300 rounded-lg px-3 py-2 text-xs focus:outline-hidden focus:border-neutral-950"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-800 mb-1">
                  {isAr ? 'رقم الهاتف المحمول (مصر) *' : 'Mobile Phone (Egypt) *'}
                </label>
                <input
                  type="tel"
                  required
                  placeholder="010XXXXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-neutral-300 rounded-lg px-3 py-2 text-xs focus:outline-hidden focus:border-neutral-950 tabular-nums"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    {isAr ? 'المحافظة / المدينة' : 'City / Governorate'}
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full border border-neutral-300 rounded-lg px-3 py-2 text-xs focus:outline-hidden focus:border-neutral-950"
                  >
                    <option value="القاهرة">القاهرة</option>
                    <option value="الجيزة">الجيزة</option>
                    <option value="الإسكندرية">الإسكندرية</option>
                    <option value="القليوبية">القليوبية</option>
                    <option value="الغربية">الغربية</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    {isAr ? 'المنطقة / الحي' : 'District'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isAr ? 'التجمع الخامس / المعادي' : 'New Cairo / Maadi'}
                    className="w-full border border-neutral-300 rounded-lg px-3 py-2 text-xs focus:outline-hidden focus:border-neutral-950"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-800 mb-1">
                  {isAr ? 'العنوان بالتفصيل *' : 'Detailed Address *'}
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder={isAr ? 'اسم الشارع، رقم العمارة، علامة مميزة' : 'Street name, building, landmark'}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full border border-neutral-300 rounded-lg px-3 py-2 text-xs focus:outline-hidden focus:border-neutral-950"
                />
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-xs font-bold text-neutral-800 mb-2">
                  {isAr ? 'طريقة الدفع:' : 'Payment Method:'}
                </label>
                <div className="space-y-1.5">
                  <label
                    className={`flex items-center gap-2.5 p-2.5 rounded-lg border text-xs cursor-pointer ${
                      paymentMethod === 'cod' ? 'border-neutral-950 bg-neutral-50' : 'border-neutral-200'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                    />
                    <span className="font-semibold">{isAr ? 'الدفع نقداً عند الاستلام / بعد التركيب' : 'Cash on Delivery / After Fitting'}</span>
                  </label>

                  <label
                    className={`flex items-center gap-2.5 p-2.5 rounded-lg border text-xs cursor-pointer ${
                      paymentMethod === 'card' ? 'border-neutral-950 bg-neutral-50' : 'border-neutral-200'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                    />
                    <span className="font-semibold">{isAr ? 'بطاقة بنكية مع فني ناسيتا (POS)' : 'Bank Card via Mobile POS Machine'}</span>
                  </label>

                  <label
                    className={`flex items-center gap-2.5 p-2.5 rounded-lg border text-xs cursor-pointer ${
                      paymentMethod === 'valu' ? 'border-neutral-950 bg-neutral-50' : 'border-neutral-200'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'valu'}
                      onChange={() => setPaymentMethod('valu')}
                    />
                    <span className="font-semibold">{isAr ? 'تقسيط عبر valU أو البنوك بدون فوائد' : 'Installments via valU / 0% Interest'}</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full min-h-[46px] py-3.5 luxury-gold-gradient hover:brightness-105 active:scale-98 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-1.5 touch-manipulation"
              >
                <span>{isAr ? 'تأكيد وحجز الطلب' : 'Confirm Order'}</span>
                <ArrowIcon className="w-4 h-4 text-slate-950" />
              </button>

              <button
                type="button"
                onClick={() => setCheckoutStep('cart')}
                className="w-full py-2.5 text-xs font-bold text-slate-600 hover:text-slate-950 touch-manipulation"
              >
                {isAr ? 'العودة لمراجعة السلة' : 'Back to Cart'}
              </button>
            </form>
          )}

          {checkoutStep === 'success' && (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto shadow-xs border border-emerald-200">
                <Check className="w-9 h-9" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-950">
                  {isAr ? 'تم استلام طلبك بنجاح!' : 'Order Placed Successfully!'}
                </h3>
                <p className="text-xs text-slate-600 mt-1 font-mono font-bold">
                  {isAr
                    ? `رقم الطلب المرجعي: ${orderNumber}`
                    : `Reference Order ID: ${orderNumber}`}
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-slate-700 text-left space-y-2.5 shadow-xs">
                <div className="flex justify-between">
                  <span className="text-slate-600 font-medium">{isAr ? 'العميل:' : 'Customer:'}</span>
                  <span className="font-bold text-slate-950">{customerName || 'عميل ناسيتا'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 font-medium">{isAr ? 'الهاتف:' : 'Phone:'}</span>
                  <span className="font-bold text-slate-950 tabular-nums">{phone || '010XXXXXXXX'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 font-medium">{isAr ? 'طريقة الاستلام:' : 'Fulfillment:'}</span>
                  <span className="font-bold text-slate-950">
                    {installationMethod === 'mobile_van'
                      ? isAr
                        ? 'الورشة المتنقلة حتى باب المنزل'
                        : 'Mobile Van to Door'
                      : isAr
                      ? 'التركيب بأحد مراكز ناسيتا'
                      : 'Fitting at Nacita Center'}
                  </span>
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-2 font-black text-slate-950 text-sm">
                  <span>{isAr ? 'الإجمالي المطلوب:' : 'Amount Due:'}</span>
                  <span className="tabular-nums text-amber-700">LE {grandTotal.toLocaleString()}</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 font-medium">
                {isAr
                  ? 'سيتواصل معك ممثل خدمة عملاء ناسيتا خلال دقائق لتأكيد الموعد والعنوان بالضبط.'
                  : 'A Nacita autocare coordinator will call you shortly to confirm timing and dispatch.'}
              </p>

              <button
                onClick={resetAndClose}
                className="w-full py-3 bg-slate-950 text-white rounded-xl text-xs font-black hover:bg-slate-800"
              >
                {isAr ? 'تم والعودة للموقع' : 'Done & Continue Browsing'}
              </button>
            </div>
          )}
        </div>

        {/* Drawer Footer (Only in Cart step) */}
        {checkoutStep === 'cart' && cart.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 space-y-3.5">
            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-slate-600 font-medium">
                <span>{isAr ? 'المجموع الفرعي:' : 'Subtotal:'}</span>
                <span className="font-bold tabular-nums text-slate-900">LE {cartTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
              </div>
              {totalSavings > 0 && (
                <div className="flex justify-between text-emerald-800 font-extrabold bg-emerald-50 px-2 py-1 rounded-md">
                  <span>{isAr ? 'إجمالي التوفير:' : 'Total Savings:'}</span>
                  <span className="tabular-nums">- LE {totalSavings.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                </div>
              )}
              {installationFee > 0 && (
                <div className="flex justify-between text-slate-600 font-medium">
                  <span>{isAr ? 'رسوم انتقال الورشة المتنقلة:' : 'Mobile Van Dispatch:'}</span>
                  <span className="font-bold tabular-nums text-slate-900">LE {installationFee}</span>
                </div>
              )}
              <div className="flex justify-between text-slate-950 font-black text-base pt-2 border-t border-slate-200">
                <span>{isAr ? 'الإجمالي شامل ضريبة القيمة المضافة:' : 'Total (Inc. VAT):'}</span>
                <span className="tabular-nums text-amber-700">LE {grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
              </div>
            </div>

            <button
              onClick={handleProceedToCheckout}
              className="w-full min-h-[46px] py-3.5 luxury-gold-gradient hover:brightness-105 active:scale-98 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 touch-manipulation"
            >
              <span>{isAr ? 'متابعة الطلب وتحديد الموعد' : 'Proceed to Checkout'}</span>
              <ArrowIcon className="w-4 h-4 text-slate-950" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
