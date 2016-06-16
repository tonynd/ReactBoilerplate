import React, { Component } from 'react';
import Axios from 'axios';
import Child from './child.react';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      response: ""
    };
  }

  componentDidMount() {
    Axios.get("/api/v0/sample")
      .then((obj) => {
        this.setState({
          response: obj.data.response
        });
      });
  }

  render() {
    return (
      <div className="container">
        {this.state.response}
        <Child />
      </div>
    );
  }
}
