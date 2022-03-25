import React from "react";
import { FirebaseAddData } from "../FirebaseAddData";
import AnotherPage from "../AnotherPage";
import { Link } from "react-router-dom";
import { Box, InputLabel, MenuItem, Select } from "@mui/material";
import { FormControl } from "react-bootstrap";

export class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      city: "",
      gender: "",
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
    console.log("Your input city is: " + this.state.city);
    console.log("Your input gender is: " + this.state.gender);

    FirebaseAddData(this.state);
  }

  render() {
    return (
      <div className='base-container' ref={this.props.containerRef}>
        <div className='header'>Register Screen</div>
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
            {/* <Box sx={{ minWidth: 150 }}>
              <FormControl>
                <InputLabel id='demo-simple-select-label'>City</InputLabel>
                <Select labelId='demo-simple-select-label' id='demo-simple-select' label='City' onChange={(event) => this.updateInput(event, "city")}>
                  <MenuItem value='Konak'>Konak</MenuItem>
                  <MenuItem value='Bornova'>Bornova</MenuItem>
                  <MenuItem value='Karşıyaka'>Karşıyaka</MenuItem>
                </Select>
              </FormControl>
            </Box> */}
            <br />
            <AnotherPage />
            <ul>
              <Link to='datatable'>Data Page</Link>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterScreen;
