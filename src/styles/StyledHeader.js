import styled from "styled-components";

export const StyledHeader = styled.div`
  background: black;
  padding: 0 20px;
  box-sizing: border-box;

  .header-content {
    max-width: 1280px;
    min-height: 8vh;
    padding: 20px 0 px;
    margin: 0 auto;
    box-sizing: border-box;
    text-decoration: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 500px) {
      max-width: 1280px;
      min-height: 30vh;
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
    }
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  width: 40%;

  @media screen and (max-width: 500px) {
    max-width: 1280px;
    min-height: 15vh;
    align-items:center;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;