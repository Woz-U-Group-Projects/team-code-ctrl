import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class AddTrack extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      audio:'',
      redirect: false
    }
  }

  onChange = (event) => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleSubmit = (event) => {

    fetch('/tracks/add', {
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
        <h2 className="text-center"> Add tracks </h2>
        <hr />
        <Row>
          <Col md={{size: 6, offset: 3}}>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="title"></Label>
                <Input onChange={this.onChange} type="text" name="title" id="title" placeholder="Song Title" />
              </FormGroup>
              <FormGroup>
                <Label for="audio" id="audio">Upload Audio </Label>
                <Input onChange={this.onChange} type="file" />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
      )
}
}

export default AddTrack;
