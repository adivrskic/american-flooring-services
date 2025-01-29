export default {
  name: "imageRow",
  title: "Image Row",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "A short title for this image row section (optional).",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "text",
              title: "Text",
              type: "string",
              description: "Overlay text displayed on the image.",
            },
            {
              name: "subtextItems",
              title: "Subtext Items",
              type: "array",
              of: [{ type: "string" }],
              description: "Additional overlay text displayed below the main text.",
            },
          ],
        },
      ],
    },
    {
      name: "slides",
      title: "Slides",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Slide Image",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "caption",
              title: "Caption",
              type: "string",
              description: "Optional caption for the slideshow image.",
            },
          ],
        },
      ],
      description: "Slides for the modal when clicking an image.",
    },  
  ],
};
