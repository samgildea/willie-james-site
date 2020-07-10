import React from "react";
import { Container, Jumbotron, Row, Col, Button } from "react-bootstrap";

import styled from "styled-components";

const Hero = styled(Jumbotron)`
  height: 50vh;
`;

const ImageRow = styled(Row)``;

const ImageCol = styled(Col)`
  img {
    max-width: 100%;
  }
`;
function App() {
  return (
    <>
      <Hero>
        <Container>
          <h1>Willie James Band</h1>
        </Container>
      </Hero>
      <Container>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <ImageRow>
          <ImageCol>
            <img alt="placeholder" src="https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png" />
          </ImageCol>
          <ImageCol>
            <img alt="placeholder" src="https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png" />
          </ImageCol>
          <ImageCol>
            <img alt="placeholder" src="https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png" />
          </ImageCol>
        </ImageRow>
      </Container>
      <Jumbotron>
        <Container>
          <h1>Book Willie James Band</h1>
          <p>
            <Button variant="primary">Contact</Button>
          </p>
        </Container>
      </Jumbotron>
    </>
  );
}

export default App;
