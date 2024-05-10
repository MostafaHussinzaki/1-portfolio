import Moon from "../../assets/svg/moon.svg";
import Sun from "../../assets/svg/sun.svg";

import Logo from "../../assets/Logo.png";

import MobileNav from "./MobileNav";
import HamburgerMenu from "../ui/HamburgerMenu";

import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../../store";

const Header = () => {
	const dispatch = useDispatch();
	const darkMode = useSelector((state) => state.darkMode);

	// toggle menu open and close
	const handleToggleMenu = () => {
		dispatch(uiAction.toggleMenu());
	};

	// toggle darkmode open and close
	const handleToggleDarkMode = () => {
		dispatch(uiAction.toggleDarkMode());
	};

	return (
		<header className="container p-5  mb-[50px] lg:mb-[205px]">
			<nav className="flex justify-between items-center">
				{/* Logo */}
				<img src={Logo} alt="Logo" className="w-[140px] sm:w-[170px]" />
				{/* Nav */}
				<div className="flex justify-between items-center gap-1 sm:gap-2">
					<span
						className="group w-[50px] h-[50px]  bg-white-100 dark:bg-black cursor-pointer shadow-lg rounded-full flex justify-center items-center hover:bg-cyan dark:hover:bg-cyan "
						onClick={handleToggleDarkMode}
					>
						<img
							src={darkMode ? Sun : Moon}
							alt="Dark-mode"
							className="w-[20px] h-auto group-hover:brightness-[160%]"
						/>
					</span>
					<span className="lg:hidden inline" onClick={handleToggleMenu}>
						<HamburgerMenu />
					</span>
				</div>
			</nav>
			<div className="relative">
				<MobileNav />
			</div>
		</header>
	);
};

export default Header;
