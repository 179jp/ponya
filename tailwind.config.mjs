/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontSize: {
				'2xs': '.625rem',
				sm: ['0.8125rem', 'calc(1.5 / 0.8125)'],
			}
		},
	},
	plugins: [],
}
