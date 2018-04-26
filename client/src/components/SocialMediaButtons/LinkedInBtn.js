import React from "react";

export const LinkedInBtn = props => (
  <button {...props}>
    {props.children}<i className="fab fa-linkedin fa-4x"></i>
  </button>
);
