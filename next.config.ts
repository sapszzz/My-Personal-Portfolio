// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   // Required for Next.js to generate static HTML, CSS, and JS files
//   output: 'export',

//   // Optional: other configurations
//   reactStrictMode: true,
//   // basePath: '/my-portfolio', // if deploying to a subpath
//   // images: { unoptimized: true }, // needed if you use Next/Image
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for Next.js to generate static HTML, CSS, and JS files
  output: 'export',

  // Optional: other configurations
  reactStrictMode: true,
  
  // 🎯 FIX 1: Must be set to true when output: 'export' is used
  images: { 
      unoptimized: true 
  },
};

export default nextConfig;
