import Banner from './components/Banner';
import CTA from './components/CTA';
import ImageRow from './components/ImageRow';
import GoogleMap from './components/GoogleMap';
import Logos from './components/Logos';
import Contact from './components/Contact';
import SubcontractorApplicationForm from './components/SubcontractorApplicationForm';
import FeatureBoxes from './components/FeatureBoxes';
import { productImages, work } from '../data';

export default function HomePage() {
  return (
    <div>
      <Banner />
      <CTA />
      <ImageRow images={productImages} />
      <SubcontractorApplicationForm />
      <GoogleMap />
      <FeatureBoxes features={work} link linkHref={'/portfolio'} />
      <Logos />
      <Contact />
    </div>
  );
}