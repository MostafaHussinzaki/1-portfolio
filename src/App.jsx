import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, HomePage } from "./pages/index";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
