import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
	base: "./",
	plugins: [react(), eslint()],
});
