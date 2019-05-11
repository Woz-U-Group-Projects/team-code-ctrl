import React, { Component } from 'react';
import { Container, Row, Card, CardBody, CardTitle, CardText, CardImg, Jumbotron, Col, Button } from 'reactstrap';


class Dashboard extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Jumbotron>
            <h1 className="display-3 font-weight-bold">My Discography</h1>
            <p>Template for a simple marketing or informational website. It includes a large callout
              called a jumbotron and three supporting pieces of content. Use it as a starting point
              to create something more unique.</p>
            <p><a className="btn btn-primary btn-lg" href="/" role="button">Add A New Release &raquo;</a></p>
          </Jumbotron>
        </Row>
        <Row>
          <Col md={ 4 }>
            <Card color="default">
              <CardImg src="https://upload.wikimedia.org/wikipedia/en/8/83/SnoopDoggDILIH.jpg" alt="Card image cap"></CardImg>
              <CardBody>
                <CardTitle className="h2 mb-2 pt-2 font-weight-bold">Album 1</CardTitle>
                <CardTitle className="h3 mb-2 pt-2 font-weight-bold">Artist</CardTitle>
                <CardText className="mb-4">
                  <ol>
                    <li> <a href="/">Drop It Like It's Hot (featuring Pharrell)</a> </li>
                    <li> <a href="/">Get 2 Know U (featuring Jelly Roll)</a> </li>
                    
                  </ol>
                </CardText>
                <Row>
                  <Button color="primary">More Details</Button>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md={ 4 }>
            <Card color="default">
              <CardImg src="http://epmgaa.media.clients.ellingtoncms.com/img/photos/2016/06/13/1465825178_6e473d50ca73a0ac5058fbd2edce81f4-2_t580.jpg?8f1b5874916776826eb17d7e67de7278c987ca33" alt="Card image cap"></CardImg>
              <CardBody>
                <CardTitle className="h2 mb-2 pt-2 font-weight-bold">Album 2</CardTitle>
                <CardTitle className="h3 mb-2 pt-2 font-weight-bold">Artist</CardTitle>
                <CardText className="mb-4">
                  <ol>
                    <li> <a href="/">Legend</a> </li>
                    <li> <a href="/">Ten Toes Down</a> </li>
                    <li> <a href="/">Don't Stop</a> </li>
                  </ol>
                </CardText>
                <Row>
                  <Button color="primary">More Details</Button>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md={ 4 }>
            <Card color="default">
              <CardImg src="https://upload.wikimedia.org/wikipedia/en/1/10/R_and_G_%28Rhythm_and_Gangsta%29_The_Masterpiece_%28Snoop_Dog_album%29_coverart.jpg" alt="Card image cap"></CardImg>
              <CardBody>
                <CardTitle className="h2 mb-2 pt-2 font-weight-bold">Album 3</CardTitle>
                <CardTitle className="h3 mb-2 pt-2 font-weight-bold">Artist</CardTitle>
                <CardText className="mb-4">
                  <ol>
                    <li> <a href="/">(Intro) I Love to Give You Light</a> </li>
                    <li> <a href="/">Bang Out</a> </li>
                    <li> <a href="/">Drop It Like It's Hot (featuring Pharrell)</a> </li>
                  </ol>
                </CardText>
                <Row>
                  <Button color="primary">More Details</Button>
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
