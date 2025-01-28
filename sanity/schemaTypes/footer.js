export default {
  name: 'footer', // Unique identifier for this schema
  title: 'Footer', // Title shown in Sanity Studio
  type: 'document', // Sanity document schema
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image', // Allow logo upload
      options: {
        hotspot: true, // Enable hotspot feature for cropping
      },
    },
    {
      name: 'office',
      title: 'Office Information',
      type: 'object', // Object field to hold office information
      fields: [
        {
          name: 'address',
          title: 'Address',
          type: 'text', // Text field for office address
        },
      ],
    },
    {
      name: 'contact',
      title: 'Contact Information',
      type: 'object', // Object field for contact info
      fields: [
        {
          name: 'phone',
          title: 'Phone Number',
          type: 'string', // Phone number as a string
        },
        {
          name: 'email',
          title: 'Email Address',
          type: 'string', // Email address as a string
        },
      ],
    },
    {
      name: 'hours',
      title: 'Operating Hours',
      type: 'object', // Object field for operating hours
      fields: [
        {
          name: 'mondayToFriday',
          title: 'Mon - Fri',
          type: 'string', // Time range string for Mon-Fri
        },
      ],
    },
  ],
};
