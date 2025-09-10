import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/CertificationsTesting/PageHero';
import Introduction from '../components/CertificationsTesting/Introduction';
import ServiceBreakdown from '../components/CertificationsTesting/ServiceBreakdown';
import ComplianceStandards from '../components/CertificationsTesting/ComplianceStandards';
import TrustBadgeRow from '../components/CertificationsTesting/TrustBadgeRow';
import CallToAction from '../components/ResidentialElectrical/CallToAction';

const CertificationsTesting: React.FC = () => (
  <>
    <Header />
    <main>
      <PageHero />
      <Introduction />
      <ServiceBreakdown />
      <ComplianceStandards />
      <TrustBadgeRow />
      <CallToAction />
    </main>
    <Footer />
  </>
);

export default CertificationsTesting;
