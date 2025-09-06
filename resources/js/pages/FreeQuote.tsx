
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/FreeQuote/PageHero';
import ContactForm from '../components/FreeQuote/ContactForm';
import ContactInfo from '../components/FreeQuote/ContactInfo';
import TrustStatement from '../components/FreeQuote/TrustStatement';
import FinalCallToAction from '../components/FreeQuote/FinalCallToAction';

const FreeQuote: React.FC = () => (
  <>
    <Header />
    <main>
      <PageHero />
      <ContactForm />
      <ContactInfo />
      <TrustStatement />
      <FinalCallToAction />
    </main>
    <Footer />
  </>
);

export default FreeQuote;
