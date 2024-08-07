const ProjectDetails = ({ project }) => {
	return (
		<div className="overflow-x-hidden overflow-y-scroll h-full w-full pr-4 flex flex-col | scroll-model">
			<div className=" p-0 sm:p-4 flex-1">
				<h6 className="font-poppin text-[22px] sm:text-3xl text-center text-[#fa5252] font-bold mb-8 mt-[15px] sm:mt-0 w-full max-w-full">
					{project.title}
				</h6>
				<div className="flex flex-col  flex-wrap">
					<div className="shrink-0 font-poppin basis-1/2 mb-4 ">
						<span className="text-sm sm:text-[16px] xd:text-lg text-black dark:text-white-100 font-medium">
							Project:
						</span>
						<span className="text-sm sm:text-[16px] xd:text-lg text-black dark:text-white-100 font-semibold ml-1">
							{project.type}
						</span>
					</div>
					<div className="shrink-0 font-poppin basis-1/2 mb-4 ">
						<span className="text-sm sm:text-[16px] xd:text-lg text-black dark:text-white-100 font-medium">
							Repository:
						</span>
						<span className="text-sm sm:text-[16px] xd:text-lg text-black dark:text-white-100 font-semibold ml-1 hover:text-[#fa5252] transition-all duration-200">
							<a
								href={project.repo}
								target="_blank"
								className="hover:text-[#fa5252] transition-all duration-200 break-words"
							>
								{project.repo}
							</a>
						</span>
					</div>
					<div className="shrink-0 font-poppin basis-1/2 mb-4 ">
						<span className="text-sm sm:text-[16px] xd:text-lg text-black dark:text-white-100 font-medium">
							Languages:
						</span>
						<span className="text-sm sm:text-[16px] xd:text-lg text-black dark:text-white-100 font-semibold ml-1">
							{project.languages}
						</span>
					</div>
					<div className="shrink-0 font-poppin basis-1/2 mb-4 ">
						<span className="text-sm sm:text-[16px] xd:text-lg text-black dark:text-white-100 font-medium">
							Preview:
						</span>
						<span className="text-sm sm:text-[16px] xd:text-lg text-black dark:text-white-100 font-semibold ml-1 hover:text-[#fa5252] transition-all duration-200 text-wrap">
							<a
								href={project.preview}
								target="_blank"
								className="hover:text-[#fa5252] transition-all duration-200 text-wrap"
							>
								{project.preview}
							</a>
						</span>
					</div>
				</div>
				<div className="mb-5">
					<p className="mb-4 | paragraph">{project.description[0]}</p>
					<p className="| paragraph">{project.description[1]}</p>
				</div>
				<div className="rounded-xl overflow-hidden mb-5 w-fit mx-auto">
					<img
						src={project.img}
						className="w-full object-contain h-fit max-h-[450px]"
					/>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetails;
