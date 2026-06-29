import type { ElectrobunConfig } from "electrobun";

export default {
	app: {
		name: "stagesync",
		identifier: "org.stagesync",
		version: "1.0.0",
	},
	build: {
		// Vite builds to out/, we copy from there
		copy: {
			"out/index.html": "views/mainview/index.html",
			"out/assets": "views/mainview/assets",
		},
		// Ignore Vite output in watch mode — HMR handles view rebuilds separately
		watchIgnore: ["out/**"],
		mac: {
			bundleCEF: false,
		},
		linux: {
			bundleCEF: false,
		},
		win: {
			bundleCEF: false,
		},
	},
} satisfies ElectrobunConfig;
