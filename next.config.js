module.exports = {
  output: 'export',
  assetPrefix: process.env.GITHUB_PAGES ? '/Portfolio' : '',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  }
};