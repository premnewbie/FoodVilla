import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";

const App = lazy(() =>  import("./src/App.js"));
const Home = lazy(() => import('./src/pages/Home.js'));
const About = lazy(() => import('./src/pages/About.js'));
const ErrorPage = lazy(() => import('./src/pages/ErrorPage.js'));
const Contact = lazy(() => import('./src/pages/Contact.js'));
const Cart = lazy(() => import('./src/pages/Cart.js'));
const RestaurantPage = lazy(() => import('./src/pages/RestaurantPage.js'))

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
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantPage />
            }
        ]
    },
]);

root.render(<RouterProvider router={appRouter} />);