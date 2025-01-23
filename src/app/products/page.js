
import FeatureBoxes from "../components/FeatureBoxes";
import ImageRow from '../components/ImageRow';

export const metadata = {
  title: 'Products - American Flooring Services',
  description: 'Our products and services we offer.',
};

const ProductsPage = () => {
  return (
    <>
      <ImageRow />
      <FeatureBoxes />
    </>
  );
};

export default ProductsPage;