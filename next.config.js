// const withOptimizedImages = require("next-optimized-images");
// const withFonts = require("next-fonts");

// module.exports = withFonts(
//   withOptimizedImages({
//     distDir: 'build',
//   })
// );


// const withSass = require('@zeit/next-sass');
// const withCSS = require("@zeit/next-css");
// module.exports = withCSS(withSass({
//    webpack (config, options) {
//        config.module.rules.push({
//            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
//            use: {
//                loader: 'url-loader',
//                options: {
//                    limit: 100000
//                }
//            }
//        });

//        return config;
//    }
// }));

const withFonts = require("next-fonts");
// const withCSS = require('@zeit/next-css');
// const withSass = require('@zeit/next-sass');
const withOptimizedImages = require("next-optimized-images");
const path = require('path')
module.exports = withFonts( withOptimizedImages({
    distDir: 'build',
    // module: {
    //     rules: [
    //         {
    //             test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/i,
    //             use: [
    //                 {
    //                     loader: 'file-loader',
    //                 },
    //             ],
    //         },
    //     ],
    // },
    sassOptions: {
        includePaths: [path.join(__dirname, 'assets/scss/')],
        },
}));


// module.exports = {
//     /* Add Your Scss File Folder Path Here */
//     sassOptions: {
//     includePaths: [path.join(__dirname, 'assets/scss/')],
//     },
//     }