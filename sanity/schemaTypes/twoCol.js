export default {
  name: "twoCol",
  title: "Two Column Section",
  type: "document",
  fields: [
    {
      name: "imageSrc",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "subheading",
      title: "Subheading",
      type: "text",
    },
  ],
};
