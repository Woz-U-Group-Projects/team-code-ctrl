import React, { Component } from 'react';
import { Container, Row, Card, CardBody, CardTitle, CardText, CardImg, Jumbotron, Col, Button } from 'reactstrap';



class Home extends Component {

  render() {
    return (
//       <Container>
//         <div>
//           <h1 className="display-3 font-weight-bold text-center">XSR</h1>
//           <div >
//             <p className="text-center" >XS Records is the easiest way for musicians to get music into Spotify, iTunes, Amazon, Google Play, Tidal, and more.
// Upload as much as you want, keep 100% of your royalties.</p>
//           </div>
//         </div>
//       </Container>
            <Container>
              <div >
                <div>
            <Jumbotron className='Jumbotron'>
              <h1 className="display-3 font-weight-bold text-center" >XSR</h1>
              <p className="text-center font-weight-bold" style={ { color: '#9A9592' } }>XS Records is the easiest way for musicians to get music into Spotify, iTunes, Amazon, Google Play, Tidal, and more.</p>
                  </Jumbotron>
                </div>
              </div>
              <div>
                <Col sm={ { size: 'auto', offset: -2 } } >
            <Card >
              <CardBody style={ { backgroundColor: '#d5e6f7' } } >
                <CardTitle className="display-4 text-center font-weight-bold">XSR News</CardTitle>

                <CardText style={ { color: '#9A9592' } }> <p>Id anim fugiat fugiat proident aute incididunt et irure enim cillum aliqua ullamco. Consectetur nostrud sit est non ex. Quis anim et occaecat culpa pariatur eiusmod.
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
