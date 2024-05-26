const Message = function ({ children, type }) {
	let typeStyle;
	if (type) {
		typeStyle = "border-[#53a653] text-[#53a653]";
	} else {
		typeStyle = "border-[#fa5252] text-[#fa5252]";
	}

	return (
		<p
			className={`p-5 w-full border-b-2 bg-white-400 dark:bg-gray-500 ${typeStyle}`}
		>
			<span className="mr-2">&rarr;</span>
			{children}
		</p>
	);
};

export default Message;
