import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
	Layout,
	HomePage,
	ResumePage,
	WorksPage,
	ContactPage,
} from "./pages/index";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "resume",
				element: <ResumePage />,
			},
			{
				path: "works",
				element: <WorksPage />,
			},
			{
				path: "contact",
				element: <ContactPage />,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
