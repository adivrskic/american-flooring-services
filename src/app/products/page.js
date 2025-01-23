
import FeatureBoxes from "../components/FeatureBoxes";
import ImageRow from '../components/ImageRow';

export const metadata = {
  title: 'Products - American Flooring Services',
  description: 'Our products and services we offer.',
};

const images = [
  { src: "/images/carpettile.jpg", text: "Carpet Tile" },
  { src: "/images/carpet.jpg", text: "Carpet" },
  { src: "/images/tile.jpg", text: "Tile" },
  { src: "/images/naturalstone.webp", text: "Natural Stone" },
  { src: "/images/vinyl.webp", text: "Vinyl" },
];

const ProductsPage = () => {
  return (
    <>
      <ImageRow images={images}/>
      <FeatureBoxes />
    </>
  );
};

export default ProductsPage;