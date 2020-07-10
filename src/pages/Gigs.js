import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import moment from "moment"

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
      <h1>Upcoming Gigs</h1>
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
