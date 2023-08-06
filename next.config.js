/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        domains: ["storage.googleapis.com"],
    },
};

module.exports = nextConfig;
