import { PersonSvg } from "../../assets/svg/PersonSvg.jsx";
import { ResumeSvg } from "../../assets/svg/ResumeSvg.jsx";
import { WorksSvg } from "../../assets/svg/WorksSvg.jsx";
// import { BlogSvg } from "../../assets/svg/BlogSvg.jsx";
import { ContactSvg } from "../../assets/svg/ContactSvg.jsx";

import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { uiAction } from "../../store/index.js";

const liStyle =
	"group py-[5px] duration-500 transition-all px-10 text-gray-300 dark:text-white-100 hover:text-cyan dark:hover:text-cyan";

const svgStyle =
	"group-hover:fill-cyan fill-gray-300 dark:fill-white-100 duration-500 transition-all";

const MobileNav = () => {
	const dispatch = useDispatch();
	// getting if is menu shown or not
	const isShowMenu = useSelector((state) => state.showMenu);
	// close menu when click on link
	const toggleMenu = () => {
		dispatch(uiAction.toggleMenu());
	};
	return (
		<div
			className={`pt-5 pb-5 bg-white-100 dark:bg-gray-600 w-full menu-bar ${
				isShowMenu ? "scale-y-1" : "scale-y-0"
			} rounded-xl`}
		>
			<nav className="font-poppin text-[13px]">
				<ul className="font-semibold">
					<li className={liStyle}>
						<NavLink
							to="/"
							className={({ isActive }) =>
								`py-[4px] flex gap-2 items-center ${
									isActive ? "active-text" : ""
								}`
							}
							onClick={toggleMenu}
						>
							<span className="inline-block">
								<PersonSvg classes={svgStyle} />
							</span>
							About
						</NavLink>
					</li>
					<li className={liStyle}>
						<NavLink
							to="/resume"
							className={({ isActive }) =>
								`py-[4px] flex gap-2 items-center ${
									isActive ? "active-text" : ""
								}`
							}
							onClick={toggleMenu}
						>
							<span className="inline-block">
								<ResumeSvg classes={svgStyle} />
							</span>
							Resume
						</NavLink>
					</li>
					<li className={liStyle}>
						<NavLink
							to="/works"
							className={({ isActive }) =>
								`py-[4px] flex gap-2 items-center ${
									isActive ? "active-text" : ""
								}`
							}
							onClick={toggleMenu}
						>
							<span className="inline-block">
								<WorksSvg classes={svgStyle} />
							</span>
							Works
						</NavLink>
					</li>
					{/* <li className={liStyle}>
						<NavLink
							to="/blog"
							className={({ isActive }) =>
								`py-[4px] flex gap-2 items-center ${
									isActive ? "active-text" : ""
								}`
							}
						>
							<span className="inline-block">
								<BlogSvg classes={svgStyle} />
							</span>
							Blog
						</NavLink>
					</li> */}
					<li className={liStyle}>
						<NavLink
							to="/contact"
							className={({ isActive }) =>
								`py-[4px] flex gap-2 items-center ${
									isActive ? "active-text" : ""
								}`
							}
							onClick={toggleMenu}
						>
							<span className="inline-block">
								<ContactSvg classes={svgStyle} />
							</span>
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default MobileNav;
