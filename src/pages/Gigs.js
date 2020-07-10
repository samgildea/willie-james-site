import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import moment from "moment";
import styled from "styled-components";

const GigsImage = styled.img`
  max-width: 100%;
`;

const GigsRow = styled(Row)`
  align-items: center;
`;
const GigsQuery = gql`
  query {
    gigs {
      gigsList {
        name
        location
        datetime
      }
    }
  }
`;
function Gigs() {
  return (
    <Container>
      <GigsRow>
        <Col xs={12} lg={6}>
          <GigsImage
            alt="placeholder"
            src="https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png"
          />
        </Col>
        <Col xs={12} lg={6}>
          <h1>Upcoming Gigs</h1>
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
      <Query query={GigsQuery}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;

          return data.gigs.gigsList.map((gig) => (
            <>
              <Row>
                <Col xs={4} lg={6}>
                  <h1>{gig.name}</h1>
                </Col>
                <Col xs={4} lg={3}>
                  <h2>{gig.location}</h2>
                </Col>
                <Col xs={4} lg={3}>
                  <h2>{moment(gig.datetime).format("MMMM Do YYYY, h:mm a")}</h2>
                </Col>
              </Row>
              <hr />
            </>
          ));
        }}
      </Query>
    </Container>
  );
}

export default Gigs;
