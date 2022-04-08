require('dotenv').config({ path: `./.env.${process.env.ENVIRONMENT}` })

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["yappi-blog.s3.ap-northeast-1.amazonaws.com"]
  }
}

module.exports = nextConfig
