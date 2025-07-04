import { createRoot } from "react-dom/client";
import Store from "./src/store/Store.js";
import Home from "./src/pages/Home.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./src/pages/About.js";

const root = createRoot(document.getElementById('root'));

const App = () => {

    return (<Store>
        <RouterProvider router={appRouter} />
    </Store>)
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    }
])

root.render(<App />)