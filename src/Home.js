import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const DEFAULT_NAME = '';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      money: 0
    }
  }

  getNameText() {
    const name = this.props.match.params.name;
    if (name) {
      return `, ${name.charAt(0).toUpperCase() + name.slice(1)}`;
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
          <a href={this.getMoneyHref()} target="blank">Give us some money</a>
        </div>
      );
    }
    return <p>Please enter a valid and ideally large amount of money</p>
  }

  renderForm() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.setState({ money: e.target.value})}
          value={this.state.money}
        />
        {this.renderLink()}
      </div>
    )
  }

  render() {
    return (
      <div className="site-wrapper">
        <h1>
          {`Can I have some money${this.getNameText()}?`}
        </h1>
        {this.renderForm()}
      </div>
    );
  }
}

export default Home;
