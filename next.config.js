/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverComponentsExternalPackages: ['mongoose']
    },
    // images:{
    //     remotePatterns:[
    //         {
    //             protocol: "https",
    //             hostname: `github.com`,
    //             port: " ",
    //             pathname: '/files/**'
    //         }
    //     ]
    // }
}

module.exports = nextConfig
