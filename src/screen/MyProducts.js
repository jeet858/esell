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
export default function MyProducts() {
  return (
    <div>
      <Nav name="products" />
      <div style={{ paddingTop: "60px" }}>
        <h4 class="display-6 text-body-emphasis">
          Here are the products you are selling
        </h4>
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
      </div>
      <Footer />
    </div>
  );
}
