import Store from "./store/Store.js";
import { Outlet } from "react-router-dom";
import Footer from "./sections/Footer.js";
import Header from "./sections/Header.js";
import useOnline from "./utils/useOnline.js";

function App() {

  const online = useOnline();

  if (!online) {
    return (
      <h1>Problem with the connectivity....</h1>
    )
  }

  return (
    <Store>
      <Header />
      <Outlet />
      <Footer />
    </Store>
  )
}

export default App