import React, { Component } from "react";
import "./App.css";
import Display from './components/Display'
import store from './store'
import {Provider} from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Display/>
        </div>
        </Provider>
    );
  }
}

export default App;
