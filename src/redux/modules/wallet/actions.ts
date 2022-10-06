import { ActionType, WalletActionTypes } from './types';

export const connectWallet = (walletAddress?: string): ActionType => ({
  type: WalletActionTypes.CONNECT_WALLET,
  payload: { walletAddress },
});
