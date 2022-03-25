import React from "react";
import { FirebaseAddData } from "../FirebaseAddData";
import AnotherPage from "../AnotherPage";
import { Link } from "react-router-dom";
import FirebaseUpdateDelete from "../FirebaseUpdateDelete";

export class UpdateScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
    };

    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(event, field) {
    // this.setState({ username: event.target.value })
    // this.setState({ email: event.target.value })
    // this.setState({ password: event.target.value })
    this.setState({ [field]: event.target.value });
  }

  handleSubmit() {
    console.log("Your input username is: " + this.state.username);
    console.log("Your input email is: " + this.state.email);
    console.log("Your input password is: " + this.state.password);

    FirebaseAddData(this.state.username, this.state.email, this.state.password);
  }

  render() {
    return (
      <div className='base-container' ref={this.props.containerRef}>
        <div className='header'>Update Screen</div>
        <div className='content'>
          <div className='image'></div>
          <div className='form'>
            <FirebaseUpdateDelete />
            <br />
            <AnotherPage />
            <br />
            <ul>
              <Link to='/datatable'>Data Page</Link>
              <br></br>
              <Link to='/'>Home Page</Link>
            </ul>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default UpdateScreen;
