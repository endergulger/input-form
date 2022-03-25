import React, { Component } from "react";
import "./App.css";
import "./components/styles/RegisterScreen.css";
import PublicRoutes from "./PublicRoutes";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <PublicRoutes />
        </header>
      </div>
    );
  }
}

export default App;
