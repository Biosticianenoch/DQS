import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Helmet } from 'react-helmet';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Index from '@/pages/Index';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Courses from '@/pages/Courses';
import Team from '@/pages/Team';
import Blog from '@/pages/Blog';
import Contact from '@/pages/Contact';
import Consulting from '@/pages/Consulting';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import Terms from '@/pages/Terms';
import CookiePolicy from '@/pages/CookiePolicy';
import WhatsAppButton from './components/WhatsAppButton';
import { Web3Provider } from '@/contexts/Web3Context';
import { Toaster } from '@/components/ui/toaster';
import Analytics from '@/pages/Analytics';
import Resources from '@/pages/Resources';
import HealthcareCaseStudy from '@/pages/case-studies/Healthcare';
import RetailCaseStudy from '@/pages/case-studies/Retail';
import FinancialCaseStudy from '@/pages/case-studies/Financial';
import CaseStudiesIndex from '@/pages/case-studies/index';

const App = () => {
  return (
    <ErrorBoundary>
      <Web3Provider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Helmet>
              <title>Data Quest Solutions - Data Science & Analytics Services</title>
              <meta name="description" content="Expert data science services, training, and consulting to help you make data-driven decisions." />
            </Helmet>
            <Navigation />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/team" element={<Team />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/consulting" element={<Consulting />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/case-studies" element={<CaseStudiesIndex />} />
                <Route path="/case-studies/healthcare" element={<HealthcareCaseStudy />} />
                <Route path="/case-studies/retail" element={<RetailCaseStudy />} />
                <Route path="/case-studies/financial" element={<FinancialCaseStudy />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <WhatsAppButton />
            <Footer />
          </div>
          <Toaster />
        </Router>
      </Web3Provider>
    </ErrorBoundary>
  );
};

export default App;
