import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const HamburgerMenu = () => {
	const isShowMenu = useSelector((state) => state.showMenu);

	return (
		<motion.div
			className="w-[40px] h-[40px] bg-cyan rounded-full relative cursor-pointer"
			animate={isShowMenu ? "open" : "closed"}
			initial={false}
		>
			<motion.span
				className="h-[0.2rem] w-6 bg-white-100 absolute rounded-sm"
				style={{ top: "30%", left: "50%", x: "-50%", y: "-50%" }}
				variants={{
					open: {
						rotate: ["0deg", "0deg", "45deg"],
						top: ["30%", "50%", "50%"],
					},
					closed: {
						rotate: ["45deg", "0deg", "0deg"],
						top: ["50%", "50%", "30%"],
					},
				}}
				transition={{ duration: 0.5, type: "easeInOut" }}
			/>
			<motion.span
				className="h-[0.2rem] w-6 bg-white-100 absolute rounded-sm"
				style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
				variants={{
					open: {
						rotate: ["0deg", "0deg", "-45deg"],
					},
					closed: {
						rotate: ["-45deg", "0deg", "0deg"],
					},
				}}
				transition={{ duration: 0.5, type: "easeInOut" }}
			/>
			<motion.span
				className="h-[0.2rem] w-6 bg-white-100 absolute rounded-sm"
				style={{ bottom: "30%", left: "50%", x: "-50%", y: "50%" }}
				variants={{
					open: {
						bottom: ["30%", "50%", "50%"],
						opacity: 0,
					},
					closed: {
						bottom: ["50%", "50%", "30%"],
						opacity: 1,
					},
				}}
				transition={{ duration: 0.5, type: "easeInOut" }}
			/>
		</motion.div>
	);
};

export default HamburgerMenu;
