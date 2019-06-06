import React, { Component } from 'react';
import { Container } from 'reactstrap';
import '../home.css';


class Home extends Component {

    render() {
        return (
            <Container className='flexCenter'>
                <div className='hero '>
                    <div className='xsrDescription'>
                        <h1 className="display-3 font-weight-bold text-center xsrTitle" >XSR</h1>
                        <p className="text-center font-weight-500 xsrText" >XS Records is the easiest way for musicians to get music onto Spotify, iTunes, Amazon, Google Play, Tidal, and more.</p>
                    </div>
                </div>

                <br/>
                <div>
                    <div className='news'>
                        <div className='newsBody'>
                            <div className="display-4 text-center font-weight-bold newsTitle">XSR News</div>

                            <div className='newsText'> <p>Id anim fugiat fugiat proident aute incididunt et irure enim cillum aliqua ullamco. Consectetur nostrud sit est non ex. Quis anim et occaecat culpa pariatur eiusmod.
<br /><br />
                                Officia dolor enim excepteur mollit in ea aliquip. Nisi reprehenderit amet ad excepteur esse deserunt. Ipsum dolor ad irure aute sit adipisicing ex non consectetur incididunt minim. Officia cillum nulla officia non. Magna cillum ex dolor nisi ad commodo enim et quis. Sit culpa occaecat in et tempor cillum.
<br /><br />
                                Aute dolor esse consequat in nulla et nulla sit. Cupidatat minim do aute consequat cupidatat labore exercitation voluptate. Magna exercitation enim culpa nisi et proident. Nisi excepteur consectetur ea dolore. Sunt minim veniam incididunt velit.</p>
                            </div>

                        </div>
                    </div>
                </div>

            </Container>



        )
    }
}

export default Home;
