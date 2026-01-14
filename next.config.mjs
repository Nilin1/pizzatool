/** @type {import('next').NextConfig} */
const nextConfig = {
	// GitHub Pages 部署需要静态导出
	output: 'export',
    basePath: '/pizzatool',  // 使用自定义域名时不需要
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'pizzatool.org',
			},
		],
	},
};

export default nextConfig;
