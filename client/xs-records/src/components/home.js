import React, { Component } from 'react';
import { Container, Row, Card, CardBody, CardTitle, CardText, CardImg, Jumbotron, Col, Button } from 'reactstrap';


class Home extends Component {

  render() {
    return (
      <Container>
        <div>
          <h1 className="display-3 font-weight-bold text-center">XSR</h1>
          <div>
            <p className="text-center">We Do It All!</p>
          </div>
        </div>
      </Container>
    )
  }
} 

export default Home;
