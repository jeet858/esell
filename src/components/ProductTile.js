import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Product from "../screen/Product";

export default function ProductTile(props) {
  return (
    <a
      class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"
      style={{ paddingBottom: "30px", width: "20%", textDecoration: "none" }}
      href={props.href}
    >
      <img
        class="bg-body shadow-sm mx-auto"
        style={{
          height: "300px",
          borderRadius: "21px 21px 0 0",
          width: "80%",
        }}
        src={props.img}
      />
      <div
        class="my-3 py-3"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <p class="lead" style={{ fontWeight: "800", color: "#44475b" }}>
          {props.name}
        </p>
        <p class="lead" style={{ fontWeight: "600", color: "#44475b" }}>
          {props.price}
        </p>
      </div>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          class="btn btn-primary btn-lg px-4 gap-3"
          style={{ fontSize: 16 }}
        >
          Buy Now
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary btn-lg px-4"
          style={{ fontSize: 16 }}
        >
          Add to Cart
        </button>
      </div>
    </a>
  );
}
