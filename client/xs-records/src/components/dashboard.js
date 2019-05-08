import React, { Component } from 'react';
import { Fragment } from 'react';
import { Container, Row, Card, CardBody, CardTitle, CardText, Jumbotron, Col, Button } from 'reactstrap';


class Dashboard extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Jumbotron>
            <h1 className="display-3">XS-Records</h1>
            <p>Template for a simple marketing or informational website. It includes a large callout 
              called a jumbotron and three supporting pieces of content. Use it as a starting point
              to create something more unique.</p>
            <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
          </Jumbotron>
        </Row>
        <Row>
          <Col md={4}>
            <Card color="default">
              <CardBody>
                <CardTitle className="h2 mb-2 pt-2 font-weight-bold">Heading</CardTitle>
                <CardText className="mb-4">Donec id elit non mi porta gravida at eget metus. Fusce 
                  dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
                  massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. 
                  Donec sed odio dui. 
                </CardText>
                <Row>
                  <Button color="primary">View Details</Button>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md={4}>
            <Card color="default">
              <CardBody>
                <CardTitle className="h2 mb-2 pt-2 font-weight-bold">Heading</CardTitle>
                <CardText className="mb-4">Donec id elit non mi porta gravida at eget metus. 
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, 
                  ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna 
                  mollis euismod. Donec sed odio dui. 
                </CardText>
                <Row>
                  <Button color="primary">View Details</Button>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md={4}>
            <Card color="default">
              <CardBody>
                <CardTitle className="h2 mb-2 pt-2 font-weight-bold">Heading</CardTitle>
                <CardText className="mb-4">Donec id elit non mi porta gravida at eget metus. 
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, 
                  ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna 
                  mollis euismod. Donec sed odio dui. 
                </CardText>
                <Row>
                  <Button color="primary">View Details</Button>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      )
  }
}

export default Dashboard;
