const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    trailingSlash: true,
    env: {
        // Sample LINK prefix: /pantograph-catenary-model-ui
        // Do not add the slash at the last
        LINK_PREFIX: isProd ? "/pantograph-catenary-model-ui" : ""
    },
    reactStrictMode: true,
    swcMinify: true,
    basePath: isProd ? "/pantograph-catenary-model-ui" : "",
    assetPrefix: isProd ? "/pantograph-catenary-model-ui" : "",
}

module.exports = nextConfig