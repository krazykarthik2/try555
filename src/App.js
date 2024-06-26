import "./App.css";
import "./bs.css";
import "./theme.scss";
import "./fonts.css";
import { Suspense, lazy } from "react";
import Loading from "./components/utils/Loading";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavTop from "./components/NavTop";
import { app, analytics } from "./firebase/firebase";
import ProductSingle from "./components/Products/ProductSingle/ProductSingle";
import EditProductImages from "./components/UploadProducts/EditProductImages/EditProductImages";
import EditGalleryImages from "./components/UploadGallery/EditGalleryImages/EditGalleryImages";
console.log(app, analytics);
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const AboutMore = lazy(() => import("./components/AboutMore"));
const Team = lazy(() => import("./components/Team"));
const Contact = lazy(() => import("./components/Contact"));
const Services = lazy(() => import("./components/Services"));
const Products = lazy(() => import("./components/Products"));
const Gallery = lazy(() => import("./components/Gallery"));

const Admin = lazy(() => import("./components/Admin"));
const UploadGallery = lazy(() => import("./components/UploadGallery"));
const UploadProducts = lazy(() => import("./components/UploadProducts"));
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <div className="vh-100 vw-100 d-flex flex-column">
          <NavTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about">
              <Route path="" element={<About />} />
              <Route path="more" element={<AboutMore />} />
              <Route path="team" element={<Team />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products">
              <Route path="" element={<Products />} />
              <Route path=":id" element={<ProductSingle />} />
            </Route>
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/admin">
              <Route path="" element={<Admin />} />
              <Route path="upload">
                <Route path="gallery" element={<UploadGallery />} />
                <Route path="products" element={<UploadProducts />} />
              </Route>
              <Route path="manage">
                <Route path="gallery">
                  <Route path=":id">
                    <Route path="" element={<UploadGallery />} />
                    <Route path="images" element={<EditGalleryImages />} />
                  </Route>
                </Route>
                <Route path="products">
                  <Route path=":id">
                    <Route path="" element={<UploadProducts />} />
                    <Route path="images" element={<EditProductImages />} />
                  </Route>
                </Route>
              </Route>
            </Route>
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
