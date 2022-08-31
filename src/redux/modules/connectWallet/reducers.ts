import { connect } from 'react-redux';
import { combineReducers } from 'redux';

import { CONNECTWALLET } from './types';
export interface WalletState {
  publicKey: string;
}
const initialState: WalletState = {
  publicKey: '',
};
const connectWallet = (state = initialState, action: any) => {
  switch (action.type) {
    case CONNECTWALLET:
      return { publicKey: action.publicKey };
    default:
      return state;
  }
};

export default connectWallet;
