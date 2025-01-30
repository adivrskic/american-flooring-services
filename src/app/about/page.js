import TwoCol from "../components/TwoCol";
import HeaderList from "../components/HeaderList";
import { client, urlFor } from '../../lib/sanity'; // Sanity client
export const metadata = {
  title: "About Us - American Flooring Services",
  description: "Learn more about our journey as a flooring company.",
};

const AboutPage = async () => {
  const pageData = await client.fetch(`
    *[_type == "page" && slug.current == $slug][0]`, { slug: '/about' });

  const { components = [] } = pageData || {};
  const twoColData = components.find(item => item._type === 'twoCol');
  const headerListData = components.find(item => item._type === 'headerList');
  console.log(twoColData, headerListData);

  return (
    <>
      <TwoCol twoColData={twoColData} />
      <HeaderList headerListData={headerListData} />
    </>
  );
};

export default AboutPage;
