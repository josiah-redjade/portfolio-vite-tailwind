import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import postcss from './postcss.config.cjs';

export default defineConfig({
	plugins: [sveltekit()],
	css:{
		postcss
	}
});



