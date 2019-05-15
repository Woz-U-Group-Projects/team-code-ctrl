import React, { Component } from 'react';
import { Container, Row, Card, CardBody, CardTitle, CardText, CardImg, Jumbotron, Col, Button } from 'reactstrap';


class Home extends Component {

  render() {
    return (
      <Container>
        <div>
          <h1 className="display-3 font-weight-bold text-center">XSR</h1>
          <div>
            <p className="text-center">We Do All The Things!</p>
          </div>
        </div>
<br/>
<br/>
        <div>
          <h1 className="display-5 font-weight-bold text-center">XSR News</h1>
          <p> Esse Lorem eu reprehenderit aute. Excepteur velit occaecat ex tempor. Laborum consequat aute non voluptate enim irure amet proident commodo mollit. Cupidatat proident laborum nulla commodo eiusmod deserunt sunt consequat tempor sit aliquip. Non irure officia sint Lorem dolore deserunt laboris laboris qui. Proident in velit non id aliqua est sunt officia. </p>
        </div>

      </Container>
    )
  }
} 

export default Home;
