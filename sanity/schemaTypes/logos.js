export default {
  name: "logos",
  title: "Logos",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Section Title",
      type: "string",
      description: "Title displayed above the logos (e.g., 'Our Brand Partners').",
      initialValue: "Our Brand Partners",
    },
    {
      name: "logos",
      title: "Brand Logos",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
              description: "Accessible description of the logo.",
            },
          ],
        },
      ],
    },
    {
      name: "stats",
      title: "Key Statistics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "value",
              title: "Stat Value",
              type: "string",
              description: "Main number or statistic (e.g., '150+').",
            },
            {
              name: "description",
              title: "Stat Description",
              type: "string",
              description: "Explanation of the stat (e.g., 'Clients').",
            },
          ],
        },
      ],
    },
  ],
};
