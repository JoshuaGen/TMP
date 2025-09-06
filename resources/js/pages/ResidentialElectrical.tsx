
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/ResidentialElectrical/PageHero';
import Introduction from '../components/ResidentialElectrical/Introduction';
import ServicesGrid from '../components/ResidentialElectrical/ServicesGrid';
import BuilderClientFocus from '../components/ResidentialElectrical/BuilderClientFocus';
import CallToAction from '../components/ResidentialElectrical/CallToAction';

const ResidentialElectrical: React.FC = () => (
  <>
    <Header />
    <main>
      <PageHero />
      <Introduction />
      <ServicesGrid />
      <BuilderClientFocus />
      <CallToAction />
    </main>
    <Footer />
  </>
);

export default ResidentialElectrical;
