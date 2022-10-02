# HUONG DAN SU DUNG TRUOC KHI DUNG:

- `npm install web3`
- To use local development, install and run `ganache-cli`, change to LOCALHOST_RPC
- Or use on-chain Mumbai, just use change the RPC to MUMBAI_RPC

1. Deploy ERC721 contract and mint some ERC721 (NFT) to your wallet
2. Deploy Settings.sol
3. Deploy VaultFactory.sol
4. Approve VaultFactory contract to use your ERC721 tokens
5. Call mint() function in VaultFactory contract
    - By calling mint(), VaultFactory will transfer your NFT to a new Vault & lock that NFT up
    - And VaultFactory will mint ERC20 tokens (fractions of NFT) to your wallet