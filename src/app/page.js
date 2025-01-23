import Banner from './components/Banner';
import CTA from './components/CTA';
import ImageRow from './components/ImageRow';
import GoogleMap from './components/GoogleMap';
import Logos from './components/Logos';
import Contact from './components/Contact';

const images = [
  { src: "/images/carpettile.jpg", text: "Carpet Tile" },
  { src: "/images/carpet.jpg", text: "Carpet" },
  { src: "/images/tile.jpg", text: "Tile" },
  { src: "/images/naturalstone.webp", text: "Natural Stone" },
  { src: "/images/vinyl.webp", text: "Vinyl" },
];

export default function HomePage() {
  return (
    <div>
      <Banner />
      <CTA />
      <ImageRow images={images} />
      <GoogleMap />
      <Logos />
      <Contact />
    </div>
  );
}