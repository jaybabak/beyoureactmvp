import React from "react";
import { Link } from "react-router-dom";

export const Logo = () => (
  <div className="logo">
    <Link to="/">
      <img src="/assets/images/logo/logo.svg" alt="Be You by MQ | Mariam Qureshi Makeup artist - Bridal makeup and full makeup services in the Ottawa and Gatineau Area. Mariam provides services for all occasion!" />
    </Link>
  </div>
);
