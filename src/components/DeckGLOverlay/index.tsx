import * as React from 'react';

import DeckGL from 'deck.gl';
import { observer, inject } from 'mobx-react';
import * as reactMapGL from 'react-map-gl';

// import DeckGLOverlayStore from '../../store/DeckGLOverlayStore/index';
// import stores from '../../stores/index';


// interface DeckGLOverlayProps {
//   deckGLOverlayStore?: DeckGLOverlayStore
// }

const MAPBOX_TOKEN: string | undefined = process.env.REACT_APP_MAPBOX_PUBLIC_TOKEN;

@inject('stores')
// @inject(({ deckGLOverlayStore }: { deckGLOverlayStore: stores.deckGLOverlayStore }) => ({
//   deckGLOverlayStore
// }))
@observer
class DeckGLOverlay extends React.Component<any, any> {
  public render() {
    if (!MAPBOX_TOKEN) {return;}

    const { controller, initialViewState, width, height, mapStyle, preventStyleDiffing } = this.props.stores.deckGLOverlayStore;
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