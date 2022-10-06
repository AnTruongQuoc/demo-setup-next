export enum WalletActionTypes {
  CONNECT_WALLET = '@@wallet/CONNECT_WALLET',
}

export interface ConnectWalletAction {
  type: WalletActionTypes.CONNECT_WALLET;
  payload: { walletAddress?: string };
}

export type ActionType = ConnectWalletAction;

/**
 * EXAMPLE: Multiple AcionType
 * 
 * export type ActionType =
 *     | ConnectWalletAction_1
 *     | ConnectWalletAction_2
 *     | ConnectWalletAction_3
 *     | ConnectWalletAction_4;
 */