import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./src/App.js";
import Home from "./src/pages/Home.js";
import About from "./src/pages/About.js";
import ErrorPage from "./src/pages/ErrorPage.js";

const root = createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    },
])

root.render(<RouterProvider router={appRouter} />)