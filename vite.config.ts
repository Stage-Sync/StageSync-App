import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
	plugins: [svelte()],
	root: "src/mainview",
	build: {
		outDir: "../../out",
		emptyOutDir: true,
	},
	server: {
		port: 5173,
		strictPort: true,
	},
});
