import React from "react";
import Nav from "../components/Nav";

export default function Product(props) {
  return (
    <div>
      <Nav />
      <div
        class="row gx-4 gx-lg-5 align-items-center"
        style={{ marginTop: "200px" }}
      >
        <div
          class="col-md-6"
          style={{ display: "flex", padding: "0px", justifyContent: "center" }}
        >
          <img
            class="card-img-top mb-5 mb-md-0"
            src={props.img}
            alt="..."
            style={{ width: "700px", height: "600px", alignSelf: "center" }}
          />
        </div>
        <div class="col-md-6">
          <h1 class="display-5 fw-bolder">Demo Item</h1>
          <div class="fs-5 mb-5">
            <span>$10.00</span>
          </div>
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi
            alias magni, accusamus eius blanditiis delectus ipsam minima ea iste
            laborum vero?
          </p>
          <div class="d-flex">
            <button
              class="btn btn-outline-dark flex-shrink-0"
              type="button"
              style={{ marginRight: "20px" }}
            >
              Buy Now
            </button>
            <button class="btn btn-outline-dark flex-shrink-0" type="button">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
