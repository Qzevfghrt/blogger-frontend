/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.md$/,
  //     use: [
  //       {
  //         loader: "raw-loader",
  //       },
  //     ],
  //   });

  //   return config;
  // },
};
