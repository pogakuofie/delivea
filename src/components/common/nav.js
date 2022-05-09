import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <Bar>
      <Logo>DELIVEA</Logo>
      <Menu>
        <UL>
          <LI>Couriers</LI>
          <LI>Track Order</LI>
          <LI>API</LI>
          <LI>About Us</LI>
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
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
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
`;

const CTA = styled.div`
  display: flex;
  flex-drection: row;
  justify-content: center;
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
  margin-right: 10px;
`;

const Logo = styled.p`
  color: #4950ba;
  font-weight: 900;
  font-size: 24px;
`;
