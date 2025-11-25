/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/getrecap',
        destination: "https://apps.apple.com/in/app/recap-every-memory-matters/id6743312643",
        permanent: true,
      }
    ];
  }
};

export default nextConfig;
