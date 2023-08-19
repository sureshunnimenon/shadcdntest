/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader:'cloudinary',
        path: 'res.cloudinary.com/dsljuyrrn/image/upload'
      }
}

module.exports = nextConfig
