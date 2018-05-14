import React, { Component } from 'react';
import Navigation from './navigation';


class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  render() {
    return (
        <div>
          <Navigation />
          <p>{this.state.response}</p>
        </div>
    );
  }
}

export default App;
