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
<Jumbotron >
<h1 className="display-3 font-weight-bold text-center">XSR</h1>
<p className="text-center">XS Records is the easiest way for musicians to get music into Spotify, iTunes, Amazon, Google Play, Tidal, and more.</p>
</Jumbotron>

    )
  }
} 

export default Home;
