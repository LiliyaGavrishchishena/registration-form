import React, { Component } from 'react';
import Form from './form';
import { connect } from 'react-redux';
// configs
import authOperations from '../redux/auth/authOperations';
//styles
import '../styles/app.scss';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Form />
      </div>
    );
  }
}
const mapDispatchToProp = {
  getUser: authOperations.signIn
};

export default connect(
  null,
  mapDispatchToProp
)(App);
