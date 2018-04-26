import React from "react";

export const FacebookBtn = props => (
  <button {...props}>
    {props.children}<i className="fab fa-facebook-square fa-4x"></i>
  </button>
);
