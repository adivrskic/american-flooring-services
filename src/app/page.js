import { client } from '../lib/sanity';

import Banner from './components/Banner';
import CTA from './components/CTA';
import ImageRow from './components/ImageRow';
import GoogleMap from './components/GoogleMap';
import Logos from './components/Logos';
import Contact from './components/Contact';
import SubcontractorApplicationForm from './components/SubcontractorApplicationForm';
import FeatureBoxes from './components/FeatureBoxes';

export default async function HomePage() {
  const pageData = await client.fetch(`
    *[_type == "page" && slug.current == $slug][0]`, { slug: '/' });

  const { components = [] } = pageData || {};

  const bannerData = components.find(item => item._type === 'banner');
  const ctaData = components.find(item => item._type === 'centeredCTA');
  const imageRowData = components.find(item => item._type === 'imageRow');
  const googleMapData = components.find(item => item._type === 'googleMap');
  const featureBoxesData = components.find(item => item._type === 'featureBoxes');
  const logosData = components.find(item => item._type === 'logos');

  return (
    <div>
      <Banner bannerData={bannerData} />
      <CTA ctaData={ctaData} />
      <ImageRow imageRowData={imageRowData}/>
      <SubcontractorApplicationForm />
      <GoogleMap googleMapData={googleMapData} />
      <FeatureBoxes featureBoxesData={featureBoxesData} />
      <Logos logosData={logosData} />
      <Contact />
    </div>
  );
}