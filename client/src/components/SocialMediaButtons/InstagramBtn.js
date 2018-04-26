import React from "react";

export const InstagramBtn = props => (
  <button {...props}>
    {props.children}<i className="fab fa-instagram fa-4x"></i>
  </button>
);
