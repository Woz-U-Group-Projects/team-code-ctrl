import React, { Component } from 'react';
import { Container, Row, Card, CardBody, CardTitle, CardText, CardImg, Jumbotron, Col, Button } from 'reactstrap';


class Home extends Component {

  render() {
    return (
      <Container>
        <div >
          <div>
            <h1 className="display-3 font-weight-bold text-center">XSR</h1>
            <p className="text-center">We Do All The Things!</p>
          </div>
        </div>
      <div>
          <Col sm={ { size: 'auto', offset: -2} } >
          <Card>
          <CardBody>
                <CardTitle className="text-center font-weight-bold">XSR News</CardTitle>

              <CardText> <p>Id anim fugiat fugiat proident aute incididunt et irure enim cillum aliqua ullamco. Consectetur nostrud sit est non ex. Quis anim et occaecat culpa pariatur eiusmod.
<br/><br/>
Officia dolor enim excepteur mollit in ea aliquip. Nisi reprehenderit amet ad excepteur esse deserunt. Ipsum dolor ad irure aute sit adipisicing ex non consectetur incididunt minim. Officia cillum nulla officia non. Magna cillum ex dolor nisi ad commodo enim et quis. Sit culpa occaecat in et tempor cillum.
<br/><br/>
Aute dolor esse consequat in nulla et nulla sit. Cupidatat minim do aute consequat cupidatat labore exercitation voluptate. Magna exercitation enim culpa nisi et proident. Nisi excepteur consectetur ea dolore. Sunt minim veniam incididunt velit.</p>
            </CardText>

          </CardBody>
          </Card>
        </Col>
      </div>

      </Container>
      
    )
  }
} 

export default Home;
