import { client } from '../../lib/sanity';
import ImageRow from "../components/ImageRow";

export const metadata = {
  title: 'Portfolio - American Flooring Services',
  description: 'Our residential and commercial work portfolio.',
};

const PortfolioPage = async () => {
  const pageData = await client.fetch(`
    *[_type == "page" && slug.current == $slug][0]`, { slug: '/portfolio' });

  const { components = [] } = pageData || {};
  const imageRowData = components.find(item => item._type === 'imageRow');
  const featureBoxesData = components.filter(item => item._type === 'featureBoxes');

  return (
    <ImageRow imageRowData={imageRowData} featureBoxesData={featureBoxesData} />
  );
};

export default PortfolioPage;