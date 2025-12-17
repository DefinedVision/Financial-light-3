import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesOverviewPage } from './pages/ServicesOverviewPage';
import { CertificationsPage } from './pages/CertificationsPage';
import { ContactPage } from './pages/ContactPage';
import { PricingPage } from './pages/PricingPage';
import { BoekhoudingPage } from './components/services/BoekhoudingPage';
import { BelastingaangiftePage } from './components/services/BelastingaangiftePage';
import { LoonadministratiePage } from './components/services/LoonadministratiePage';
import { FinancieelAdviesPage } from './components/services/FinancieelAdviesPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function AppContent() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services-overview" element={<ServicesOverviewPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        
        {/* Nederlandse paden */}
        <Route path="/diensten/boekhouding" element={<BoekhoudingPage />} />
        <Route path="/diensten/belastingaangifte" element={<BelastingaangiftePage />} />
        <Route path="/diensten/loonadministratie" element={<LoonadministratiePage />} />
        <Route path="/diensten/financieel-advies" element={<FinancieelAdviesPage />} />
        
        {/* Engelse paden */}
        <Route path="/services/bookkeeping" element={<BoekhoudingPage />} />
        <Route path="/services/tax-returns" element={<BelastingaangiftePage />} />
        <Route path="/services/payroll-administration" element={<LoonadministratiePage />} />
        <Route path="/services/financial-advice" element={<FinancieelAdviesPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </BrowserRouter>
  );
}