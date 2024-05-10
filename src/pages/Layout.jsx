import Header from "../components/Navigation/Header";
import { Outlet } from "react-router-dom";
import PersonalInfo from "../components/PersonalInfo";
import AsideNav from "../components/AsideNav";

import { useSelector } from "react-redux";

const Layout = () => {
	// get if darkMode is true or false
	const darkMode = useSelector((state) => state.darkMode);

	return (
		<div className={darkMode ? "dark" : ""}>
			<div className={`wrapper bg-light dark:bg-dark`}>
				<Header />
				<main className="container">
					<div className="flex gap-5 flex-col md:flex-row">
						<PersonalInfo />
						<div className="w-full md:w-[70%]  lg:w-[66.667%] | bg-white-100 dark:bg-black rounded-xl">
							<Outlet />
						</div>
						<AsideNav />
					</div>
				</main>
			</div>
		</div>
	);
};

export default Layout;
