import { combineReducers } from 'redux';
import auth from './modules/auth/reducers';
import wallet from './modules/wallet/reducers';

const rootReducer = combineReducers({
    auth,
    wallet,
});

export default rootReducer;