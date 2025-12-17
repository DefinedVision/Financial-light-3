import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { Certifications } from '../components/Certifications';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Certifications />
      <Contact />
    </>
  );
}
