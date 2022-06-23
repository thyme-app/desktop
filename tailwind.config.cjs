const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			mono: ["Overpass Mono", "monospace"],
			sans: ["Fredoka", "sans-seif"],
		},
		colors: {
			bg: "#212121",
			white: {
				900: "#ffffff",
				500: "#ADADAD"
			},
			gold: "#fff500",
			red: "#ff5959",
			blue: "#4867D1",
			transparent: "transparent"
		}
	},
	plugins: []
};

module.exports = config;
