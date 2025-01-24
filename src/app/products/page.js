
import FeatureBoxes from "../components/FeatureBoxes";
import ImageRow from '../components/ImageRow';
import { productImages, services } from '../../data';

export const metadata = {
  title: 'Products - American Flooring Services',
  description: 'Our products and the services we offer.',
};

const ProductsPage = () => {
  return (
    <>
      <ImageRow images={productImages} />
      <FeatureBoxes features={services} />
    </>
  );
};

export default ProductsPage;