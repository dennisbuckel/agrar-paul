import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  return (
    <main className="min-h-screen">
      <StructuredData />
      <Header />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
