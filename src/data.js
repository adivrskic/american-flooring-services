import { FaTools, FaFastForward, FaTree, FaLock, FaPaintRoller, FaPhone } from "react-icons/fa";

export const states = {
  GA: {
    name: "Georgia",
    yearsWorked: 10,
    projectsCompleted: 200,
    squareFtFlooring: 250000,
    commercialProjects: 100,
    residentialProjects: 100,
  },
  MT: {
    name: "Montana",
    yearsWorked: 4,
    projectsCompleted: 80,
    squareFtFlooring: 95000,
    commercialProjects: 20,
    residentialProjects: 60,
  },
  NV: {
    name: "Nevada",
    yearsWorked: 6,
    projectsCompleted: 120,
    squareFtFlooring: 140000,
    commercialProjects: 60,
    residentialProjects: 60,
  },
  AZ: {
    name: "Arizona",
    yearsWorked: 7,
    projectsCompleted: 150,
    squareFtFlooring: 170000,
    commercialProjects: 75,
    residentialProjects: 75,
  },
  TX: {
    name: "Texas",
    yearsWorked: 12,
    projectsCompleted: 300,
    squareFtFlooring: 400000,
    commercialProjects: 150,
    residentialProjects: 150,
  },
  LA: {
    name: "Louisiana",
    yearsWorked: 8,
    projectsCompleted: 180,
    squareFtFlooring: 210000,
    commercialProjects: 90,
    residentialProjects: 90,
  },
  MS: {
    name: "Mississippi",
    yearsWorked: 5,
    projectsCompleted: 100,
    squareFtFlooring: 120000,
    commercialProjects: 40,
    residentialProjects: 60,
  },
  AL: {
    name: "Alabama",
    yearsWorked: 6,
    projectsCompleted: 110,
    squareFtFlooring: 130000,
    commercialProjects: 50,
    residentialProjects: 60,
  },
  FL: {
    name: "Florida",
    yearsWorked: 15,
    projectsCompleted: 350,
    squareFtFlooring: 450000,
    commercialProjects: 200,
    residentialProjects: 150,
  },
  TN: {
    name: "Tennessee",
    yearsWorked: 9,
    projectsCompleted: 190,
    squareFtFlooring: 220000,
    commercialProjects: 95,
    residentialProjects: 95,
  },
  KY: {
    name: "Kentucky",
    yearsWorked: 7,
    projectsCompleted: 130,
    squareFtFlooring: 160000,
    commercialProjects: 60,
    residentialProjects: 70,
  },
  IN: {
    name: "Indiana",
    yearsWorked: 8,
    projectsCompleted: 140,
    squareFtFlooring: 180000,
    commercialProjects: 70,
    residentialProjects: 70,
  },
  VA: {
    name: "Virginia",
    yearsWorked: 9,
    projectsCompleted: 200,
    squareFtFlooring: 240000,
    commercialProjects: 100,
    residentialProjects: 100,
  },
  NC: {
    name: "North Carolina",
    yearsWorked: 10,
    projectsCompleted: 210,
    squareFtFlooring: 260000,
    commercialProjects: 120,
    residentialProjects: 90,
  },
  SC: {
    name: "South Carolina",
    yearsWorked: 8,
    projectsCompleted: 170,
    squareFtFlooring: 200000,
    commercialProjects: 80,
    residentialProjects: 90,
  },
};

export const productImages = [
  { src: "/images/carpettile.jpg", text: "Carpet Tile", subtextItems: [
    'Square', 'Plank', 'Eco-friendly', 'High-traffic', 'Sound absorbing'
  ] },
  { src: "/images/carpet.jpg", text: "Carpet", subtextItems: [
    'Plush', 'Berber', 'Patterned', 'Outdoor', 'Commercial'
  ] },
  { src: "/images/tile.jpg", text: "Tile", subtextItems: [
    'Ceramic', 'Porcelain', 'Hexagonal'
  ]},
  { src: "/images/naturalstone.webp", text: "Natural Stone", subtextItems: [
    'Marble', 'Granite', 'Travertine', 'Slate', 'Limestone'
  ] },
  { src: "/images/vinyl.webp", text: "Vinyl", subtextItems: [
    'LVP', 'LVT', 'Sheet Vinyl', 'Waterproof'
  ] },
];

export const projectImages = [
  { src: "/images/studenthousing.jpg", text: "Student Housing" },
  { src: "/images/multifamily.webp", text: "Multi Family" },
  { src: "/images/assistedliving.jpg", text: "Senior Hospitality" },
];

export const projectSlides = [
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

export const services = [
  {
    icon: <FaTools />,
    title: 'Quality Tools',
    description: 'Our tools are built to last and ensure top-notch performance.',
  },
  {
    icon: <FaFastForward />,
    title: 'Fast Service',
    description: 'We provide quick and reliable service for all your needs.',
  },
  {
    icon: <FaTree />,
    title: 'Eco-Friendly',
    description: 'Committed to sustainable and environmentally friendly solutions.',
  },
  {
    icon: <FaLock />,
    title: 'Secure',
    description: 'Your safety and security are our top priorities.',
  },
  {
    icon: <FaPaintRoller />,
    title: 'Custom Designs',
    description: 'Tailored designs to meet your unique requirements.',
  },
  {
    icon: <FaPhone />,
    title: '24/7 Support',
    description: 'We’re here to assist you anytime, day or night.',
  },
];

export const work = [
  {
    title: 'Student Housing',
    description: 'Designed to handle the high-traffic demands of student living spaces, our flooring solutions offer durability and style. From common areas to dormitories, we ensure easy maintenance and long-lasting performance.',
  },
  {
    title: 'Multi Family',
    description: 'Our flooring options for multi-family residences combine modern aesthetics with robust functionality. We specialize in solutions that enhance shared spaces while withstanding everyday wear and tear, perfect for apartments and condos.',
  },
  {
    title: 'Senior Hospitality',
    description: 'We provide flooring tailored to senior living environments, focusing on safety, comfort, and elegance. Our materials include slip-resistant surfaces and warm designs, ensuring a welcoming and secure atmosphere.',
  }
];
