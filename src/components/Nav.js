import React from "react";
import "../css/intro.css";

export default function Nav(props) {
  return (
    <div>
      <nav
        class="navbar navbar-expand-md navbar-dark fixed-top "
        style={{ backgroundColor: "#2874f0" }}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="/home">
            Esell
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                {props.name === "home" ? (
                  <a class="nav-link active" aria-current="page" href="/home">
                    Home
                  </a>
                ) : (
                  <a class="nav-link" aria-current="page" href="/home">
                    Home
                  </a>
                )}
              </li>
              <li class="nav-item">
                {props.name === "shop" ? (
                  <a class="nav-link active" aria-current="page" href="/shop">
                    Shop
                  </a>
                ) : (
                  <a class="nav-link" aria-current="page" href="/shop">
                    Shop
                  </a>
                )}
              </li>
              <li class="nav-item">
                {props.name === "products" ? (
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="/product"
                  >
                    My Products
                  </a>
                ) : (
                  <a class="nav-link" aria-current="page" href="/product">
                    My products
                  </a>
                )}
              </li>
              <li class="nav-item">
                {props.name === "about" ? (
                  <a class="nav-link active" aria-current="page" href="/about">
                    About us
                  </a>
                ) : (
                  <a class="nav-link" aria-current="page" href="/about">
                    About us
                  </a>
                )}
              </li>
              <li class="nav-item">
                {props.name === "upload" ? (
                  <a class="nav-link active" aria-current="page" href="/upload">
                    Upload New Product
                  </a>
                ) : (
                  <a class="nav-link" aria-current="page" href="/upload">
                    Upload New Product
                  </a>
                )}
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn"
                type="submit"
                style={{ backgroundColor: "white" }}
              >
                Search
              </button>
            </form>
            <button
              class="btn"
              type="submit"
              style={{
                backgroundColor: "white",
                marginLeft: "10px",
                textAlign: "center",
              }}
            >
              Cart
            </button>
            <a href="/profile">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                class="rounded-circle"
                height="40"
                alt="Black and White Portrait of a Man"
                loading="lazy"
                style={{ marginLeft: "20px" }}
              />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
