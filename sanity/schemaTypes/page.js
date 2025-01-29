export default {
  name: "page",
  title: "Pages",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Page Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "components",
      title: "Components",
      type: "array",
      of: [
        { type: "about" },
        { type: "banner" },
        { type: "centeredCTA" },
        { type: "featureBoxes" },
        { type: "googleMap" },
        { type: "headerList" },
        { type: "imageRow" },
        { type: "logos" },
        { type: "twoCol"}
      ],
    },
  ],
};
