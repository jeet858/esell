import React from "react";
import "../css/intro.css";
import { FaShippingFast } from "react-icons/fa";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { BsGraphUpArrow } from "react-icons/bs";

export default function Banner() {
  return (
    <div class="container px-4 py-5" id="featured-3">
      <h2 class="pb-2 border-bottom">Columns with icons</h2>
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="feature col">
          <div
            class="feature-icon bg-primary bg-gradient"
            style={{
              width: "4rem",
              height: "4rem",
              borderRadius: "0.75rem",
              marginBottom: "1rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <FaShippingFast
              style={{
                width: "3rem",
                height: "3rem",
                color: "white",
                alignSelf: "center",
              }}
            />
          </div>
          <h2>Super Fast Delivery</h2>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
          <a href="/shop" class="icon-link">
            Shop Now
          </a>
        </div>
        <div class="feature col">
          <div
            class="feature-icon bg-primary bg-gradient"
            style={{
              width: "4rem",
              height: "4rem",
              borderRadius: "0.75rem",
              marginBottom: "1rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <AiTwotoneSafetyCertificate
              style={{
                width: "3rem",
                height: "3rem",
                color: "white",
                alignSelf: "center",
              }}
            />
          </div>
          <h2>Secure Buying and Selling</h2>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
          <a href="/shop" class="icon-link">
            Shop Now
          </a>
        </div>
        <div class="feature col">
          <div
            class="feature-icon bg-primary bg-gradient"
            style={{
              width: "4rem",
              height: "4rem",
              borderRadius: "0.75rem",
              marginBottom: "1rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <BsGraphUpArrow
              style={{
                width: "3rem",
                height: "3rem",
                color: "white",
                alignSelf: "center",
              }}
            />
          </div>
          <h2>Growth To Your Business</h2>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
          <a href="/shop" class="icon-link">
            Shop Now
            <svg class="bi" width="1em" height="1em">
              <symbol id="collection" viewBox="0 0 16 16">
                <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z" />
              </symbol>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
