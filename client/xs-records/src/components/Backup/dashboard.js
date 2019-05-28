import React, { Component } from 'react';
import { Container, Row, Card, CardBody, CardTitle, CardText, CardImg, CardSubtitle, Jumbotron, Col, Button } from 'reactstrap';


class Dashboard extends Component {

  render() {
    return (
      <Container>
        <Row className="row justify-content-md-center">
          <Jumbotron className='jumbotron'>
            <h1 className="display-4 font-weight-bold jumbotronH1">My Discography</h1>
          </Jumbotron>
        </Row>
        <Row className="row justify-content-md-center">
        <a className="btn btn-dark btn-lg " href="/add-album" role="button">Add A New Release &raquo;</a>
        </Row>
        <Row >
          <Col md={ 4 }>
            <Card color="default" className='cardDash' >
              <CardImg src="https://upload.wikimedia.org/wikipedia/en/8/83/SnoopDoggDILIH.jpg" alt="Drop It Like It's Hot Album Cover"></CardImg>
              <CardBody>
                <CardTitle className="h2 mb-2 pt-2 font-weight-bold">Album 1</CardTitle>
                <CardSubtitle className="h3 mb-2 pt-2 font-weight-bold">Artist</CardSubtitle>
                <CardText className="mb-4 cardTextDash">
                  <ol>
                    <li> <a href="/">Drop It Like It's Hot (featuring Pharrell)</a> </li>
                    <li> <a href="/">Get 2 Know U (featuring Jelly Roll)</a> </li> 
                  </ol>
                </CardText>
                <Row>
                  <Button color="dark">More Details</Button>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md={ 4 }>
            <Card color="default" className='cardDash'>
              <CardImg src="http://epmgaa.media.clients.ellingtoncms.com/img/photos/2016/06/13/1465825178_6e473d50ca73a0ac5058fbd2edce81f4-2_t580.jpg?8f1b5874916776826eb17d7e67de7278c987ca33" alt="Coolaid Album Cover"></CardImg>
              <CardBody>
                <CardTitle className="h2 mb-2 pt-2 font-weight-bold">Album 2</CardTitle>
                <CardSubtitle className="h3 mb-2 pt-2 font-weight-bold">Artist</CardSubtitle>
                <CardText className="mb-4 cardTextDash">
                  <ol>
                    <li> <a href="/">Legend</a> </li>
                    <li> <a href="/">Ten Toes Down</a> </li>
                    <li> <a href="/">Don't Stop</a> </li>
                  </ol>
                </CardText>
                <Row>
                  <Button color="dark">More Details</Button>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md={ 4 }>
            <Card color="default" className='cardDash'>
              <CardImg src="https://upload.wikimedia.org/wikipedia/en/1/10/R_and_G_%28Rhythm_and_Gangsta%29_The_Masterpiece_%28Snoop_Dog_album%29_coverart.jpg" alt="R&G Album Cover"></CardImg>
              <CardBody>
                <CardTitle className="h2 mb-2 pt-2 font-weight-bold">Album 3</CardTitle>
                <CardSubtitle className="h3 mb-2 pt-2 font-weight-bold">Artist</CardSubtitle>
                <CardText className="mb-4 cardTextDash">
                  <ol>
                    <li> <a href="/">(Intro) I Love to Give You Light</a> </li>
                    <li> <a href="/">Bang Out</a> </li>
                    <li> <a href="/">Drop It Like It's Hot (featuring Pharrell)</a> </li>
                  </ol>
                </CardText>
                <Row>
                  <Button color="dark">More Details</Button>
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
