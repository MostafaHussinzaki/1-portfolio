import Title from "../components/ui/Title";
import Category from "../components/Category";
import Model from "../components/ui/Model";
import Project from "../components/Project";
import ProjectDetails from "../components/ProjectDetails";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef } from "react";

import { PROJECTS } from "../PROJECTS";

const WorksPage = () => {
	const [activeCategory, setActiveCategory] = useState("All");
	const [isOpenModal, setIsOpenModal] = useState(false);
	const selectedProject = useRef();

	// category choosed
	const selectedCategory = PROJECTS.filter((project) =>
		activeCategory === "All"
			? project
			: project.category.toLowerCase() === activeCategory.toLowerCase()
	);

	// prevent scrolling while open modal
	if (isOpenModal) {
		document.body.classList.add("lock-screen");
	} else {
		document.body.classList.remove("lock-screen");
	}

	const handleOpenModal = (e) => {
		selectedProject.current = +e.target.closest("#project").dataset.id;
		setIsOpenModal(true);
	};

	const handleCloseModel = () => {
		setIsOpenModal(false);
	};

	return (
		<section className="py-14">
			<div className="mb-5 | part-wrapper">
				<Title>Works</Title>
				<div className="flex justify-start sm:justify-end flex-wrap mb-5">
					<Category
						name="All"
						activeCategory={activeCategory}
						onClick={() => setActiveCategory("All")}
					/>
					<Category
						name="React"
						activeCategory={activeCategory}
						onClick={() => setActiveCategory("React")}
					/>
					<Category
						name="nextJs"
						activeCategory={activeCategory}
						onClick={() => setActiveCategory("nextJs")}
					/>
					<Category
						name="JavaScript"
						activeCategory={activeCategory}
						onClick={() => setActiveCategory("JavaScript")}
					/>
				</div>
				<motion.div
					className=" flex flex-col xd:flex-row gap-5 flex-wrap h-fit"
					layout
				>
					{/* render the All projects or categoriezed projects */}
					<AnimatePresence>
						{selectedCategory.map((project, i) => (
							<Project
								key={i}
								color={(i + 1) % 4 === 1 || (i + 1) % 4 === 0 ? "red" : "blue"} //whant to be fixed
								onClick={handleOpenModal}
								project={project}
							/>
						))}
					</AnimatePresence>
				</motion.div>
			</div>

			{/* modal of project detail */}
			<AnimatePresence>
				{isOpenModal && (
					<Model onClose={handleCloseModel}>
						<ProjectDetails project={PROJECTS[selectedProject.current]} />
					</Model>
				)}
			</AnimatePresence>
		</section>
	);
};

export default WorksPage;
