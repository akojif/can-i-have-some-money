import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const DEFAULT_NAME = '';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      money: ''
    }
  }

  getNameText() {
    const name = this.props.match.params.name;
    if (name) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)},`;
    }
    return DEFAULT_NAME;
  }

  getMoneyHref() {
    const { money } = this.state;
    return `https://www.paypal.me/givedustystickmoney/${money}`;
  }

  isValidMoney() {
    const { money } = this.state;
    return !isNaN(money);
  }

  renderLink() {
    if (this.isValidMoney()) {
      return (
        <div>
          <br />
          <a
            className="button"
            href={this.getMoneyHref()}
            target="blank"
          >
            Give us some money
          </a>
        </div>
      );
    }
    return <p className="notmoney">Please enter a valid and ideally large amount of money</p>
  }

  renderForm() {
    return (
      <div className="text">
          <input
            className="input"
            type="text"
            onChange={(e) => this.setState({ money: e.target.value})}
            value={this.state.money}
            placeholder="enter some money"
          />
        {this.renderLink()}
      </div>
    )
  }

  render() {
    return (
      <div className="container">
        <div className="words">
          <h1>{this.getNameText()}</h1>
          <p>can I have some money?</p>
        </div>
        {this.renderForm()}
      </div>
    );
  }
}

export default Home;
