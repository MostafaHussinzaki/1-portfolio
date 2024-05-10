const Title = ({ children }) => {
	return (
		<h1 className="w-fit font-roboto text-[34px] sm:text-[36px] md:text-[40px] font-bold text-black dark:text-white-100 relative mb-4 | line ">
			{children}
		</h1>
	);
};

export default Title;
