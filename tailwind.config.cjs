const daisyThemes = ["dark", "light", "retro", "winter", "synthwave", "dracula"];

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
	},
	plugins: [
		require("prettier-plugin-tailwindcss"),
		require("@tailwindcss/typography"),
		require("daisyui"),
	],
	safelist: [
		"bg-base-100",
		"bg-base-200",
		"bg-base-300",
		"bg-base-content",
		"bg-primary",
		"bg-secondary",
		"bg-accent",
		"bg-neutral",
		"bg-neutral-focus",
		"bg-opacity-10",
		"leading-none",
		"z-50",
	],
	daisyui: {
		themes: daisyThemes,
		logs: false,
	},
};
