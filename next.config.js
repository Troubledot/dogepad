/** @type {import('next').NextConfig} */

const {
  i18n
} = require('./next-i18next.config')

const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: false,
  images: {
     domains: ['www.ffcfan.com'],
  }
}

module.exports = nextConfig
