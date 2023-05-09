import React from "react";
import ProductTile from "../components/ProductTile";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import img1 from "../assets/475_1529737845.webp";
import img2 from "../assets/58742Ethnic Bohemian Handmade Bags for Women and Girls.jpg";
import img3 from "../assets/617xW7EBHRL._UY500_.jpg";
import img4 from "../assets/61qEEO7QxtL._AC_UY535_.jpg";
import img5 from "../assets/61uSI5lUWHL._UY695_.jpg";
import img6 from "../assets/71AvQED5rJL._UY675_.jpg";
import img7 from "../assets/917STEqmK7L._UY695_.jpg";
import img8 from "../assets/91p8jS7kjFS._AC_UY675_.jpg";
import img9 from "../assets/Handmade-Jute-Bag.jpg.jpg";
import img10 from "../assets/images (1).jpg";
import img11 from "../assets/images (2).jpg";
import img12 from "../assets/images.jpg";
import img13 from "../assets/s-l500.jpg";
import img14 from "../assets/sriaog-ethnic-banjara-handmade-cotton-tote-bags-with-zipper-for-women-traditional-large-white-handbags-for-ladies-18-inch-mirror-embroidered-applique-work-product-images-rvi0pbwakt-0-202207210240.jpg";
import img15 from "../assets/81HfmqcAphL._AC_UY675_.jpg";
import img16 from "../assets/71PcBzT4zFL._AC_UY695_.jpg";
export default function Shop() {
  return (
    <div>
      <Nav name="shop" />
      <div style={{ paddingTop: "60px" }}>
        <h4 class="display-6 text-body-emphasis">Welcome to our shop</h4>
      </div>
      <div
        class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <ProductTile
          img={img1}
          name="Demo Item"
          price="$10"
          href="shop/item1"
        />
        <ProductTile
          img={img2}
          name="Demo Item"
          price="$10"
          href="shop/item2"
        />
        <ProductTile
          img={img3}
          name="Demo Item"
          price="$10"
          href="shop/item3"
        />
        <ProductTile
          img={img4}
          name="Demo Item"
          price="$10"
          href="shop/item4"
        />
      </div>
      <div
        class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <ProductTile
          img={img5}
          name="Demo Item"
          price="$10"
          href="shop/item5"
        />
        <ProductTile
          img={img6}
          name="Demo Item"
          price="$10"
          href="shop/item6"
        />
        <ProductTile
          img={img7}
          name="Demo Item"
          price="$10"
          href="shop/item7"
        />
        <ProductTile
          img={img8}
          name="Demo Item"
          price="$10"
          href="shop/item8"
        />
      </div>
      <div
        class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <ProductTile
          img={img9}
          name="Demo Item"
          price="$10"
          href="shop/item9"
        />
        <ProductTile
          img={img10}
          name="Demo Item"
          price="$10"
          href="shop/item10"
        />
        <ProductTile
          img={img11}
          name="Demo Item"
          price="$10"
          href="shop/item11"
        />
        <ProductTile
          img={img12}
          name="Demo Item"
          price="$10"
          href="shop/item12"
        />
      </div>
      <div
        class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <ProductTile
          img={img13}
          name="Demo Item"
          price="$10"
          href="shop/item13"
        />
        <ProductTile
          img={img14}
          name="Demo Item"
          price="$10"
          href="shop/item14"
        />
        <ProductTile
          img={img15}
          name="Demo Item"
          price="$10"
          href="shop/item15"
        />
        <ProductTile
          img={img16}
          name="Demo Item"
          price="$10"
          href="shop/item16"
        />
      </div>
      <Footer />
    </div>
  );
}
