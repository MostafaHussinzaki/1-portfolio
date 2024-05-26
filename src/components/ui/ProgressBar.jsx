const ProgressBar = ({ title, percent, color }) => {
	const formattedPercent = percent + "%";

	return (
		<div className="py-4">
			<div className="flex justify-between mb-1">
				<h5 className="poppin text-gray-300 dark:text-gray-400 text-sm ">
					{title}
				</h5>
				<span className="poppin text-gray-300 dark:text-gray-400 text-sm ">
					{formattedPercent}
				</span>
			</div>
			<div className="h-[6px] bg-[#edf2f2] rounded-md w-full">
				<div
					className={`h-full rounded-md`}
					style={{ width: formattedPercent, backgroundColor: color }}
				/>
			</div>
		</div>
	);
};

export default ProgressBar;
