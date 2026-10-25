import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Truck, Calendar, Clock, MapPin, CheckCircle, PhoneCall, ArrowRight, ArrowLeft } from 'lucide-react';

export const MobileBookingModal: React.FC = () => {
  const { lang, isMobileBookingOpen, setIsMobileBookingOpen, submitBooking } = useApp();
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [carModel, setCarModel] = useState('');
  const [area, setArea] = useState('التجمع الخامس');
  const [address, setAddress] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>(['تركيب وترصيص إطارات']);
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('morning');
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  if (!isMobileBookingOpen) return null;

  const handleToggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = await submitBooking({
      type: 'mobile_workshop',
      customerName: name,
      phone,
      carModel,
      cityArea: area,
      preferredDate: date || 'أقرب موعد متاح',
      preferredTime: timeSlot === 'morning' ? 'صباحاً (9ص - 1م)' : timeSlot === 'afternoon' ? 'ظهراً (1م - 5م)' : 'مساءً (5م - 9م)',
      notes: `الخدمات المطلوبة: ${selectedServices.join(', ')} - العنوان: ${address}`
    });
    setSubmittedId(id);
  };

  const handleClose = () => {
    setIsMobileBookingOpen(false);
    setSubmittedId(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-950/70 backdrop-blur-xs transition-opacity"
        onClick={handleClose}
      />

      {/* Modal / Bottom Sheet */}
      <div className="relative w-full max-w-lg bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden z-10 max-h-[90vh] flex flex-col animate-in fade-in slide-in-from-bottom duration-200">
        {/* Header with Mobile Drag Bar */}
        <div className="bg-[#090d16] text-white p-4 sm:p-5 flex flex-col border-b border-amber-500/20">
          <div className="w-10 h-1 bg-slate-700 rounded-full mx-auto mb-2 sm:hidden" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl luxury-gold-gradient text-slate-950 font-bold flex items-center justify-center shrink-0 shadow-sm shadow-amber-500/20">
                <Truck className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white leading-none">
                  {isAr ? 'طلب الورشة المتنقلة ناسيتا' : 'Book Nacita Mobile Workshop'}
                </h3>
                <p className="text-[11px] text-slate-300 mt-1">
                  {isAr ? 'نصل إليك حتى باب المنزل بمعدات متطورة' : 'Curbside automotive service at your doorstep'}
                </p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 touch-manipulation min-h-[38px] min-w-[38px] flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {submittedId ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-neutral-900">
                  {isAr ? 'تم تأكيد حجز الورشة المتنقلة!' : 'Mobile Van Dispatched!'}
                </h4>
                <p className="text-xs text-neutral-500 mt-1">
                  {isAr ? `رقم الحجز: ${submittedId}` : `Booking Ref: ${submittedId}`}
                </p>
              </div>

              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4 text-xs text-neutral-700 text-left space-y-2">
                <div className="flex justify-between">
                  <span>{isAr ? 'العميل:' : 'Customer:'}</span>
                  <span className="font-bold text-neutral-900">{name}</span>
                </div>
                <div className="flex justify-between">
                  <span>{isAr ? 'الهاتف:' : 'Phone:'}</span>
                  <span className="font-bold text-neutral-900 tabular-nums">{phone}</span>
                </div>
                <div className="flex justify-between">
                  <span>{isAr ? 'المنطقة:' : 'Area:'}</span>
                  <span className="font-bold text-neutral-900">{area}</span>
                </div>
                <div className="flex justify-between">
                  <span>{isAr ? 'الخدمات المطلوبة:' : 'Services:'}</span>
                  <span className="font-bold text-neutral-900">{selectedServices.join('، ')}</span>
                </div>
              </div>

              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 text-right">
                {isAr
                  ? 'سيقوم مهندس تشغيل الورش المتنقلة بالاتصال بك خلال 15 دقيقة لتأكيد وقت الوصول الدقيق.'
                  : 'A Nacita mobile operations manager will call you within 15 mins to confirm dispatch.'}
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href="tel:19725"
                  className="flex-1 py-2.5 px-4 bg-neutral-900 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isAr ? 'متابعة عبر 19725' : 'Call 19725'}</span>
                </a>
                <button
                  onClick={handleClose}
                  className="flex-1 py-2.5 px-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-xl text-xs font-bold"
                >
                  {isAr ? 'إغلاق' : 'Close'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-neutral-800 mb-2">
                  {isAr ? 'اختر الخدمات المطلوبة بالورشة المتنقلة:' : 'Select Desired On-Site Services:'}
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    'تركيب وترصيص إطارات',
                    'تغيير وفحص بطارية',
                    'تغيير زيت وفلتر',
                    'فحص شامل للسيارة',
                    'ملء نيتروجين',
                    'شحن تكييف فريون'
                  ].map((service) => (
                    <button
                      type="button"
                      key={service}
                      onClick={() => handleToggleService(service)}
                      className={`p-2.5 rounded-lg border text-right font-medium transition-colors ${
                        selectedServices.includes(service)
                          ? 'border-neutral-950 bg-amber-50/60 text-neutral-950 font-bold'
                          : 'border-neutral-200 text-neutral-600 hover:bg-neutral-50'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    {isAr ? 'الاسم الكامل *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={isAr ? 'مثال: كريم حامد' : 'e.g. Karim Hamed'}
                    className="w-full border border-neutral-300 rounded-lg px-3 py-2 text-xs focus:outline-hidden focus:border-neutral-950"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    {isAr ? 'رقم الهاتف *' : 'Phone Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="010XXXXXXXX"
                    className="w-full border border-neutral-300 rounded-lg px-3 py-2 text-xs focus:outline-hidden focus:border-neutral-950 tabular-nums"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    {isAr ? 'نوع وموديل السيارة *' : 'Car Make & Model *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={carModel}
                    onChange={(e) => setCarModel(e.target.value)}
                    placeholder={isAr ? 'مرسيدس C180 / تويوتا كورولا' : 'Mercedes C180 / Corolla'}
                    className="w-full border border-neutral-300 rounded-lg px-3 py-2 text-xs focus:outline-hidden focus:border-neutral-950"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    {isAr ? 'المنطقة التابع لها *' : 'Service Zone *'}
                  </label>
                  <select
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full border border-neutral-300 rounded-lg px-3 py-2 text-xs focus:outline-hidden focus:border-neutral-950"
                  >
                    <option value="التجمع الخامس والقاهرة الجديدة">التجمع الخامس والقاهرة الجديدة</option>
                    <option value="الشيخ زايد و 6 أكتوبر">الشيخ زايد و 6 أكتوبر</option>
                    <option value="المعادي والمقطم">المعادي والمقطم</option>
                    <option value="مصر الجديدة ومدينة نصر">مصر الجديدة ومدينة نصر</option>
                    <option value="المهندسين والدقي والزمالك">المهندسين والدقي والزمالك</option>
                    <option value="الإسكندرية (سموحة / رشدي / سيدي جابر)">الإسكندرية (سموحة / رشدي / سيدي جابر)</option>
                    <option value="العبور والشروق">العبور والشروق</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-800 mb-1">
                  {isAr ? 'العنوان بالتفصيل *' : 'Detailed Address *'}
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder={isAr ? 'الشارع، رقم المبنى، علامة مميزة بجوارك' : 'Street name, building, nearby landmark'}
                  className="w-full border border-neutral-300 rounded-lg px-3 py-2 text-xs focus:outline-hidden focus:border-neutral-950"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    {isAr ? 'التاريخ المفضل' : 'Preferred Date'}
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full border border-neutral-300 rounded-lg px-3 py-2 text-xs focus:outline-hidden focus:border-neutral-950"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    {isAr ? 'الفترة الزمنية' : 'Time Window'}
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full border border-neutral-300 rounded-lg px-3 py-2 text-xs focus:outline-hidden focus:border-neutral-950"
                  >
                    <option value="morning">{isAr ? 'صباحاً (9:00 ص - 1:00 م)' : 'Morning (9 AM - 1 PM)'}</option>
                    <option value="afternoon">{isAr ? 'ظهراً (1:00 م - 5:00 م)' : 'Afternoon (1 PM - 5 PM)'}</option>
                    <option value="evening">{isAr ? 'مساءً (5:00 م - 9:00 م)' : 'Evening (5 PM - 9 PM)'}</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 luxury-gold-gradient text-slate-950 font-black text-xs rounded-xl shadow-md shadow-amber-500/15 hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-1.5"
                >
                  <Truck className="w-4 h-4 text-slate-950" />
                  <span>{isAr ? 'تأكيد إرسال طلب الورشة المتنقلة' : 'Confirm Dispatch Request'}</span>
                  <ArrowIcon className="w-4 h-4 text-slate-950" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
