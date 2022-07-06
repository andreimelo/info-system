import { createStoreHook } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../../reducers';

const store = createStoreHook(rootReducer, composeWithDevTools());

export default store;
