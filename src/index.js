import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import "../src/components/Header.scss";
import Header from "./components/Header";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Container, Row, Col } from "react-bootstrap";

import Gigs from "./pages/Gigs";
import About from "./pages/About";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const client = new ApolloClient({
  link: new HttpLink({
    uri:
      "https://api.takeshape.io/project/97383bb6-bdb1-438b-aa0c-23c6cdc27a56/graphql",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer c8465b8a979c4462a19128d23c6cda90`,
    },
  }),

  cache: new InMemoryCache(),
});

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <React.StrictMode>
        <Header />
        <Container fluid className="px-0 main">
          <Row noGutters>
            <Col>
                <Switch>
                  <Route exact path="/" component={App}  /> 
                  <Route exact path="/gigs" component={Gigs} /> 
                  <Route exact path="/about" component={About} /> 
                </Switch>
            </Col>
          </Row>
        </Container>
        <Container fluid className="px-0">
          <Row noGutters>
            <Col className="footer-col">
              <footer>
                <span>© {new Date().getFullYear()}, Willie James Band</span>
              </footer>
            </Col>
          </Row>
        </Container>
      </React.StrictMode>
    </ApolloProvider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
