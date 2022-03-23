import React from "react";
import { FirebaseVeriEkleme } from "../FirebaseVeriEkleme";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import EnhancedTable from "../EnhancedTable";
import { Link } from "react-router-dom";

export class RegisterScreen extends React.Component {
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

    FirebaseVeriEkleme(this.state.username, this.state.email, this.state.password);
  }

  render() {
    return (
      <div className='base-container' ref={this.props.containerRef}>
        <div className='header'>Register</div>
        <div className='content'>
          <div className='image'></div>
          <div className='form'>
            <div className='form-group'>
              <label htmlFor='username'>Username</label>
              <input type='text' name='username' placeholder='username' onChange={(event) => this.updateInput(event, "username")} />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input type='text' name='email' placeholder='email' onChange={(event) => this.updateInput(event, "email")} />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input type='text' name='password' placeholder='password' onChange={(event) => this.updateInput(event, "password")} />
            </div>
            <div className='footer'>
              <button type='button' disabled={!this.state.username || !this.state.email || !this.state.password} className='btn' onClick={this.handleSubmit}>
                Register
              </button>
            </div>
            <BrowserRouter>
              <Routes>
                <Route path='/datatable' element={<EnhancedTable />} />
              </Routes>
            </BrowserRouter>
            {/* <ul>
              <li>
                <Link to='datatable'>Dataları Listele</Link>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterScreen;
