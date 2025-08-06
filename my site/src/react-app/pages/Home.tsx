import Hero from '@/react-app/components/Hero';
import Products from '@/react-app/components/Products';
import Benefits from '@/react-app/components/Benefits';
import Testimonials from '@/react-app/components/Testimonials';
import Contact from '@/react-app/components/Contact';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Products />
      <Benefits />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
