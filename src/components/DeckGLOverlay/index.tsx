import * as React from 'react';

import DeckGL from 'deck.gl';
import * as reactMapGL from 'react-map-gl';

export interface DeckGLOverlayProps {
  controller: boolean,
  initialViewState?: object,
  viewState?: object,
  onViewStateChange?: () => void,
  width: number,
  height: number,
  mapStyle: string,
  preventStyleDiffing: boolean
}

const MAPBOX_TOKEN: string | undefined = process.env.REACT_APP_MAPBOX_PUBLIC_TOKEN;

class DeckGLOverlay extends React.Component<DeckGLOverlayProps, {}> {
  public render() {
    /*
          <DeckGL
      layers={this._renderLayers()}
      controller={controller}
      initialViewState={INITIAL_VIEW_STATE}
      viewState={viewState}
      onViewStateChange={this._onViewStateChange}
    */
    if (!MAPBOX_TOKEN) {return;}
    const { controller, width, height, mapStyle, preventStyleDiffing } = this.props;
    return (
      <DeckGL
        layers={this.renderLayers()}
        controller={controller}>
          <reactMapGL.StaticMap
            width={width}
            height={height}
            // reuseMaps
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