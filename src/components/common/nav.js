import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <Bar>
      <Logo>DELIVEA</Logo>
      <Menu>
        <UL>
          <Link className='link' to={"/request"}>
            <LI>Couriers</LI>
          </Link>
          <Link className='link' to={"/"}>
            <LI>Track Order</LI>
          </Link>
          <Link className='link' to={"/docs"}>
            <LI>API</LI>
          </Link>
          <Link className='link' to={"/about"}>
            <LI>About Us</LI>
          </Link>
        </UL>
      </Menu>
      <CTA>
        <p>Login</p>
        <Button type='button' value={"Get Started"} />
      </CTA>
    </Bar>
  );
};

export default Nav;

const Bar = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.div``;

const UL = styled.ul`
  display: flex;
  flex-drection: row;
  list-style-type: none;
`;

const LI = styled.li`
  margin-left: 15px;
  margin-right: 15px;
  cursor: pointer;

  &:visited {
    text-decoration: none;
  }
`;

const CTA = styled.div`
  display: flex;
  flex-drection: row;
  align-items: center;
`;

const Button = styled.input`
  border: none;
  background-color: #4950ba;
  color: white;
  font-family: "Quicksand", sans-serif;
  padding: 0;
  border-radius: 15px;
  height: 24px;
  padding-left: 5px;
  padding-right: 5px;
  margin-left: 10px;
  cursor: pointer;
`;

const Logo = styled.p`
  color: #4950ba;
  font-weight: 900;
  font-size: 24px;
  cursor: pointer;
`;
