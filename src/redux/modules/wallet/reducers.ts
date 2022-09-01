import { Reducer } from 'react';
import { ActionType, WalletActionTypes } from './types';

export interface WalletState {
  publicKey?: string;
}

const initialState: WalletState = {
  publicKey: '',
};

const wallet: Reducer<WalletState, ActionType> = (state: WalletState = initialState, action: ActionType) => {
  switch (action.type) {
    case WalletActionTypes.CONNECT_WALLET:
      return {
        ...state,
        publicKey: action.payload.publicKey,
      };
    default:
      return state;
  }
};

export default wallet;
