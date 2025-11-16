import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Expertise from './pages/Expertise';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [serviceId, setServiceId] = useState<string | null>(null);

  const handleNavigate = (page: string, serviceIdParam?: string) => {
    setCurrentPage(page);
    if (serviceIdParam) {
      setServiceId(serviceIdParam);
    } else {
      setServiceId(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'expertise':
        return <Expertise onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact />;
      case 'service-detail':
        return serviceId ? (
          <ServiceDetail serviceId={serviceId} onNavigate={handleNavigate} />
        ) : (
          <Home onNavigate={handleNavigate} />
        );
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
