/** @type {import('next').NextConfig} */
require('dotenv').config()

const nextConfig = {
  reactStrictMode: true,
  env: {
    GH_ACCESS_TOKEN: process.env.GH_ACCESS_TOKEN,
    DISCUSSION_CATEGORY_ID: process.env.DISCUSSION_CATEGORY_ID,
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
