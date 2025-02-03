export default {
  name: "usState",
  title: "US State",
  type: "document",
  fields: [
    {
      name: "name",
      title: "State Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "abbreviation",
      title: "State Abbreviation",
      type: "string",
      validation: (Rule) => Rule.required().length(2),
    },
    {
      name: "yearsWorked",
      title: "Years Worked",
      type: "number",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "projectsCompleted",
      title: "Projects Completed",
      type: "number",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "squareFtFlooring",
      title: "Square Ft Flooring",
      type: "number",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "commercialProjects",
      title: "Commercial Projects",
      type: "number",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "residentialProjects",
      title: "Residential Projects",
      type: "number",
      validation: (Rule) => Rule.min(0),
    },
  ],
};
