// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: 'export',
// }

// module.exports = nextConfig

// // next.config.js
// const withVideos = require('next-videos')

// module.exports = withVideos()


// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//     output: 'export',
   
//     // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
//     // trailingSlash: true,
   
//     // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
//     // skipTrailingSlashRedirect: true,
   
//     // Optional: Change the output directory `out` -> `dist`
//     // distDir: 'dist',
//   }
   
//   module.exports = nextConfig

  const withVideos = require('next-videos');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    // output: 'export',
   
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,
   
    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,
   
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
};

module.exports = withVideos(nextConfig);
