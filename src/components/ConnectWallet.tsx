import React from 'react';

function ConnectWallet(props: any) {
  const { connectWallet, onConnectWallet } = props;
  return (
    <div>
      <button className='text-white' onClick={() => onConnectWallet('x3148hwfedy8d8de723g9dwhe')}>
        {connectWallet?.publicKey || 'Connect Wallet'}
      </button>
    </div>
  );
}

export default ConnectWallet;
