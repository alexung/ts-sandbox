import * as React from 'react';

import DeckGLOverlay from './components/DeckGLOverlay/index';
import logo from './logo.svg';

import './App.css';

export interface AppProps {
  instructions: string;
  welcomeMessage: string;
}

export const INITIAL_VIEW_STATE: object = {
  bearing: -27.396674584323023,
  latitude: 38.8283,
  longitude: -98.5795,
  maxZoom: 15,
  minZoom: 1,
  pitch: 40.5,
  zoom: 4,
};

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
        <DeckGLOverlay
          controller={true}
          width={window.innerWidth}
          height={window.innerHeight}
          mapStyle={"mapbox://styles/mapbox/dark-v9"}
          preventStyleDiffing={true}
          initialViewState={INITIAL_VIEW_STATE} />
      </div>
    );
  }
}

export default App;
