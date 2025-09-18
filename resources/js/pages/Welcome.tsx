
import { Head } from '@inertiajs/react';


import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/landing-page/HeroSection';
import HomeSEO from '../components/landing-page/HomeSEO';
import USPSection from '../components/landing-page/USPSection';
import ServiceOverview from '../components/landing-page/ServiceOverview';
import Testimonials from '../components/landing-page/Testimonials';
import LocationFocus from '../components/landing-page/LocationFocus';
import GetQuoteSection from '../components/landing-page/GetQuoteSection';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <Header />
            <main>
                <HeroSection />
                <USPSection />
                <ServiceOverview />
                <HomeSEO />
                <Testimonials />
                <LocationFocus />
                <GetQuoteSection />
            </main>
            <Footer />
        </>
    );
}
