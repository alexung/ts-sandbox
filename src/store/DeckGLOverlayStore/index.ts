import { observable } from 'mobx';

const INITIAL_VIEW_STATE: object = {
  bearing: -27.396674584323023,
  latitude: 38.8283,
  longitude: -98.5795,
  maxZoom: 15,
  minZoom: 1,
  pitch: 40.5,
  zoom: 4,
};

export default class DeckGLOverlayStore {
  @observable public initialViewState: object = INITIAL_VIEW_STATE;
  @observable public controller: boolean = true;
  @observable public width: number = window.innerWidth;
  @observable public height: number = window.innerHeight;
  @observable public mapStyle: string = 'mapbox://styles/mapbox/dark-v9';
  @observable public preventStyleDiffing: boolean = true;
  @observable public MAPBOX_TOKEN: string | undefined = process.env.REACT_APP_MAPBOX_PUBLIC_TOKEN;
}