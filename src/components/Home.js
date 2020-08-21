import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
  color: #ffe4e4;
  background: #be5683;
`;
const StyledP = styled.p`
  color: #ffe4e4;
`;

const Home = () => {
  return (
    <div className="home-container">
      <StyledHeader>Your favorite food, delivered while coding</StyledHeader>

      <StyledP>
        Get your pizza fast! 5 minutes or less money back guarantee!
      </StyledP>
      <img className="pizza-img" src="../Assets/Pizza.jpg" alt="pizza" />
    </div>
  );
};

export default Home;
