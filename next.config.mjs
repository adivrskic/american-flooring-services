export default {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"], // Allow images from Sanity's CDN
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@sanity/config": path.resolve(__dirname, "sanity/sanity.config.js"),
    };
    return config;
  },
};
