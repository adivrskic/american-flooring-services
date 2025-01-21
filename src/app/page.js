import Banner from './components/Banner';
import CTA from './components/CTA';
import ImageRow from './components/ImageRow';
import GoogleMap from './components/GoogleMap';
import Logos from './components/Logos';
import Contact from './components/Contact';

export default function HomePage() {
  return (
    <div>
      <Banner />
      <CTA />
      <ImageRow />
      <GoogleMap />
      <Logos />
      <Contact />
    </div>
  );
}