import Store from "./store/Store.js";
import { Outlet } from "react-router-dom";
import Footer from "./sections/Footer.js";
import Header from "./sections/Header.js";

function App() {
  return (
    <Store>
        <Header />
        <Outlet />
        <Footer />
    </Store>
  )
}

export default App