const WhatIDoCard = ({ color, title, breif }) => {
	let bgColor;
	if (color === "red") {
		bgColor = "bg-red";
	} else if (color === "blue") {
		bgColor = "bg-white-500";
	}
	return (
		<div
			className={`mb-[30px] md:mb-0 w-full md:w-[47%] flex flex-col sm:flex-row gap-5 px-5 pt-5 pb-4 rounded-2xl dark:border-[1px] dark:border-gray-650 ${bgColor} dark:bg-transparent`}
		>
			{/* <div className="w-[50px] self-center sm:self-start">
				{/* <Icon /> */}
			{/* </div> */}
			{/* <img src={Moon} alt="" className="w-[50px] self-center sm:self-start" /> */}
			<div className="">
				<h4 className="font-poppin font-medium text-2xl md:text-xl text-black dark:text-white-100 mb-3">
					{title}
				</h4>
				<p className="| paragraph">{breif}</p>
			</div>
		</div>
	);
};

export default WhatIDoCard;
