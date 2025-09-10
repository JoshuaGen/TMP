import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/Projects/PageHero';
import ProjectGallery from '../components/Projects/ProjectGallery';
import FeaturedProjects from '../components/Projects/FeaturedProjects';
import ImageCaptions from '../components/Projects/ImageCaptions';
import Testimonials from '../components/landing-page/Testimonials';
import CallToAction from '../components/ResidentialElectrical/CallToAction';

const Projects: React.FC = () => (
  <>
    <Header />
    <main>
      <PageHero />
      <ProjectGallery />
      <FeaturedProjects />
      <ImageCaptions />
      <Testimonials />
      <CallToAction />
    </main>
    <Footer />
  </>
);

export default Projects;
