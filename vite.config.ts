import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	preview: {
		allowedHosts: ['localhost', 'smelt.hackclub.com', '.a.selfhosted.hackclub.com']
	}
});
