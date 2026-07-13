import Navbar from './components/Navbar';
import BrandIntro from './components/BrandIntro';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Chefs from './components/Chefs';
import Fuel from './components/Fuel';
import SocialTables from './components/SocialTables';
import Pantry from './components/Pantry';
import Testimonials from './components/Testimonials';
import BecomeChef from './components/BecomeChef';
import Download from './components/Download';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';

export default function App() {
  const isPrivacyPage = window.location.pathname === '/privacy';

  return (
    <>
      <Navbar />
      <main>
        {isPrivacyPage ? (
          <PrivacyPolicy />
        ) : (
          <>
            <BrandIntro />
            <Hero />
            <HowItWorks />
            <Chefs />
            <Fuel />
            <SocialTables />
            <Pantry />
            <Testimonials />
            <BecomeChef />
            <Download />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
