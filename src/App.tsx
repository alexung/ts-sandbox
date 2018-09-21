import * as React from 'react';
import './App.css';

import logo from './logo.svg';

export interface AppProps {
  instructions: string;
  welcomeMessage: string;
}

// AppProps is the interface
// {} afterward is the state
class App extends React.Component<AppProps, {}> {
  public static defaultProps: Partial<AppProps> = {
    instructions: 'Default Props works!',
    welcomeMessage: 'Sup',
  };

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.welcomeMessage}</h1>
        </header>
        <p className="App-intro">
          {this.props.instructions}
        </p>
      </div>
    );
  }
}

export default App;
