import React from "react";

const Category = ({name , activeCategory, onClick}) => {
	return (
		<span
			className="filter"
			style={{ color: activeCategory === name && "#1b74e4" }}
            onClick={onClick}
		>
			{name}
		</span>
	);
};

export default Category;
