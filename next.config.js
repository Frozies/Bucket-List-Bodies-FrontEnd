const withImages = require('next-images')

module.exports = {
  reactStrictMode: true,

  env: {
      APOLLO_URI: 'https://bucketlistbodies-fw9oq.ondigitalocean.app',
  },

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
      '/admin': { page: '/admin' },
      '/admin/createProduct': { page: '/admin/createProduct' },
      '/admin/createOrder': { page: '/admin/createOrder' },
      '/admin/orders': { page: '/admin/orders' },
    }
  },
  images: {
    domains: ['res.cloudinary.com']
  }
}
