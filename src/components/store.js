import {createStore} from './redux';
import iceCremeReducer from './iceCreme/iceCremeReduces';

const store = createStore(iceCremeReducer);

export default store;