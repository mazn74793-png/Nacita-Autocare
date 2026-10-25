import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SERVICE_CENTERS, ServiceItem } from '../data/nacitaData';
import { X, Calendar, Clock, MapPin, CheckCircle, PhoneCall, ArrowRight, ArrowLeft, Wrench } from 'lucide-react';

export const ServiceBookingModal: React.FC = () => {
  const {
    lang,
    isServiceBookingOpen,
    setIsServiceBookingOpen,
    selectedServiceForBooking,
    submitBooking
  } = useApp();

  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [carModel, setCarModel] = useState('');
  const [selectedBranchId, setSelectedBranchId] = useState('el-obour');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('11:00 AM');
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  if (!isServiceBookingOpen) return null;

  const serviceTitle = selectedServiceForBooking
    ? isAr
      ? selectedServiceForBooking.name
      : selectedServiceForBooking.nameEn
    : isAr
    ? 'حجز خدمة سيارات'
    : 'Auto Service Booking';

  const priceNote = selectedServiceForBooking
    ? isAr
      ? selectedServiceForBooking.priceNoteAr
      : selectedServiceForBooking.priceNoteEn
    : '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const branch = SERVICE_CENTERS.find((b) => b.id === selectedBranchId);
    const ref = await submitBooking({
      type: 'branch_visit',
      serviceId: selectedServiceForBooking?.id,
      serviceName: serviceTitle,
      branchId: selectedBranchId,
      customerName: name,
      phone,
      carModel,
      cityArea: branch ? (isAr ? branch.nameAr : branch.nameEn) : 'فرع ناسيتا',
      preferredDate: date || 'أقرب وقت متاح',
      preferredTime: time
    });
    setSubmittedRef(ref);
  };

  const handleClose = () => {
    setIsServiceBookingOpen(false);
    setSubmittedRef(null);
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
        {/* Header with Mobile Drag Handle */}
        <div className="bg-[#090d16] text-white p-4 sm:p-5 flex flex-col border-b border-amber-500/20">
          <div className="w-10 h-1 bg-slate-700 rounded-full mx-auto mb-2 sm:hidden" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl luxury-gold-gradient text-slate-950 flex items-center justify-center shrink-0 shadow-sm shadow-amber-500/20">
                <Wrench className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white leading-none">{serviceTitle}</h3>
                <p className="text-[11px] text-amber-300 mt-1 font-semibold">{priceNote}</p>
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
          {submittedRef ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-neutral-900">
                  {isAr ? 'تم تأكيد حجز الموعد بنجاح!' : 'Appointment Confirmed!'}
                </h4>
                <p className="text-xs text-neutral-500 mt-1">
                  {isAr ? `كود الحجز: ${submittedRef}` : `Booking Code: ${submittedRef}`}
                </p>
              </div>

              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4 text-xs text-neutral-700 text-left space-y-2">
                <div className="flex justify-between">
                  <span>{isAr ? 'الخدمة:' : 'Service:'}</span>
                  <span className="font-bold text-neutral-900">{serviceTitle}</span>
                </div>
                <div className="flex justify-between">
                  <span>{isAr ? 'الفرع المختار:' : 'Branch:'}</span>
                  <span className="font-bold text-neutral-900">
                    {SERVICE_CENTERS.find((b) => b.id === selectedBranchId)?.nameAr}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>{isAr ? 'العميل:' : 'Customer:'}</span>
                  <span className="font-bold text-neutral-900">{name}</span>
                </div>
                <div className="flex justify-between">
                  <span>{isAr ? 'الموعد:' : 'Slot:'}</span>
                  <span className="font-bold text-neutral-900">{date || 'اليوم'} - {time}</span>
                </div>
              </div>

              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 text-right">
                {isAr
                  ? 'تم إرسال بيانات الموعد لمهندس الاستقبال بالفرع، وسيكون مكان الصيانة جاهزاً عند وصولك بدون انتظار.'
                  : 'Your booking has been received by the branch chief engineer for zero-wait reception.'}
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href="tel:19725"
                  className="flex-1 py-2.5 px-4 bg-neutral-900 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isAr ? 'اتصل 19725' : 'Call 19725'}</span>
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
              <div>
                <label className="block text-xs font-bold text-neutral-800 mb-1">
                  {isAr ? 'اختر مركز الخدمة الأقرب إليك *' : 'Select Nearest Center *'}
                </label>
                <select
                  value={selectedBranchId}
                  onChange={(e) => setSelectedBranchId(e.target.value)}
                  className="w-full border border-neutral-300 rounded-lg px-3 py-2 text-xs focus:outline-hidden focus:border-neutral-950 font-semibold"
                >
                  {SERVICE_CENTERS.map((branch) => (
                    <option key={branch.id} value={branch.id}>
                      {isAr ? branch.nameAr : branch.nameEn}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    {isAr ? 'الاسم بالكامل *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={isAr ? 'مثال: محمود الشريف' : 'e.g. Mahmoud El Sherif'}
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

              <div>
                <label className="block text-xs font-bold text-neutral-800 mb-1">
                  {isAr ? 'نوع وموديل وسنة صنع السيارة *' : 'Vehicle Make, Model & Year *'}
                </label>
                <input
                  type="text"
                  required
                  value={carModel}
                  onChange={(e) => setCarModel(e.target.value)}
                  placeholder={isAr ? 'كيا سبورتاج 2022 / هيونداي النترا' : 'Kia Sportage 2022 / Elantra'}
                  className="w-full border border-neutral-300 rounded-lg px-3 py-2 text-xs focus:outline-hidden focus:border-neutral-950"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    {isAr ? 'اليوم المفضل' : 'Preferred Date'}
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
                    {isAr ? 'الساعة' : 'Time'}
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full border border-neutral-300 rounded-lg px-3 py-2 text-xs focus:outline-hidden focus:border-neutral-950"
                  >
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="01:00 PM">01:00 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="05:30 PM">05:30 PM</option>
                    <option value="07:30 PM">07:30 PM</option>
                    <option value="09:00 PM">09:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 luxury-gold-gradient text-slate-950 font-black text-xs rounded-xl shadow-md shadow-amber-500/15 hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-4 h-4 text-slate-950" />
                  <span>{isAr ? 'تأكيد حجز الموعد بالفرع' : 'Confirm Branch Slot'}</span>
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
