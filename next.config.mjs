/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
    ],
  },
  env: {
    CLOUDINARY_URL: process.env.CLOUDINARY_URL,
  },
};

export default nextConfig;
