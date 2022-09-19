// Library Imports
require('dotenv').config();
const Web3 = require('web3');
const web3 = new Web3(process.env.LOCALHOST_RPC);

// Data setup
const { settingsAbi } = require('../abi/settingsAbi');
const { settingsBytecode } = require('../bytecode/settingsBytecode');

//Contract object and account info
let deploy_contract = new web3.eth.Contract(settingsAbi);
let account = process.env.LOCAL_ACCOUNT_ADDRESS; // Local address

// Function Parameter
let payload = {
  data: settingsBytecode,
};

let parameter = {
  from: account,
  gas: 4712388,
  gasPrice: 100000000000,
};

async function deploy() {
  deploy_contract
    .deploy(payload)
    .send(parameter, (err, transactionHash) => {
      console.log('Transaction Hash :', transactionHash);
    })
    .on('confirmation', () => {})
    .then((newContractInstance) => {
      console.log('Deployed Contract Address : ', newContractInstance.options.address);
    });
}

deploy();
