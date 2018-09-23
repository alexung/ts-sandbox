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
  @observable initialViewState: object = INITIAL_VIEW_STATE;
  
}