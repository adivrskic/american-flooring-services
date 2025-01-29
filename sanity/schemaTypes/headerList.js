export default {
  name: "headerList",
  title: "Header List",
  type: "document",
  fields: [
    {
      name: "header",
      title: "Header",
      type: "string",
    },
    {
      name: "subheader",
      title: "Subheader",
      type: "text",
    },
    {
      name: "items",
      title: "List Items",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
