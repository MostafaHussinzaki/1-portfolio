import { motion } from "framer-motion";

const Project = ({ color, onClick, project }) => {
	let bgColor;
	if (color === "red") {
		bgColor = "bg-red";
	} else if (color === "blue") {
		bgColor = "bg-white-500";
	}

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.5 }}
			className={`${bgColor} p-5 cursor-pointer rounded-xl dark:border-[1px] dark:border-gray-650 dark:bg-transparent | flex-half`}
			onClick={onClick}
            id="project"
            data-id={project.id}
		>
			<div className="overflow-hidden rounded-xl mb-4">
				<img
					src={project.img}
					alt={project.title}
					className="w-full h-fit hover:scale-125 transition-all duration-200 max-h-[300px]"
				/>
			</div>
			<h4 className="font-poppin text-black dark:text-white-100  font-medium">
				{project.title}
			</h4>
		</motion.div>
	);
};

export default Project;
