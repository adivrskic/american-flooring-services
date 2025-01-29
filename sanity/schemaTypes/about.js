// schemas/about.js
export default {
  name: 'about', // Unique identifier for this schema
  title: 'About', // Title shown in Sanity Studio
  type: 'document', // Sanity document schema
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image', // This allows image upload
      options: {
        hotspot: true, // Enable cropping and selection of the best part of the image
      },
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string', // Heading text
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'text', // Subheading text (longer description)
    },
  ],
  hidden: true,
};
