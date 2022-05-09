import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const Container = ({ children, title = "Delivea" }) => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{title}</title>
      </Helmet>
      <Break>{children}</Break>
    </>
  );
};

export default Container;

const Break = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  align-items: flex-start;
  background-color: #e5e5e5;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 1201px) {
    margin-left: 300px;
    margin-right: 300px;
  }

  @media (max-width: 1200px) {
    margin-left: 100px;
    margin-right: 100px;
  }

  @media (max-width: 1024px) {
    margin-left: 50px;
    margin-right: 50px;
  }

  @media (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (max-width: 480px) {
    margin-left: 5px;
    margin-right: 5px;
  }
`;
