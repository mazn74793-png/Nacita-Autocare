import React, { useState } from 'react';
import { AppProvider } from './context/AppContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TireCatalog } from './components/TireCatalog';
import { ServicesSection } from './components/ServicesSection';
import { MobileWorkshopSpotlight } from './components/MobileWorkshopSpotlight';
import { TrustSection } from './components/TrustSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { CartDrawer } from './components/CartDrawer';
import { MobileBookingModal } from './components/MobileBookingModal';
import { BranchLocatorModal } from './components/BranchLocatorModal';
import { ServiceBookingModal } from './components/ServiceBookingModal';
import { TireDetailModal } from './components/TireDetailModal';

const MainContent: React.FC = () => {
  const [filterWidth, setFilterWidth] = useState<number | null>(null);
  const [filterAspect, setFilterAspect] = useState<number | null>(null);
  const [filterRim, setFilterRim] = useState<number | null>(null);

  const handleHeroFilter = (w: number | null, a: number | null, r: number | null) => {
    setFilterWidth(w);
    setFilterAspect(a);
    setFilterRim(r);
  };

  const handleResetFilters = () => {
    setFilterWidth(null);
    setFilterAspect(null);
    setFilterRim(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 selection:bg-amber-400 selection:text-neutral-950">
      <Header />
      <main className="flex-1 pb-20 lg:pb-0">
        <Hero onFilterTires={handleHeroFilter} />
        <TireCatalog
          filterWidth={filterWidth}
          filterAspect={filterAspect}
          filterRim={filterRim}
          onResetFilters={handleResetFilters}
        />
        <ServicesSection />
        <MobileWorkshopSpotlight />
        <TrustSection />
        <ReviewsSection />
      </main>
      <Footer />

      {/* Floating Bottom Nav for Mobile Phones */}
      <MobileBottomNav />

      {/* Global Interactive Overlays */}
      <CartDrawer />
      <MobileBookingModal />
      <BranchLocatorModal />
      <ServiceBookingModal />
      <TireDetailModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
