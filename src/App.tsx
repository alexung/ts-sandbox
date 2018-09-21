import * as React from 'react';

import DeckGLOverlay from './components/DeckGLOverlay/index';
import logo from './logo.svg';

import './App.css';

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
        <DeckGLOverlay />
      </div>
    );
  }
}

export default App;
