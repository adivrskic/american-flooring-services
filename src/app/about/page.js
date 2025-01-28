import TwoCol from "../components/TwoCol";
import HeaderList from "../components/HeaderList";
import { client, urlFor } from '../../lib/sanity'; // Sanity client
export const metadata = {
  title: "About Us - American Flooring Services",
  description: "Learn more about our journey as a flooring company.",
};

const AboutPage = async () => {
  const aboutData = await client.fetch(`
    *[_type == "about"][0] // Fetch the first document of type "about"
  `);

  const imageUrl = bannerData?.image ? urlFor(bannerData.image).url() : null;
  

  return (
    <>
      <TwoCol
        imageSrc={imageUrl}
        heading={aboutData?.heading}
        subheading={aboutData?.subheading}
      />
      <HeaderList
        header="Exceeding Expectations since 1999"
        subheader="Our certifications"
        items={[
          "Ceramic Tile Education Foundation (CTEF)",
          "Ceramic Tile & Stone (CTS)",
          "Commercial Flooring Inspection (FCITS)",
          "Commercial Installation Management (FCICA)",
        ]}
      />
    </>
  );
};

export default AboutPage;
