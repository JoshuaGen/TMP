
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/TestimonialsCaseStudies/PageHero';
import TestimonialsCarousel from '../components/TestimonialsCaseStudies/TestimonialsCarousel';
import CaseStudies from '../components/TestimonialsCaseStudies/CaseStudies';
import TrustSignals from '../components/TestimonialsCaseStudies/TrustSignals';
import CallToAction from '../components/TestimonialsCaseStudies/CallToAction';

const TestimonialsCaseStudies: React.FC = () => (
  <>
    <Header />
    <main>
      <PageHero />
      <TestimonialsCarousel />
      <CaseStudies />
      <TrustSignals />
      <CallToAction />
    </main>
    <Footer />
  </>
);

export default TestimonialsCaseStudies;
