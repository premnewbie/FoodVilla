import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

const App = lazy(() => import("./src/App.js"));
const Home = lazy(() => import('./src/pages/Home.js'));
const About = lazy(() => import('./src/pages/About.js'));
const ErrorPage = lazy(() => import('./src/pages/ErrorPage.js'));
const Contact = lazy(() => import('./src/pages/Contact.js'));
const Cart = lazy(() => import('./src/pages/Cart.js'));
const RestaurantPage = lazy(() => import('./src/pages/RestaurantPage.js'))

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Suspense fallback={<h1>Loading please wait...</h1>}><App /></Suspense>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Suspense fallback={<h1>Loading please wait...</h1>}><Home /></Suspense>
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading please wait...</h1>}><About /></Suspense>
            },
            {
                path: "/contact",
                element: <Suspense fallback={<h1>Loading please wait...</h1>}><Contact /></Suspense>
            },
            {
                path: "/cart",
                element: <Suspense fallback={<h1>Loading please wait...</h1>}><Cart /></Suspense>
            },
            {
                path: "/restaurant/:resId",
                element: <Suspense fallback={<h1>Loading please wait...</h1>}><RestaurantPage /></Suspense>
            }
        ]
    },
]);

const root = createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);