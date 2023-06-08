/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  i18n: {
    locales: ['nl', 'fr'],
    defaultLocale: 'nl',
    localeDetection: false,
    domains: [
      {
        domain: 'u-waarde.ursa.be',
        defaultLocale: 'nl'
      },
      {
        domain: 'valeur.ursa.be',
        defaultLocale: 'fr'
      }
    ]
  }
}

module.exports = nextConfig
