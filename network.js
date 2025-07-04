/*
Used to set the network: https://chainlist.org/
1 Mainnet
3 Ropsten
4 Rinkeby
5 Goerli
42 Kovan
56 Binance Smart Chain Mainnet
97 Binance Smart Chain Testnet
100 xDai
137 Matic
1287 Moonbase Testnet
80001 Matic Testnet
43113 Avalanche Testnet
43114 Avalanche Mainnet
42220 Celo Mainnet
44787 Celo Alfajores Testnet
62320 Celo Baklava Testnet
1666700000 Harmony Testnet Shard0
1666600000 Harmony Mainnet Shard0
25 Cronos Mainnet Beta
338 Cronos Testnet
*/

window.web3ChainId = 103;

// Onboard JS chain config objects

// interface Chain {
//   namespace?: 'evm';
//   id: ChainId;
//   rpcUrl: string;
//   label: string;
//   token: TokenSymbol;
//   color?: string;
//   icon?: string;
//   providerConnectionInfo?: ConnectionInfo;
//   publicRpcUrl?: string;
//   blockExplorerUrl?: string;
// }

window.networks = [
  {
    id: 103,
    label: "Solana Devnet",
    token: "SOL",
    rpcUrl: `https://solana-devnet.g.alchemy.com/v2/7pm0rzhMUvS2848Rnu_FHkgEEL23igTi`,
  }
]
