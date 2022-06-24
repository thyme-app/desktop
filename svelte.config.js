import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import Icons from 'unplugin-icons/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			ssr: false,
		}),
		vite: {
			server: {
				fs: {
					// Allow serving files from one level up to the project root
					allow: ['.'],
				}
			},
			plugins: [
				Icons({
					compiler: 'svelte',
					autoInstall: true
				})
			]
		}
	}
}

export default config;
