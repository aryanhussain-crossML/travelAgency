/** @type {import('next').NextConfig} */

import withPWAInit from '@ducanh2912/next-pwa'


const nextConfig = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  register: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: false,
  },
})

export default nextConfig
