export default {
  name: "featureBoxes",
  title: "Feature Boxes",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Section Title",
      type: "string",
      description: "Title for the feature boxes section (e.g., 'Our Expert Services').",
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "iconType",
              title: "Icon Type",
              type: "string",
              options: {
                list: [
                  { title: "Image", value: "image" },
                  { title: "SVG File", value: "svg" },
                ],
                layout: "radio",
              },
              initialValue: "image",
              description: "Choose whether to use an image or an SVG file.",
            },
            {
              name: "backgroundImage",
              title: "Background Image",
              type: "image",
              description: "Upload a PNG, JPG, or WebP icon.",
              options: { hotspot: true },
              hidden: ({ parent }) => parent?.iconType !== "image",
            },
            {
              name: "iconImage",
              title: "Feature Image",
              type: "image",
              description: "Upload a PNG, JPG, or WebP icon.",
              options: { hotspot: true },
              hidden: ({ parent }) => parent?.iconType !== "image",
            },
            {
              name: "iconSvg",
              title: "Feature SVG",
              type: "file",
              description: "Upload an SVG file.",
              options: {
                accept: "image/svg+xml",
              },
              hidden: ({ parent }) => parent?.iconType !== "svg",
            },
            {
              name: "title",
              title: "Feature Title",
              type: "string",
              description: "Short title for the feature.",
            },
            {
              name: "description",
              title: "Feature Description",
              type: "text",
              description: "Description of the feature. (Do not use if using location and number of units)",
            },
            {
              name: "location",
              title: "Feature Location",
              type: "text",
              description: "Location of the feature.",
            },
            {
              name: "numUnits",
              title: "Feature Number of Units",
              type: "text",
              description: "Number of units of the feature.",
            },
            {
              name: "images",
              title: "Project Images",
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
                      description: "Accessible description of the image.",
                    },
                  ],
                },
              ],
              description: "Upload multiple images related to this feature.",
            },
          ],
        },
      ],
    },
    {
      name: "link",
      title: "Show Link?",
      type: "boolean",
      description: "Enable/disable the link button.",
      initialValue: false,
    },
    {
      name: "linkHref",
      title: "Link URL",
      type: "string",
      description: "URL for the button (e.g., '/portfolio').",
      hidden: ({ parent }) => !parent?.link, // Hide if link is disabled
    },
    {
      name: "linkText",
      title: "Link Text",
      type: "string",
      description: "Text for the button (e.g., 'View Portfolio').",
      hidden: ({ parent }) => !parent?.link, // Hide if link is disabled
    },
  ],
};
