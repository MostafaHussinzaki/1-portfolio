import { useState } from "react";

const Input = ({ type, title, color, name }) => {
	const [isFocused, setIsFocused] = useState(false);

	let bColor;

	if (color === "red") {
		bColor = "rgb(254, 120, 120)";
	} else if (color === "blue") {
		bColor = "rgb(27, 116, 228)";
	} else if (color === "violet") {
		bColor = "rgb(206, 101, 243)";
	}

	return (
		<div className="mb-[60px]">
			<label
				htmlFor={title}
				className="font-poppin font-medium text-gray-300 dark:text-gray-400 block"
				style={{ color: isFocused && bColor }}
			>
				{title}*
			</label>
			{type === "textarea" ? (
				<textarea
					id={title}
					className="bg-transparent | border-input"
					onFocus={() => setIsFocused(true)}
					style={{
						borderColor: isFocused && bColor,
						height: isFocused && "40px",
					}}
					name={name}
					required
				/>
			) : (
				<input
					type={type}
					id={title}
					className="bg-transparent | border-input"
					name={name}
					onFocus={() => setIsFocused(true)}
					style={{
						borderColor: isFocused && bColor,
						height: isFocused && "40px",
					}}
					required
				/>
			)}
		</div>
	);
};

export default Input;
