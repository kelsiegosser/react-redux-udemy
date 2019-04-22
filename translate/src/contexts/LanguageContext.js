import React from 'react';

const Context = React.createContext('english');

export class LanguageStore extends React.Component {
  // because export used here, when importing the class, have to import using { LanguageStore }
  // example: import { LanguageStore } from ___
  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
