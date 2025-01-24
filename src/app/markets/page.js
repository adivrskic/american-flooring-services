import USMap from '../components/USMap';
import SubcontractorApplicationForm from '../components/SubcontractorApplicationForm';

export const metadata = {
  title: 'Markets - American Flooring Services',
  description: 'Flooring projects in over 15 states and counting.',
};

const MarketsPage = () => {
  return (
    <>
      <USMap />
      <SubcontractorApplicationForm />
    </>

  );
};

export default MarketsPage;