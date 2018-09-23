import * as React from 'react';

import DevTools from 'mobx-react-devtools';

import DeckGLOverlay from './components/DeckGLOverlay/index';

import './App.css';

// export interface AppProps {
//   instructions: string;
//   welcomeMessage: string;
// }

// AppProps is the interface
// {} afterward is the state
// class App extends React.Component<AppProps, {}> {
class App extends React.Component {

  public render() {
    return (
      <DeckGLOverlay
        controller={true}
        width={window.innerWidth}
        height={window.innerHeight}
        mapStyle={"mapbox://styles/mapbox/dark-v9"}
        preventStyleDiffing={true}>
        <DevTools />
      </DeckGLOverlay>
    );
  }
}

export default App;
