import React from 'react';
import { connectWallet } from 'redux/actions';
import useRedux from 'hooks/useRedux';

function ConnectWallet() {
  const { dispatch, appSelector } = useRedux();
  const { publicKey } = appSelector((state) => state.wallet);
  console.log(publicKey);

  return (
    <div className='text-white' onClick={() => dispatch(connectWallet('x3148hwfedy8d8de723g9dwhe'))}>
      {publicKey || 'Connect Wallet'}
    </div>
  );
}

export default ConnectWallet;
