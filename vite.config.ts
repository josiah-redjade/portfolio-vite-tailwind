import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Inspect from 'vite-plugin-inspect'
import AutoImport from 'unplugin-auto-import/vite'

import postcss from './postcss.config.cjs';

export default defineConfig({
	plugins: [
		sveltekit(),
		Inspect(),
		AutoImport({
			include: [
				/\.svelte$/,
				/\.(js|ts$)/
			  ],
			
			resolvers: [
				IconsResolver({
					prefix: 'icon',
				}),
			],
			imports: [
			  'svelte',
			  'svelte/store',
			  'svelte/transition',
			],
			dts: './src/auto-imports.d.ts',
		  }),
		Icons({
			compiler: 'svelte',
		}),
	],
	css:{
		postcss
	}
});



