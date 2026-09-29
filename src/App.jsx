import React from 'react';
import { HydrationProvider, useHydration } from './context/HydrationContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScreenSwitcher from './components/ScreenSwitcher';

// Pages converted from Stitch subfolders
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import NutritionistProfile from './pages/NutritionistProfile';
import HydrationCalculator from './pages/HydrationCalculator';
import HydrationResult from './pages/HydrationResult';
import DailyPlan from './pages/DailyPlan';
import Insights from './pages/Insights';
import Contact from './pages/Contact';

function MainRouter() {
  const { currentScreen } = useHydration();

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <Home />;
      case 'about':
        return <AboutUs />;
      case 'dr-maya':
        return <NutritionistProfile />;
      case 'calculator':
        return <HydrationCalculator />;
      case 'result':
        return <HydrationResult />;
      case 'daily-plan':
        return <DailyPlan />;
      case 'insights':
        return <Insights />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0f1417] text-[#dfe3e7] selection:bg-[#41e4c0] selection:text-[#0A192F]">
      <Navbar />
      <div className="flex-grow">
        {renderScreen()}
      </div>
      <Footer />
      <ScreenSwitcher />
    </div>
  );
}

export default function App() {
  return (
    <HydrationProvider>
      <MainRouter />
    </HydrationProvider>
  );
}
