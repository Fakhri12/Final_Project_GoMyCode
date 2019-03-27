import React from "react";
import {Button,Modal,ModalHeader,ModalBody,ModalFooter,Form,FormGroup,Label,Input,} from "reactstrap";

class AddGround extends React.Component {
    constructor(props) {
        super(props);
        this.state = {modal: false};
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  toggle =() => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
<div className="add">
    <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}<i class="fas fa-plus"></i></Button>
    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>Add Movie</ModalHeader>
        <ModalBody>
            <Form>
                <FormGroup>
                    <Label for="image">Image:</Label>
                    <Input type="text" name="image" id="image" placeholder="enter the picture" onChange={this.handleInput}/>
                </FormGroup>
                <FormGroup>
                    <Label for="title">Ground Title:</Label>
                    <Input type="text" name="title" id="title" placeholder="enter the title"onChange={this.handleInput}/>
                </FormGroup>
                <FormGroup>
                    <Label for="rating">Rating:</Label>
                    <Input type="text" name="rate" id="rate" placeholder="enter the rating" onChange={this.handleInput}/>
                </FormGroup>
            </Form>
        </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={() => this.props.addMovie(this.state)}>Add</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
    </Modal>
</div>
    );
  }
}

export default AddGround;