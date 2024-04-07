import React from 'react'
import ReactDOM from 'react-dom/client'
import {
	createBrowserRouter,
	RouterProvider
} from "react-router-dom";

import Home from './pages/home/Home.jsx'
import "./style.css";

import MainOverlay from "./pages/home/Overlay.jsx";

const router = createBrowserRouter([
	{
		path: "*",
		element: <><Home/><MainOverlay/></>,
	}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);