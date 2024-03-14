/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/searchEngine',
        permanent: true,
      },
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  //   images: {
  //     remotePatterns: [
  //       {
  //         protocol: "https",
  //         hostname: ["i.redd.it", ""],
  //         port: "",
  //         pathname: "/**",
  //       },
  //     ],
  //   },
};

export default nextConfig;
