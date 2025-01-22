import Slideshow from "../components/Slideshow";

const slides = [
  {
    mainImage: { src: '/images/floor1.jpg', alt: 'Flooring 1' },
    gallery: [
      { src: '/images/floor1.jpg', alt: 'Gallery 1' },
      { src: '/images/floor2.jpg', alt: 'Gallery 2' },
      { src: '/images/floor3.jpg', alt: 'Gallery 3' },
    ],
    header: 'Modern Hardwood Flooring',
    text: 'This premium hardwood flooring brings elegance and durability to your home.',
  },
  {
    mainImage: { src: '/images/floor4.jpg', alt: 'Flooring 2' },
    gallery: [
      { src: '/images/floor4.jpg', alt: 'Gallery 4' },
      { src: '/images/floor5.jpg', alt: 'Gallery 5' },
      { src: '/images/floor6.jpg', alt: 'Gallery 6' },
    ],
    header: 'Luxury Vinyl Plank',
    text: 'Perfect for a modern look with exceptional water resistance.',
  },
  {
    mainImage: { src: '/images/floor7.jpg', alt: 'Flooring 3' },
    gallery: [
      { src: '/images/floor7.jpg', alt: 'Gallery 7' },
      { src: '/images/floor8.jpg', alt: 'Gallery 8' },
      { src: '/images/floor9.jpg', alt: 'Gallery 9' },
    ],
    header: 'Classic Tile Designs',
    text: 'Add a timeless aesthetic to your spaces with our high-quality tiles.',
  },
];

const PortfolioPage = () => {
  return (
    <Slideshow slides={slides} />

  );
};

export default PortfolioPage;