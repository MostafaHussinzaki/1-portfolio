export const PersonSvg = ({ classes, size = "25" }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			version="1.1"
			width={size}
			height={size}
			viewBox="0 0 256 256"
			xmlSpace="preserve"
		>
			<defs></defs>
			<g
				style={{
					stroke: "none",
					strokeWidth: 0,
					strokeDasharray: "none",
					strokeLinecap: "butt",
					strokeLinejoin: "miter",
					strokeMiterlimit: 10,
					fillRule: "nonzero",
					opacity: 1,
				}}
				transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
				className={classes}
			>
				<path
					d="M 84.657 90 H 5.343 v -2 c 0 -21.867 17.79 -39.657 39.657 -39.657 c 21.867 0 39.657 17.79 39.657 39.657 V 90 z M 9.398 86 h 71.203 C 79.562 67.265 63.99 52.343 45 52.343 S 10.439 67.265 9.398 86 z"
					style={{
						stroke: "none",
						strokeWidth: 1,
						strokeDasharray: "none",
						strokeLinecap: "butt",
						strokeLinejoin: "miter",
						strokeMiterlimit: 10,
						fillRule: "nonzero",
						opacity: 1,
					}}
					transform="matrix(1 0 0 1 0 0)"
					strokeLinecap="round"
					className={classes}
				/>
				<path
					d="M 45 43.971 c -12.123 0 -21.985 -9.863 -21.985 -21.986 C 23.015 9.863 32.877 0 45 0 c 12.123 0 21.985 9.863 21.985 21.985 C 66.985 34.108 57.123 43.971 45 43.971 z M 45 4 c -9.917 0 -17.985 8.068 -17.985 17.985 c 0 9.917 8.068 17.986 17.985 17.986 s 17.985 -8.068 17.985 -17.986 C 62.985 12.068 54.917 4 45 4 z"
					style={{
						stroke: "none",
						strokeWidth: 1,
						strokeDasharray: "none",
						strokeLinecap: "butt",
						strokeLinejoin: "miter",
						strokeMiterlimit: 10,
						fillRule: "nonzero",
						opacity: 1,
					}}
					transform="matrix(1 0 0 1 0 0)"
					strokeLinecap="round"
					className={classes}
				/>
			</g>
		</svg>
	);
};
