import * as React from 'react';

import DeckGL from 'deck.gl';
import { observer, inject } from 'mobx-react';
import * as reactMapGL from 'react-map-gl';

// import DeckGLOverlayStore from '../../store/DeckGLOverlayStore/index';

// interface DeckGLOverlayProps {
//   stores?: DeckGLOverlayStore
// }


@inject('stores')
// @inject(({ deckGLOverlayStore }: { deckGLOverlayStore: DeckGLOverlayStore }) => ({
//   deckGLOverlayStore
// }))
@observer
class DeckGLOverlay extends React.Component<any, {}> {
  public render() {
    const { controller, initialViewState, width, 
      height, mapStyle, preventStyleDiffing, 
      MAPBOX_TOKEN } = this.props.stores.deckGLOverlayStore;
    
    return (
      <DeckGL
        layers={this.renderLayers()}
        controller={controller}
        initialViewState={initialViewState}>
          <reactMapGL.StaticMap
            width={width}
            height={height}
            mapStyle={mapStyle}
            preventStyleDiffing={preventStyleDiffing}
            mapboxApiAccessToken={MAPBOX_TOKEN} />
      </DeckGL>
    );
  };
  
  private renderLayers = () => {
    return [];
  }
}

export default DeckGLOverlay;