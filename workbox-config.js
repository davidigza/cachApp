module.exports = {
    globDirectory: './dist/',
    globPatterns: [
        '**/*.{css,html,gif,js,jpg,png,svg,webp}'
    ],
    swDest: './dist/sw.js',
    clientsClaim: true,
    skipWaiting: true
};