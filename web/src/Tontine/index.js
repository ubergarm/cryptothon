import React, { Component } from 'react';
import Tontine from "./components/Tontine";
import Login from "./components/Login";
import './tontine.css';
import {
  login,
  rollCall,
  invest,
  entryCapital,
} from "./contract";

const LOCAL_STORAGE_KEY = "shitcoin";
class TontineContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      error: null,
      account: null,

      alive: null,
      invested: null,
      entryCapital: null,
    };
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    try {
      const { expiration } = JSON.parse(localStorage[LOCAL_STORAGE_KEY]);
      if ((new Date()).getTime() < expiration) {
        this.setState({
          loggedIn: true,
        });
      }
    } catch(err) {}

    [
      { name: "alive", fn: rollCall, },
      { name: "invested", fn: invest, },
      { name: "entryCapital", fn: entryCapital, },
    ].forEach(({
      name,
      fn,
    }) => {
      fn().then((result) => {
        this.setState({
          ...this.state,
          [name]: result,
        });
      }).catch(err => {
        this.setState({
          ...this.state,
          [name]: err.message,
        });
      });
    });
  }

  handleChange() {
    this.setState({
      error: null,
    });
  }

  login(values) {
    login(values.password).then(({ account, timeout }) => {
      const expiration = new Date((new Date()).getTime() + timeout*1000);
      localStorage[LOCAL_STORAGE_KEY] = JSON.stringify({
        expiration: expiration.getTime(),
      });
      this.setState({
        account,
        loggedIn: true,
        error: null,
      });
    }).catch(error => {
      this.setState({
        loggedIn: false,
        error,
      });
    });
  }

  render() {
    if (!this.state.loggedIn) {
      return (
        <Login
          login={this.login}
          error={this.state.error}
          handleChange={this.handleChange}
        />
      );
    }

    return (
      <Tontine
        alive={this.state.alive}
        invested={this.state.invested}
        entryCapital={this.state.entryCapital}
      />
    );
  }
}

export default TontineContainer;
