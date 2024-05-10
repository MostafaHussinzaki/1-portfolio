/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				black: "#000000",
				gray: {
					300: "#44566c",
					400: "#a6a6a6",
					500: "#0d0d0d",
					600: "#1d1d1d",
					700: "#1c1c1c",
				},
				white: {
					100: "#ffffff",
					300: "#f3f6f6",
					400: "#f8fbfb",
					500: "#eef5fa",
				},
				red: "#fff4f4",
				cyan: "#1b74e4",
			},
			fontFamily: {
				roboto: ["Roboto Slab", "serif"],
				poppin: ["Poppins", "sans-serif"],
			},
			backgroundImage: {
				light: "url(./assets/page-bg-light.jpg)",
				dark: "url(./assets/page-bg-dark.jpg)",
			},
			screens: {
				md: "1024px",
				lg: "1280px",
			},
		},
	},
	plugins: [],
};
