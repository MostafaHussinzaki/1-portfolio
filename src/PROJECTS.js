import movito from "./assets/projects/movito.png";
import calculator from "./assets/projects/calculator.png";
import ecommerce from "./assets/projects/ecommerce.png";
import forkify from "./assets/projects/forkify.png";

export const PROJECTS = [
	{
		id: "0",
		title: "Movito",
		type: "front-end",
		languages: "JavaScript",
		preview: "https://movito2.netlify.app/",
		repo: "https://github.com/MostafaHussinzaki/Movito",
		description: [
			"This project was challenging for me, as I had to implement simple routing without using any router library. It was built using an MVC structure and utilized the TMDb API to fetch movies.",
			"I created this project using vanilla JavaScript, and all the styles were written in Sass (SCSS). The structure was built with HTML.",
		],
		img: movito,
		category: "Javascript",
	},
	{
		id: "1",
		title: "Calculator",
		type: "front-end",
		languages: "JavaScript",
		preview: "https://calculator-v2-mostafa.netlify.app/",
		repo: "https://github.com/MostafaHussinzaki/calculator",
		description: [
			"This was a simple project involving the creation of a basic calculator with three different themes. It was front-end mentor project, I learned a lot from this project, and it was enjoyable to develop.",
			"I created this project using vanilla JavaScript, and all the styles were written in Sass (SCSS). The structure was built with HTML.",
		],
		img: calculator,
		category: "Javascript",
	},
	{
		id: "2",
		title: "eCommerce",
		type: "front-end",
		languages: "React",
		preview: "https://tronmartx.netlify.app/",
		repo: "https://github.com/MostafaHussinzaki/eCommerce",
		description: [
			"This was a significant project that I completed in 12 days. I learned a lot from it as I used routing and state management libraries and dealt with loading and error handling. The project includes pagination, dynamic route handling, cart state management, and more.",
			"I created this project with React.js (using react-router, react-redux, framer motion) and styled it with SCSS, along with the usual HTML.",
		],
		img: ecommerce,
		category: "React",
	},
	{
		id: "3",
		title: "Recipe",
		type: "front-end",
		languages: "Javascript",
		preview: "https://forkify-recipe1.netlify.app/",
		repo: "https://github.com/MostafaHussinzaki/recipe-jonas-course",
		description: [
			"This was the last project in JavaScript course, this project develop me alot I knew a lot of things while making this project, it's code is super clean, and maintanble, you can search for recipe or add your own one.",
			"I created this project using vanilla JavaScript, and all the styles were written in Sass (SCSS). The structure was built with HTML.",
		],
		img: forkify,
		category: "JavaScript",
	},
];
