import React from "react";
import Nav from "../components/Nav";

export default function About() {
  return (
    <div>
      <Nav name="about" />
      <div
        class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column"
        style={{
          backgroundColor: "rgb(40, 116, 240)",
          minWidth: "100%",
          minHeight: "100vh",
        }}
      >
        <div class="px-3" style={{ paddingTop: "100px", color: "white" }}>
          <h1>About us</h1>
          <p class="lead">
            Cover is a one-page template for building simple and beautiful home
            pages. Download, edit the text, and add your own fullscreen
            background photo to make it your own.
          </p>
          <p class="lead">
            <a
              href="/shop"
              class="btn btn-lg btn-light fw-bold border-white bg-white"
              style={{ color: "#2874f0" }}
            >
              Shop Now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
