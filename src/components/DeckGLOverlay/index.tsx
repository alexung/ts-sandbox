import * as React from 'react';

import DeckGL from 'deck.gl';
import * as reactMapGL from 'react-map-gl';

interface DeckGLOverlayProps {
  controller: boolean,
  viewState?: object,
  onViewStateChange?: () => void,
  width: number,
  height: number,
  mapStyle: string,
  preventStyleDiffing: boolean,
}

// interface DeckGLOverlayState {
//   viewState: object,
// }

const INITIAL_VIEW_STATE: object = {
  bearing: -27.396674584323023,
  latitude: 38.8283,
  longitude: -98.5795,
  maxZoom: 15,
  minZoom: 1,
  pitch: 40.5,
  zoom: 4,
};

const MAPBOX_TOKEN: string | undefined = process.env.REACT_APP_MAPBOX_PUBLIC_TOKEN;

class DeckGLOverlay extends React.Component<DeckGLOverlayProps> {
  public state = {
    viewState: INITIAL_VIEW_STATE
  }

  public render() {
    if (!MAPBOX_TOKEN) {return;}
    const { controller, width, height, mapStyle, preventStyleDiffing } = this.props;
    // const { viewState } = this.state;

    return (
      <DeckGL
        layers={this.renderLayers()}
        controller={controller}
        initialViewState={INITIAL_VIEW_STATE}>
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