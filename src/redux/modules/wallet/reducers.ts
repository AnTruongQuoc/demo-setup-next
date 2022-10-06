import { Reducer } from 'react';
import { ActionType, WalletActionTypes } from './types';

export interface WalletState {
  walletAddress?: string;
}

const initialState: WalletState = {
  walletAddress: '',
};

const wallet: Reducer<WalletState, ActionType> = (state: WalletState = initialState, action: ActionType) => {
  switch (action.type) {
    case WalletActionTypes.CONNECT_WALLET:
      return {
        ...state,
        walletAddress: action.payload.walletAddress,
      };
    default:
      return state;
  }
};

export default wallet;
