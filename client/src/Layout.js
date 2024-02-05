import Header from "./Header";
import {Outlet} from "react-router-dom";
import Footer from "./pages/Footer";

export default function Layout() {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer/>
    </main>
  );
}
