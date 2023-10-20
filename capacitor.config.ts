import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'icu.mosque.salat',
	appName: 'micusalat',
	webDir: 'dist',
	server: {
		androidScheme: 'https',
	},
};

export default config;
