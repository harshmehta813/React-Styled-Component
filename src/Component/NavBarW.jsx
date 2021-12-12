import React from "react";
import styled from "styled-components";
import logo from "./vedas.png";

const NavBar = styled.header`
  position: relative;
  padding: 0px;
  height: 120px;
  background-color: #000;
  border: none;
  border-radius: 0.5rem;
`;

const Logo = styled.div`
  position: absolute;
  top: 28px;
  left: 40px;
  height: 65px;
  @media all and (max-width: 420px) {
    display: none;
  }
`;

const Resources = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
  letter-spacing: 1px;
  font-weight: 300;
`;

const Button = styled.button`
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  padding: 15px 30px;
  border-radius: 2px;
  color: #fff;
  background: #00bcd4;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  border: 0px;
  @media all and (max-width: 620px) {
    padding: 10px 5px;
    font-size: 10px;
  }
`;

const A = styled.a`
  color: #fff;
  margin-left: 50px;
  cursor: pointer;

  @media all and (max-width: 620px) {
    margin-left: 20px;
    font-size: 10px;
  }
`;

const NavBarW = () => {
  return (
    <NavBar>
      <Logo>
        <img height="65px" src={logo} alt="Logo" />
      </Logo>
      <Resources>
        <Button>TRY VEDAS</Button>
        <A>Learn</A>
        <A>Resources</A>
        <A>About</A>
      </Resources>
    </NavBar>
  );
};

export default NavBarW;
