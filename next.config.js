module.exports = {
  reactStrictMode: true,
  webpack: (config, { webpack }) => {
    config.plugins.push(
        new webpack.IgnorePlugin({ resourceRegExp: /\/__test__\// })
    );
    return config;
  },
  exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
  images: {
    loader: "imgix",
    path: "https://noop/",
  },
}
