import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: { bodySizeLimit: '2mb' },
    optimizePackageImports: ['lucide-react', '@heroicons/react']
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      // Configure for Supabase storage and user profile images
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ]
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  async headers() {
    return [{
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' }
      ]
    }];
  }
};

export default nextConfig;
