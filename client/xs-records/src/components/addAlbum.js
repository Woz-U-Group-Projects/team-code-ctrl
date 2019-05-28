import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import '../addAlbum.css'
class AddAlbum extends Component {

  constructor(props) {
    super(props);

    this.state = {
      albumName: '',
      artist: '',
      numberOfTracks: Number,
      cover:'',
      redirect: false
    }
  }

  onChange = (event) => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleSubmit = (event) => {

    fetch('/albums/add', {
      method: 'post',
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => this.setState({redirect: data.message}))
  }

  render() {
    return (
      <Container fluid>
        <h2 className="text-center"> Add a new Album </h2>
        <hr />
        <Row>
          <Col md={{size: 6, offset: 3}}>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="albumName"></Label>
                <Input onChange={this.onChange} type="text" name="albumName" id="albumName" placeholder="Album Name" />
              </FormGroup>
              <FormGroup>
                <Label for="artist"></Label>
                <Input onChange={this.onChange} type="text" name="artist" id="artist" placeholder="Artist" />
              </FormGroup>
              <FormGroup>
                <Label for="numberOfTracks"></Label>
                <Input onChange={ this.onChange } type="number" name="numberOfTracks" id="numberOfTracks" placeholder="Number of Tracks — e.g. 12" />
              </FormGroup>
              <FormGroup>
                <Label for="cover" id='uploadCoverLabel'>Upload Cover</Label>
                <Input onChange={this.onChange} type="file" id="coverBtn" />
              </FormGroup>
              <Button  href="/add-track">Continue to Tracks</Button>
            </Form>
          </Col>
        </Row>
      </Container>
      )
}
}

export default AddAlbum;
