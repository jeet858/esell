import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from "./screen/Intro";
import Home from "./screen/Home";
import Shop from "./screen/Shop";
import UploadProduct from "./screen/UploadProduct";
import About from "./screen/About";
import Profile from "./screen/Profile";
import MyProducts from "./screen/MyProducts";
import Product from "./screen/Product";
import img1 from "../src/assets/475_1529737845.webp";
import img2 from "../src/assets/58742Ethnic Bohemian Handmade Bags for Women and Girls.jpg";
import img3 from "../src/assets/617xW7EBHRL._UY500_.jpg";
import img4 from "../src/assets/61qEEO7QxtL._AC_UY535_.jpg";
import img5 from "../src/assets/61uSI5lUWHL._UY695_.jpg";
import img6 from "../src/assets/71AvQED5rJL._UY675_.jpg";
import img7 from "../src/assets/917STEqmK7L._UY695_.jpg";
import img8 from "../src/assets/91p8jS7kjFS._AC_UY675_.jpg";
import img9 from "../src/assets/Handmade-Jute-Bag.jpg.jpg";
import img10 from "../src/assets/images (1).jpg";
import img11 from "../src/assets/images (2).jpg";
import img12 from "../src/assets/images.jpg";
import img13 from "../src/assets/s-l500.jpg";
import img14 from "../src/assets/sriaog-ethnic-banjara-handmade-cotton-tote-bags-with-zipper-for-women-traditional-large-white-handbags-for-ladies-18-inch-mirror-embroidered-applique-work-product-images-rvi0pbwakt-0-202207210240.jpg";
import img15 from "../src/assets/81HfmqcAphL._AC_UY675_.jpg";
import img16 from "../src/assets/71PcBzT4zFL._AC_UY695_.jpg";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<MyProducts />} />
        <Route path="/shop/item1" element={<Product img={img1} />} />
        <Route path="/shop/item2" element={<Product img={img2} />} />
        <Route path="/shop/item3" element={<Product img={img3} />} />
        <Route path="/shop/item4" element={<Product img={img4} />} />
        <Route path="/shop/item5" element={<Product img={img5} />} />
        <Route path="/shop/item6" element={<Product img={img6} />} />
        <Route path="/shop/item7" element={<Product img={img7} />} />
        <Route path="/shop/item8" element={<Product img={img8} />} />
        <Route path="/shop/item9" element={<Product img={img9} />} />
        <Route path="/shop/item10" element={<Product img={img10} />} />
        <Route path="/shop/item11" element={<Product img={img11} />} />
        <Route path="/shop/item12" element={<Product img={img12} />} />
        <Route path="/shop/item13" element={<Product img={img13} />} />
        <Route path="/shop/item14" element={<Product img={img14} />} />
        <Route path="/shop/item15" element={<Product img={img15} />} />
        <Route path="/shop/item16" element={<Product img={img16} />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="upload" element={<UploadProduct />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
