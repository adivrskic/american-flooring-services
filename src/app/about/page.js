import TwoCol from "../components/TwoCol";
import HeaderList from "../components/HeaderList";

export const metadata = {
  title: "About Us - American Flooring Services",
  description: "Learn more about our journey as a flooring company.",
};

const AboutPage = () => {
  return (
    <>
      <TwoCol
        imageSrc="/images/team.jpg"
        heading="Our Story"
        subheading="
          With years of experience, we have honed our skills and knowledge to become experts in our field. 
          We've tackled projects of all sizes and complexities, and our unwavering commitment to quality shines through in every inch of the floors we lay. 
          What sets us apart is our people. Our team of professionals, from designers to installers, shares a common vision – to deliver flooring solutions that transcend the ordinary and elevate your space to extraordinary."
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
