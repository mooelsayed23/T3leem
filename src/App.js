import { useEffect } from "react";
import About from "./component/about/About";
import ContactUsPage from "./component/connectUs/ConnectUs";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Main from "./component/main/Main";
import Menu from "./component/nav/Menu";
import Product from "./component/product/Product";
import SimpleSlider from "./component/Slider/Slider";
import { Routes, Route } from "react-router-dom";
import Path from "./component/Path/Path";
function App() {
  useEffect(() => {
    if (window.location.pathname === "/T3leem") {
      window.location.href = "/";
    }
  }, []);
  return (
    <>
      <Header />
      <div className="links z-2 mx-auto ">
      <Menu />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SimpleSlider /> <Main />
            </>
          }
        />

        <Route path="course/:id" element={<Product />} />
        <Route path="path/:value" element={<Path />} />
        <Route path="about" element={<About />} />
        <Route path="ContactUs" element={<ContactUsPage />} />
        <Route
          path="*"
          element={
            <>
              <SimpleSlider /> <Main />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
