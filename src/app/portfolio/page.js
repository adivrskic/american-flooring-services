import ImageRow from "../components/ImageRow";

export const metadata = {
  title: 'Portfolio - American Flooring Services',
  description: 'Our residential and commercial work portfolio.',
};

const images = [
  { src: "/images/studenthousing.jpg", text: "Student Housing" },
  { src: "/images/multifamily.jpg", text: "Multi Family" },
  { src: "/images/assistedliving.jpg", text: "Senior Hospitality" },
];

const slides = [
  {
    mainImage: { src: '/images/studenthousing.jpg', alt: 'Student Housing' },
    gallery: [
      { src: '/images/floor1.jpg', alt: 'Gallery 1' },
      { src: '/images/floor2.jpg', alt: 'Gallery 2' },
      { src: '/images/floor3.jpg', alt: 'Gallery 3' },
    ],
    header: 'Student Housing',
    text: 'Designed to withstand the demands of high-traffic areas, our flooring solutions for student housing combine durability with modern aesthetics to create inviting, functional spaces.',
  },
  {
    mainImage: { src: '/images/multifamily.jpg', alt: 'Multi Family Homes' },
    gallery: [
      { src: '/images/floor4.jpg', alt: 'Gallery 4' },
      { src: '/images/floor5.jpg', alt: 'Gallery 5' },
      { src: '/images/floor6.jpg', alt: 'Gallery 6' },
    ],
    header: 'Multi Family Homes',
    text: 'Our flooring options for multi-family homes provide the perfect blend of style and practicality, offering water resistance, easy maintenance, and a modern finish for shared spaces.',
  },
  {
    mainImage: { src: '/images/assistedliving.jpg', alt: 'Senior Hospitality Centers' },
    gallery: [
      { src: '/images/floor7.jpg', alt: 'Gallery 7' },
      { src: '/images/floor8.jpg', alt: 'Gallery 8' },
      { src: '/images/floor9.jpg', alt: 'Gallery 9' },
    ],
    header: 'Senior Hospitality Centers',
    text: 'Tailored for senior living environments, our flooring enhances safety and comfort while delivering timeless beauty and long-lasting performance for hospitality spaces.',
  },
  
];

const PortfolioPage = () => {
  return (
    <ImageRow images={images} slides={slides} />
  );
};

export default PortfolioPage;