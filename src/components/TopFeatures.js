import React from "react";
import "../css/intro.css";

export default function TopFeatures() {
  return (
    <div
      style={{
        flexDirection: "column",
        display: "flex",
        paddingRight: "50px",
        backgroundColor: "white",
      }}
    >
      <hr class="featurette-divider" />
      <div
        class="row featurette"
        style={{ display: "flex", alignSelf: "flex-end" }}
      >
        <div class="col-md-7">
          <h2 class="featurette-heading">
            First featurette heading.{" "}
            <span class="text-muted">It’ll blow your mind.</span>
          </h2>
          <p class="lead">
            Some great placeholder content for the first featurette here.
            Imagine some exciting prose here.
          </p>
        </div>
        <div class="col-md-5">
          <svg
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" />
            <text x="50%" y="50%" fill="#aaa" dy=".3em">
              500x500
            </text>
          </svg>
        </div>
      </div>
      <hr class="featurette-divider" />
      <div class="row featurette" style={{ paddingLeft: "50px" }}>
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">
            Oh yeah, it’s that good.{" "}
            <span class="text-muted">See for yourself.</span>
          </h2>
          <p class="lead">
            Another featurette? Of course. More placeholder content here to give
            you an idea of how this layout would work with some actual
            real-world content in place.
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <svg
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" />
            <text x="50%" y="50%" fill="#aaa" dy=".3em">
              500x500
            </text>
          </svg>
        </div>
      </div>
      <hr class="featurette-divider" />
      <div
        class="row featurette"
        style={{ display: "flex", alignSelf: "flex-end", paddingRight: "50px" }}
      >
        <div class="col-md-7">
          <h2 class="featurette-heading">
            And lastly, this one. <span class="text-muted">Checkmate.</span>
          </h2>
          <p class="lead">
            Some great placeholder content for the first featurette here.
            Imagine some exciting prose here.
          </p>
        </div>
        <div class="col-md-5">
          <svg
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" />
            <text x="50%" y="50%" fill="#aaa" dy=".3em">
              500x500
            </text>
          </svg>
        </div>
      </div>
      <hr class="featurette-divider" />
    </div>
  );
}
