import React, { Component } from 'react';
import { Container,  Card, CardBody, CardTitle, CardText,  Jumbotron, Col } from 'reactstrap';
import '../home.css';



class Home extends Component {

  render() {
    return (

            <Container>
              <div >
                <div>
            <Jumbotron className="jumbotronHome">
              <h1 className="display-3 font-weight-bold text-center jumbotronH1" >XSR</h1>
              <p className="text-center font-weight-500" jumbotronHomeP>XS Records is the easiest way for musicians to get music into Spotify, iTunes, Amazon, Google Play, Tidal, and more.</p>
                  </Jumbotron>
                </div>
              </div>
              <div>
          <Col sm={ { size: 'auto', offset: -2 } } >
            <Card className='cardHome'>
              <CardBody className='cardBody'>
                <CardTitle className="display-4 text-center font-weight-bold cardTitle">XSR News</CardTitle>

                <CardText className='cardText'> <p>Id anim fugiat fugiat proident aute incididunt et irure enim cillum aliqua ullamco. Consectetur nostrud sit est non ex. Quis anim et occaecat culpa pariatur eiusmod.
<br /><br />
                        Officia dolor enim excepteur mollit in ea aliquip. Nisi reprehenderit amet ad excepteur esse deserunt. Ipsum dolor ad irure aute sit adipisicing ex non consectetur incididunt minim. Officia cillum nulla officia non. Magna cillum ex dolor nisi ad commodo enim et quis. Sit culpa occaecat in et tempor cillum.
<br /><br />
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
