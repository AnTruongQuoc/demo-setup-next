import { ActionType, WalletActionTypes } from './types';

export const connectWallet = (publicKey?: string): ActionType => ({
  type: WalletActionTypes.CONNECT_WALLET,
  payload: { publicKey },
});
