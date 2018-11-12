import React, { Component } from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";

import Userform from './components/Userform'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">hi
        <Userform/>
        </div>

      </Provider>
    );
  }
}

export default App;
