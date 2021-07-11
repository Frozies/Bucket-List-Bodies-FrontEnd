const withImages = require('next-images')

module.exports = {
  reactStrictMode: true,

  webpack: (config, { webpack }) => {
    config.plugins.push(
        new webpack.IgnorePlugin({ resourceRegExp: /\/__test__\// })
    );

    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    });

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
