import React from "react";

export const TwitterBtn = props => (
  <button {...props}>
    {props.children}<i className="fab fa-twitter fa-4x"></i>
  </button>
);
