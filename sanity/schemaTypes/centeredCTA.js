export default {
  name: 'centeredCTA',
  title: 'Centered CTA',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main heading for the Call to Action section',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      description: 'Subtitle or description for the Call to Action section',
    },
    {
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
      description: 'The link for the Call to Action button',
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'Text to display on the button',
      initialValue: 'Learn More About Us', // Set default button text
    },
  ],
  hidden: true,
};
