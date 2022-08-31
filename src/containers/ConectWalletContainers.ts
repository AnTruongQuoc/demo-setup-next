import { connect } from 'react-redux';

import { connectWalletActions } from '../redux/modules/connectWallet';
import ConnectWallet from '../components/ConnectWallet';
import { Dispatch } from 'redux';
const mapStateToProps = (state: any) => {
  return {
    connectWallet: state.connectWalletReducers,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onConnectWallet: (publicKey: string) => {
      dispatch(connectWalletActions.connectWallet(publicKey));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectWallet);
