/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",           // static HTML/CSS/JS in ./out
  images: { unoptimized: true } // needed if you use next/image
};
module.exports = nextConfig;
