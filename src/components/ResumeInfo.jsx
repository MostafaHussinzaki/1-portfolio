// The title of the info column
const Title = ({ children }) => {
	return (
		<h3 className="font-poppin text-2xl text-black dark:text-white-100 flex gap-2 w-fit mb-6 leading-[27px]">
			{children}
		</h3>
	);
};

// card to descripe what you do
const DescriptionCard = ({ date, header, text, color }) => {
	let bgColor;
	if (color === "red") {
		bgColor = "bg-red";
	} else if (color === "blue") {
		bgColor = "bg-white-500";
	}
	return (
		<div className={`${bgColor} font-poppin mb-5 | card`}>
			<span className="block text-sm leading-[1] text-gray-300 dark:text-gray-400 mb-[9px]">
				{date}
			</span>
			<h4 className="text-lg text-gray-550 dark:text-white-100 mb-[4px]">
				{header}
			</h4>
			<p className="| paragraph">{text}</p>
		</div>
	);
};

// The main wrapper
const ResumeInfo = ({ children }) => {
	return <div className="grow font-medium basis-1/2">{children}</div>;
};

// our components
export default ResumeInfo;

ResumeInfo.Title = Title;
ResumeInfo.Card = DescriptionCard;
