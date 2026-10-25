import React, { createContext, useContext, useState, useEffect } from 'react';
import { TireProduct, ServiceItem, ServiceCenter, TIRE_PRODUCTS } from '../data/nacitaData';

export type Language = 'ar' | 'en';

export interface CartItem {
  product: TireProduct;
  quantity: number;
  installationOption: 'branch' | 'mobile_van' | 'delivery_only';
}

export interface BookingRequest {
  type: 'mobile_workshop' | 'branch_visit' | 'service';
  serviceId?: string;
  serviceName?: string;
  branchId?: string;
  customerName: string;
  phone: string;
  carModel: string;
  cityArea: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}

interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  dir: 'rtl' | 'ltr';
  cart: CartItem[];
  addToCart: (product: TireProduct, quantity?: number, installationOption?: CartItem['installationOption']) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, qty: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isMobileBookingOpen: boolean;
  setIsMobileBookingOpen: (open: boolean) => void;
  isBranchModalOpen: boolean;
  setIsBranchModalOpen: (open: boolean) => void;
  isServiceBookingOpen: boolean;
  setIsServiceBookingOpen: (open: boolean) => void;
  selectedServiceForBooking: ServiceItem | null;
  openBookingForService: (service: ServiceItem) => void;
  selectedTireForDetail: TireProduct | null;
  setSelectedTireForDetail: (tire: TireProduct | null) => void;
  cartTotal: number;
  totalSavings: number;
  totalItemCount: number;
  bookingSuccess: { id: string; details: BookingRequest } | null;
  setBookingSuccess: (info: { id: string; details: BookingRequest } | null) => void;
  submitBooking: (booking: BookingRequest) => Promise<string>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>('ar');
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('nacita_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileBookingOpen, setIsMobileBookingOpen] = useState(false);
  const [isBranchModalOpen, setIsBranchModalOpen] = useState(false);
  const [isServiceBookingOpen, setIsServiceBookingOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<ServiceItem | null>(null);
  const [selectedTireForDetail, setSelectedTireForDetail] = useState<TireProduct | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState<{ id: string; details: BookingRequest } | null>(null);

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  useEffect(() => {
    try {
      localStorage.setItem('nacita_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
  };

  const addToCart = (product: TireProduct, quantity = 1, installationOption: CartItem['installationOption'] = 'branch') => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { product, quantity, installationOption }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity: qty } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const openBookingForService = (service: ServiceItem) => {
    if (service.id === 'mobile-workshop') {
      setIsMobileBookingOpen(true);
    } else {
      setSelectedServiceForBooking(service);
      setIsServiceBookingOpen(true);
    }
  };

  const cartTotal = cart.reduce((acc, item) => acc + item.product.currentPrice * item.quantity, 0);
  const totalSavings = cart.reduce((acc, item) => acc + item.product.savings * item.quantity, 0);
  const totalItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const submitBooking = async (booking: BookingRequest): Promise<string> => {
    const confirmationId = `NAC-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingSuccess({ id: confirmationId, details: booking });
    return confirmationId;
  };

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        dir,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        isMobileBookingOpen,
        setIsMobileBookingOpen,
        isBranchModalOpen,
        setIsBranchModalOpen,
        isServiceBookingOpen,
        setIsServiceBookingOpen,
        selectedServiceForBooking,
        openBookingForService,
        selectedTireForDetail,
        setSelectedTireForDetail,
        cartTotal,
        totalSavings,
        totalItemCount,
        bookingSuccess,
        setBookingSuccess,
        submitBooking
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
