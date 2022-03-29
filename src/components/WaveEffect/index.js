import jquery from "jquery";
import $ from "jquery";
import React, { useEffect } from "react";

export default function WaveEffect() {
  useEffect(() => {
    jquery(function ($) {
      "use strict";
      $(".slider").ripples({
        dropRadius: 10,
        perturbance: 0.01,
      });
    });
  });
  return (
    <div
      className="slider"
      style={{
        backgroundImage: "url(/images/avatar.jpg)",
        backgroundSize: "cover",
        height: "100vh",
      }}
    ></div>
  );
}
