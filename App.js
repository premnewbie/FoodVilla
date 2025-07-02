import { createRoot } from "react-dom/client";
import Header from "./src/sections/Header";
import Body from "./src/sections/Body";
import Footer from "./src/sections/Footer";
import Store from "./store/Store";

const root = createRoot(document.getElementById('root'));



const App = () => {

    return (
        <Store>
            <Header />
            <Body />
            <Footer />
        </Store>
    )
}

root.render(<App />)