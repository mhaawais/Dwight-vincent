/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
  images: {
    unoptimized: true, // Required if using next/image
  },
  trailingSlash: true, 
};

export default nextConfig;
