export default {
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "image",
      description: "Upload the website logo.",
      options: { hotspot: true },
    },
    {
      name: "navLinks",
      title: "Navigation Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Link Title",
              type: "string",
              description: "Text for the navigation link (e.g., 'Products & Services').",
            },
            {
              name: "url",
              title: "URL",
              type: "string",
              description: "Relative URL (e.g., '/products').",
            },
          ],
        },
      ],
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
      description: "Company phone number (e.g., '+1 (770) 445-5955').",
    },
    {
      name: "phoneLink",
      title: "Phone Link",
      type: "string",
      description: "Tel link for calling (e.g., 'tel:+17704455955').",
    },
    {
      name: "address",
      title: "Office Address",
      type: "string",
      description: "Company address (e.g., '783 Metromont Rd. Hiram, GA 30141').",
    },
    {
      name: "mapLink",
      title: "Google Maps Link",
      type: "url",
      description: "URL to Google Maps location.",
    },
    {
      name: "contactButtonText",
      title: "Contact Button Text",
      type: "string",
      description: "Text for the contact button (e.g., 'Contact Us').",
      initialValue: "Contact Us",
    },
    {
      name: "contactButtonLink",
      title: "Contact Button Link",
      type: "string",
      description: "URL for the contact button (e.g., '/contact').",
    },
    {
      name: "mobileMenu",
      title: "Mobile Menu",
      type: "object",
      fields: [
        {
          name: "navLinks",
          title: "Mobile Navigation Links",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Link Title",
                  type: "string",
                  description: "Text for the mobile navigation link.",
                },
                {
                  name: "url",
                  title: "URL",
                  type: "string",
                  description: "Relative URL for the mobile link.",
                },
              ],
            },
          ],
        },
        {
          name: "phone",
          title: "Mobile Phone Number",
          type: "string",
          description: "Phone number shown in mobile menu.",
        },
        {
          name: "phoneLink",
          title: "Mobile Phone Link",
          type: "string",
          description: "Tel link for calling from the mobile menu.",
        },
        {
          name: "address",
          title: "Mobile Address",
          type: "string",
          description: "Address displayed in the mobile menu.",
        },
        {
          name: "mapLink",
          title: "Mobile Google Maps Link",
          type: "url",
          description: "URL to Google Maps location for mobile users.",
        },
      ],
    },
  ],
};
