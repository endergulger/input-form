import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Card";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { useState } from "react";
// import DataResult from "../src/DataResult";

const EditScreen = () => {
  const [data, setData] = useState();
  let values = [];
  let result = null;
  const setDataHandler = () => {
    values = [
      {
        username: "Barkin",
        email: "barkin@gmail.com",
        password: "barkin123",
      },
      {
        username: "Ali",
        email: "ali@gmail.com",
        password: "ali123",
      },
    ];

    axios
      .post("AIzaSyBp69hI6h3248fgXwUfXlPyrIArCoLZfyg", values)
      .then((response) => {})
      .catch((error) => {
        alert(console.log(error));
      });
  };

  const getDataHandler = () => {
    axios
      .get("AIzaSyBp69hI6h3248fgXwUfXlPyrIArCoLZfyg")
      .then((response) => {
        setData(response.data["-AIzaSyBp69hI6h3248fgXwUfXlPyrIArCoLZfyg"]);
      })
      .catch((error) => {
        alert(console.log(error));
      });
  };

  if (data) {
    result = data.map((m) => {
      return (
        <Card bg='secondary' body>
          {m.username} - {m.email}, {m.password}
        </Card>
      );
    });
  }
  return (
    <Container>
      <Row>
        <Col>
          <Button onClick={setDataHandler} variant='primary'>
            Data Gönder
          </Button>
        </Col>
        <Col>
          <Button onClick={getDataHandler} variant='danger'>
            Data Al
          </Button>
        </Col>
        <Col>{result}</Col>
      </Row>
    </Container>
  );
};

// export class EditScreen extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       username: "",
//       email: "",
//       password: "",
//     };
//   }

//   render() {
//     return (
//       <div className='base-container' ref={this.props.containerRef}>
//         <div className='header'>Edit</div>
//         <div className='content'>
//           <div className='image'></div>
//           <div className='form'>
//             <div className='form-group'>
//               <label htmlFor='username'>Username</label>
//               <input type='text' name='username' placeholder='username' onChange={(event) => this.updateInput(event, "username")} />
//             </div>
//             <div className='form-group'>
//               <label htmlFor='email'>Email</label>
//               <input type='text' name='email' placeholder='email' onChange={(event) => this.updateInput(event, "email")} />
//             </div>
//             <div className='form-group'>
//               <label htmlFor='password'>Password</label>
//               <input type='text' name='password' placeholder='password' onChange={(event) => this.updateInput(event, "password")} />
//             </div>
//             <div className='footer'>
//               <button type='button' disabled={!this.state.username || !this.state.email || !this.state.password} className='btn' onClick={this.handleSubmit}>
//                 Edit
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default EditScreen;
