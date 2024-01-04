import About from "./component/about/About";
import ContactUsPage from "./component/connectUs/ConnectUs";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Main from "./component/main/Main";
import Menu from "./component/nav/Menu";
import Product from "./component/product/Product";
import SimpleSlider from "./component/Slider/Slider";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <div className="links position-relative z-2 scroll-x ">
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
