const nextConfig = {
	reactStrictMode: true,

	webpack(config, { isServer }) {
		// Add SVGR Loader
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
};

module.exports = nextConfig;
