require('dotenv').config({ path: `./.env.${process.env.ENVIRONMENT}` })

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
