import React from "react";
import { Link } from "react-router-dom";
import { StyledHeader, StyledNav } from "../styles/StyledHeader";

export default function Header(props) {
  return (
    <StyledHeader>
      <div className="header-content">
        <Link className="navbar-logo" to="/">
          THE LOGO
        </Link>
        <StyledNav>
          <Link to="/">Home</Link>
          <Link to="/">Recipes</Link>
          <Link to="/">Sign Up</Link>
          <Link to="/login">Login</Link>
        </StyledNav>
      </div>
    </StyledHeader>
  );
}
