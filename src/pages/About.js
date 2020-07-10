import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
const GigsImage = styled.img`
  max-width: 100%;
`;

const GigsRow = styled(Row)`
  align-items: center;
`;

function About() {
  return (
    <Container>
      <h1></h1>
      <GigsRow>
        <Col xs={12} lg={6}>
          <GigsImage
            alt="placeholder"
            src="https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png"
          />
        </Col>
        <Col xs={12} lg={6}>
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>
      </GigsRow>
    </Container>
  );
}

export default About;
