import { NavLink } from "react-router-dom";
import { PersonSvg } from "../assets/svg/PersonSvg.jsx";
import { ResumeSvg } from "../assets/svg/ResumeSvg.jsx";
import { WorksSvg } from "../assets/svg/WorksSvg.jsx";
import { BlogSvg } from "../assets/svg/BlogSvg.jsx";
import { ContactSvg } from "../assets/svg/ContactSvg.jsx";

const classes =
	"text-[13px] dark:text-gray-400 dark:hover:text-white-100 font-poppin bg-white-300 dark:bg-gray-600 w-[60px] h-[60px] flex flex-col justify-center items-center text-center transition-all duration-300 hover:bg-cyan text-gray-300 dark:hover:bg-cyan hover:text-white-100 rounded-xl group";

const svgClasses =
	"fill-gray-300 dark:fill-gray-400 group-hover:fill-white-100 transition-all duration-300";

const AsideNav = () => {
	return (
		<aside className="hidden lg:w-[8.33%] lg:block py-4 bg-white-100 dark:bg-black h-fit rounded-xl sticky top-[30px]">
			<ul className="flex flex-col justify-center items-center">
				<li className="mb-4">
					<NavLink className={classes}>
						<PersonSvg classes={svgClasses} size="20" />
						About
					</NavLink>
				</li>
				<li className="mb-4">
					<NavLink className={classes}>
						<ResumeSvg classes={svgClasses} size="20" />
						Resume
					</NavLink>
				</li>
				<li className="mb-4">
					<NavLink className={classes}>
						<WorksSvg classes={svgClasses} size="20" />
						Works
					</NavLink>
				</li>
				<li className="mb-4">
					<NavLink className={classes}>
						<BlogSvg classes={svgClasses} size="20" />
						Blog
					</NavLink>
				</li>
				<li className="">
					<NavLink className={classes}>
						<ContactSvg classes={svgClasses} size="20" />
						Contact
					</NavLink>
				</li>
			</ul>
		</aside>
	);
};

export default AsideNav;
