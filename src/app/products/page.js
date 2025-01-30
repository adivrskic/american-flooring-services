import { client } from '../../lib/sanity';
import FeatureBoxes from "../components/FeatureBoxes";
import ImageRow from '../components/ImageRow';

export const metadata = {
  title: 'Products - American Flooring Services',
  description: 'Our products and the services we offer.',
};

const ProductsPage = async () => {
  const pageData = await client.fetch(`
    *[_type == "page" && slug.current == $slug][0]`, { slug: '/products' });

  const { components = [] } = pageData || {};
  const imageRowData = components.find(item => item._type === 'imageRow');
  const featureBoxesData = components.find(item => item._type === 'featureBoxes');

  return (
    <>
      <ImageRow imageRowData={imageRowData} />
      <FeatureBoxes featureBoxesData={featureBoxesData} />
    </>
  );
};

export default ProductsPage;