import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useEffect } from "react";

import CloseSvg from "../../assets/svg/CloseSvg";

const Model = ({ children, onClose }) => {

	// closing while clicking on backdrop
	useEffect(() => {
		const backdrop = document.querySelector(".backdrop");
		const dialog = document.querySelector("#model");
		
		const eventFunction = (event) => {
			if (event.target.closest("#model") !== dialog) {
				onClose();
			}
		};

		backdrop.addEventListener("click", eventFunction);

		return removeEventListener("click", eventFunction);
	}, []);

	return createPortal(
		<div className="backdrop">
			<motion.dialog
				open
				variants={{
					hidden: { opacity: 0, y: 30 },
					visible: { opacity: 1, y: 0 },
				}}
				initial="hidden"
				animate="visible"
				exit="hidden"
				transition={{ duration: 0.2 }}
				id="model"
				className="m-auto h-[90vh] w-[95%] xd:max-w-[640px] md:max-w-[850px] p-[30px] outline-none border-none bg-white-100 dark:bg-[#323232] rounded-3xl overflow-visible top-[40px] | modal"
			>
				{/* model content */}
				{children}

				{/* closed button */}
				<motion.button
					onClick={onClose}
					className="group absolute top-10  right-10 sm:right-20	bg-transparent rounded-[50%] border-gray-400 
				border-2 dark:border-white-100 p-2 outline-none "
					whileHover={{ rotate: 90, borderColor: "#fa5252" }}
				>
					<CloseSvg className="fill-gray-400 dark:fill-white-100 group-hover:fill-[#fa5252] transition-all duration-300" />
				</motion.button>
			</motion.dialog>
		</div>,
		document.querySelector("#modal-root")
	);
};

export default Model;
