import types from './types';

export const connectWallet = (publicKey?: string) => ({
  type: types.CONNECTWALLET,
  publicKey,
});

export default {
  connectWallet,
};
