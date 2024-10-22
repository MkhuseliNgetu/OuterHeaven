
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    transpilePackages: ['azure.Config.ts','azure.Blobs.ts']
}


module.exports = nextConfig


