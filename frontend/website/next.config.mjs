/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            // The shop is a separate WordPress site; send crawlers there with a
            // real Location header instead of a client-side redirect.
            {
                source: "/products",
                destination: "https://shop.drhasannasir.com/",
                permanent: false,
            },
            // One canonical host: www redirects to the bare domain.
            {
                source: "/:path*",
                has: [{ type: "host", value: "www.drhasannasir.com" }],
                destination: "https://drhasannasir.com/:path*",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
