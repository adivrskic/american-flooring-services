export default {
  name: 'banner', // Unique identifier for this schema
  title: 'Banner', // Title shown in Sanity Studio
  type: 'document', // Sanity document schema
  fields: [
    {
      name: 'image',
      title: 'Banner Image',
      type: 'image', // This is to upload an image for the banner
      options: {
        hotspot: true, // Enable the hotspot feature for cropping
      },
    },
    {
      name: 'title',
      title: 'Banner Title',
      type: 'string', // This will store the title of the banner
    },
    {
      name: 'text',
      title: 'Banner Text',
      type: 'text', // This will store the description text for the banner
    },
    {
      name: 'button1Link',
      title: 'Button 1 Link',
      type: 'string', // Link for the first button
    },
    {
      name: 'button1Text',
      title: 'Button 1 Text',
      type: 'string', // Text for the first button
    },
    {
      name: 'button2Link',
      title: 'Button 2 Link',
      type: 'string', // Link for the second button
    },
    {
      name: 'button2Text',
      title: 'Button 2 Text',
      type: 'string', // Text for the second button
    },
  ],
};
