export default {
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Banner Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "title",
      title: "Banner Title",
      type: "string",
    },
    {
      name: "text",
      title: "Banner Text",
      type: "text",
    },
    {
      name: "button1Link",
      title: "Button 1 Link",
      type: "string",
    },
    {
      name: "button1Text",
      title: "Button 1 Text",
      type: "string",
    },
    {
      name: "button2Link",
      title: "Button 2 Link",
      type: "string",
    },
    {
      name: "button2Text",
      title: "Button 2 Text",
      type: "string",
    },
  ],
};
