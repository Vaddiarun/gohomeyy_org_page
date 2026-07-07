import Navbar from './components/Navbar';
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

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Chefs />
        <Fuel />
        <SocialTables />
        <Pantry />
        <Testimonials />
        <BecomeChef />
        <Download />
      </main>
      <Footer />
    </>
  );
}
