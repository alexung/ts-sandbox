import DeckGLOverlayStore from './DeckGLOverlayStore/index';

// export default class AppStore {
//   public deckGLOverlayStore: DeckGLOverlayStore;

//   public get stores() {
//     console.log('this.deckGLOverlayStore', this.deckGLOverlayStore);
//     debugger
//     return {
//       deckGLOverlayStore: this.deckGLOverlayStore,
//     }
//   }
// }

const deckGLOverlayStore = new DeckGLOverlayStore();

export default {
  deckGLOverlayStore,
}