// import createMDX from '@next/mdx';
import { createContentlayerPlugin } from 'next-contentlayer2';

const nextConfig = {
  // pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  webpack: (config: { cache: boolean }) => {
    config.cache = false;
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https' as 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
};

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

export default withContentlayer(nextConfig);
