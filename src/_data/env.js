const devUrl = 'http://localhost:8080';
const prodUrl = 'https://11try.netlify.app';
const isProd = process.env.SLOT !== 'dev';
const url = isProd ? prodUrl : devUrl;

module.exports = {
    isProd,
    url,
    tracking: {
        gtag: 'MY-GTAG-ID',
        pixelId: 'MY-PIXEL-ID',
    },
};