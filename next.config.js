const path = require('path');

module.exports = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts', 'api.ts'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "@styles/global.scss";`,
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en', 'vi', 'ja'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en',
  },
};
