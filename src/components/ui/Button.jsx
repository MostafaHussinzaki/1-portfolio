import React from "react";

const Button = ({ children, ...props }) => {
	return (
		<button
			className="font-poppin text-[18px] py-[14px] px-[25px] bg-cyan text-white-100 dark:hover:text-white-100  rounded-lg leading[27px] hover:bg-white-300 border hover:text-black dark:hover:bg-gray-600 transition-all duration-200  | flex gap-1 group  "
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
