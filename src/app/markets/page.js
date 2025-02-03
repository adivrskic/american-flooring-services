import { client } from '../../lib/sanity';

import USMap from '../components/USMap';
import SubcontractorApplicationForm from '../components/SubcontractorApplicationForm';

export const metadata = {
  title: 'Markets - American Flooring Services',
  description: 'Flooring projects in over 15 states and counting.',
};

const MarketsPage = async () => {
  const pageData = await client.fetch(`
    *[_type == "page" && slug.current == $slug][0]`, { slug: '/markets' });

  const { components = [] } = pageData || {};

  const formattedData = components.reduce((acc, state) => {
    acc[state.abbreviation] = {
        name: state.name,
        yearsWorked: state.yearsWorked,
        projectsCompleted: state.projectsCompleted,
        residentialProjects: state.residentialProjects,
        commercialProjects: state.commercialProjects,
        squareFtFlooring: state.squareFtFlooring
    };
    return acc;
}, {});

  return (
    <>
      <USMap states={formattedData} />
      <SubcontractorApplicationForm />
    </>

  );
};

export default MarketsPage;