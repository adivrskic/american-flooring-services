import ImageRow from "../components/ImageRow";
import { projectImages, projectSlides } from '../../data';

export const metadata = {
  title: 'Portfolio - American Flooring Services',
  description: 'Our residential and commercial work portfolio.',
};

const PortfolioPage = () => {
  return (
    <ImageRow images={projectImages} slides={projectSlides} />
  );
};

export default PortfolioPage;