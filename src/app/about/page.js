
import TwoCol from '../components/TwoCol';
import HeaderList from '../components/HeaderList';

const AboutPage = () => {
  return (
    <>
      <TwoCol 
        imageSrc="/images/team.jpg" 
        heading="Our Story"
        subheading="Our journey as a flooring company has been a relentless pursuit of excellence. With years of experience, we have honed our skills and knowledge to become the foremost experts in our field. We've tackled projects of all sizes and complexities like sprawling commercial spaces, and our unwavering commitment to quality shines through in every inch of the floors we lay. What sets us apart is not just the high-quality materials we use, the cutting-edge technology we employ, or the mastery of our craft. It's our people. Our team of dedicated professionals, from designers to installers, shares a common vision – to deliver flooring solutions that transcend the ordinary and elevate your space to extraordinary."
      />
      <HeaderList 
        header="Exceeding Expectations since 1999"
        subheader="Our certifications"
        items={[
          'Ceramic Tile Education Foundation (CTEF)',
          'Ceramic Tile & Stone (CTS)',
          'Commercial Flooring Inspection (FCITS)',
          'Commercial Installation Management (FCICA)',
        ]}
      />
    </>
  );
};

export default AboutPage;