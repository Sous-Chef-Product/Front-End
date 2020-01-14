import React from 'react'
import { Link } from "react-router-dom";
import { StyledHeader } from "../styles/StyledHeader";
import styled from "styled-components";

export default function Header(props) {
    return (
        <StyledHeader>
            <div className="header-content">
                <Link className="navbar-logo" to="/">THE LOGO</Link>
                <nav className="nav-items">
                    <ul>
                        <Link to ="/">Home</Link>
                        
                    </ul>
                </nav>
            </div>
        </StyledHeader>
    )
}
