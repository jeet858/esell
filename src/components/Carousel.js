import React from "react";
import "../css/intro.css";
import img1 from "../assets/WhatsApp Image 2023-05-09 at 22.09.16.jpg";
import img2 from "../assets/Blog_1200x900-3.jpg";
import img3 from "../assets/WhatsApp Image 2023-05-09 at 22.13.26.jpg";

export default function Carousel() {
  return (
    <div>
      <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="bd-placeholder-img"
              width="100%"
              height="100%"
              src={img1}
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              alt=""
            />

            <div class="container">
              <div class="carousel-caption text-start">
                <h3
                  style={{ color: "white", backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                  Online presence empowers small businesses with larger markets,
                  visibility, and data-driven insights
                </h3>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              src={img2}
              alt=""
            />

            <div class="container">
              <div class="carousel-caption"></div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              src={img3}
              alt=""
            />

            <div class="container">
              <div class="carousel-caption text-end"></div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
