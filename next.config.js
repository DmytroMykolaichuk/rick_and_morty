/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
images: {
    unoptimized: true,
},
reactStrictMode: true,

// assetPrefix: './',
basePath: "/rick_and_morty"
};
module.exports = nextConfig
// export default nextConfig;
