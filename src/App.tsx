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
      <DeckGLOverlay>
        <DevTools />
      </DeckGLOverlay>
    );
  }
}

export default App;
