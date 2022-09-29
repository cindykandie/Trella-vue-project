
// export const configureWebpack = {
//     module: {
//         rules: [
//             {
//                 test: /\.mjs$/,
//                 include: /node_modules/,
//                 type: "javascript/auto"
//             }
//         ]
//     }
// }

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})