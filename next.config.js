/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['shub.edu.vn', "https://shub-storage.sgp1.cdn.digitaloceanspaces.com"],
    },
};

module.exports = nextConfig;
