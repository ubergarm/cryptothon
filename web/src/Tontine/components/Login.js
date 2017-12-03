import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from "./Form";

const FontAwesome = require('react-fontawesome');

const getMessage = (typing) => {
  if (typing > 35) {
    return "";
  } else if (typing > 25) {
    return "This is a long password or else you are super bad at typing";
  } else if (typing > 15) {
    return "You can do it, we're all rooting for you";
  } else if (typing > 8) {
    return "Just a little more. Super sfe.";
  } else if (typing > 4) {
    return "Yess, keep typing that password";
  } else if (typing > 1) {
    return "There we go";
  }

  return "";
}

const Message = ({ message }) => {
  return (
    <p className="message">{message}</p>
  );
};

export default class Login extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    error: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {
      message: "",
      typing: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.login(values);
  }

  handleChange(e) {
    const typing = this.state.typing +1;
    this.setState({
      typing,
      message: getMessage(typing),
    });

    this.props.handleChange();
  }

  render() {
    const {
      error,
    } = this.props;

    return (
      <div className="login">
        <h1>Log in and shitcoins will rain</h1>
        <p>Give us your password on this incredibly secure site</p>
        <small>There is no way we will steal your password from you look at all the lock icons</small>
        <div className="locks">
          <FontAwesome name='lock' />
          <FontAwesome name='lock' />
          <FontAwesome name='lock' />
          <FontAwesome name='lock' />
          <FontAwesome name='lock' />
          <FontAwesome name='lock' />
          <FontAwesome name='lock' />
          <FontAwesome name='lock' />
        </div>
        <Form
          handleSubmit={this.handleSubmit}
          fields={[{
            handleChange: this.handleChange,
            type: "password",
            name: "password",
            label: (
              <label>Password:</label>
            ),
          }]}
          submitValue="Give it here"
        >
          <Message
            message={(error && error.message) || this.state.message}
          />
        </Form>
      </div>
    );
  }
}
