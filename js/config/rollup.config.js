import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

const commonConfig = {
	watch: {
		clearScreen: false
	}
};

const commonPlugins = [
	resolve({
		browser: true,
		dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
	}),
	commonjs(),

	// If we're building for production (npm run build
	// instead of npm run dev), minify
	production && terser()
];

export default [{
	input: 'js/bundles/products/index.js',
	output: {
		file: 'js/build/products.js',
		format: 'esm'
	},
	plugins: [
		svelte({
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file — better for performance
			css: css => {
				css.write('js/build/products.css');
			}
		}),
		...commonPlugins
	],
	...commonConfig
}, {
	input: 'js/bundles/messages/index.js',
	output: {
		file: 'js/build/messages.js',
		format: 'esm'
	},
	plugins: [
		svelte({
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file — better for performance
			css: css => {
				css.write('js/build/messages.css');
			}
		}),
		...commonPlugins
	],
	...commonConfig
}];