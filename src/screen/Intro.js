import React from "react";
import "../css/intro2.css";

export default function Intro() {
  return (
    <div className="cnt">
      <div className="int-cnt">
        <div className="img-int-dv"></div>
        <div className="int-cnent">
          <p>Get Started</p>
          <p style={{ fontSize: 14, fontWeight: 600 }}>
            Enter a registered mobile number or restaurant ID to continue
          </p>
          <input type="text" placeholder="Enter Id or Mobile Number" />
          <a href="/home">Continue</a>
        </div>
      </div>
    </div>
  );
}
