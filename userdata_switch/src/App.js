import React, { Component } from "react";
import "./App.css";
import store from "./store";
import {Provider} from "react-redux";

import Contacts from './components/Contacts'
import AddContact from './components/AddContact'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
        hi
        <AddContact/>
        <Contacts/>
        </div>
      </Provider>
    );
  }
}

export default App;
