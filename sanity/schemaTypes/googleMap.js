export default {
  name: "googleMap",
  title: "Google Map",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Heading text displayed above the map.",
    },
    {
      name: "location",
      title: "Location Name",
      type: "string",
      description: "City and state (e.g., Hiram, GA).",
    },
    {
      name: "embedUrl",
      title: "Google Maps Embed URL",
      type: "url",
      description: "Paste the Google Maps embed URL here.",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["https"],
        }).error("Must be a valid Google Maps embed URL."),
    },
  ],
};
