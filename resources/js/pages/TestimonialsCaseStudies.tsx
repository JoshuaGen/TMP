import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/TestimonialsCaseStudies/PageHero';
import CaseStudies from '../components/TestimonialsCaseStudies/CaseStudies';
import TrustSignals from '../components/TestimonialsCaseStudies/TrustSignals';
import Testimonials from '../components/landing-page/Testimonials';
import CallToAction from '../components/ResidentialElectrical/CallToAction';

const TestimonialsCaseStudies: React.FC = () => (
  <>
    <Header />
    <main>
      <PageHero />
      <Testimonials />
      <CaseStudies />
      <TrustSignals />
      <CallToAction />
    </main>
    <Footer />
  </>
);

export default TestimonialsCaseStudies;
