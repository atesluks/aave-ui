import { BaseNetworkConfig } from '../helpers/config/types';
import polygonBridgeLogo from './branding/images/polygonLogo.svg';
import avalancheBridgeLogo from './branding/images/avalancheLogo.svg';
import arbitrumBridgeLogo from './branding/images/arbitrumLogo.svg';
import { ChainId } from '@aave/contract-helpers';

export const networkConfigs: Record<string, BaseNetworkConfig> = {
  [ChainId.kovan]: {
    name: 'Kovan',
    publicJsonRPCUrl: ['https://eth-kovan.alchemyapi.io/v2/demo', 'https://kovan.poa.network'],
    protocolDataUrl: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v2-kovan',
    baseUniswapAdapter: '0xf86Be05f535EC2d217E4c6116B3fa147ee5C05A1',
    baseAsset: 'ETH',
    baseAssetWrappedAddress: '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
    explorerLink: 'https://kovan.etherscan.com',
    rpcOnly: true,
    isTestnet: true,
  },
  [ChainId.rinkeby]: {
    name: 'Rinkeby',
    publicJsonRPCUrl: [
      'https://eth-rinkeby.alchemyapi.io/v2/demo',
      'https://rinkeby-light.eth.linkpool.io/',
    ],
    protocolDataUrl: '',
    baseUniswapAdapter: '',
    baseAsset: 'ETH',
    baseAssetWrappedAddress: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    explorerLink: 'https://rinkeby.etherscan.io/',
    rpcOnly: true,
    isTestnet: true,
  },
  [ChainId.mainnet]: {
    name: 'Ethereum mainnet',
    publicJsonRPCUrl: ['https://cloudflare-eth.com', 'https://eth-mainnet.alchemyapi.io/v2/demo'],
    publicJsonRPCWSUrl: 'wss://eth-mainnet.alchemyapi.io/v2/demo',
    cachingServerUrl: 'https://cache-api-mainnet.aave.com/graphql',
    cachingWSServerUrl: 'wss://cache-api-mainnet.aave.com/graphql',
    protocolDataUrl: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v2',
    baseUniswapAdapter: '0xc3efa200a60883a96ffe3d5b492b121d6e9a1f3f',
    baseAsset: 'ETH',
    baseAssetWrappedAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    explorerLink: 'https://etherscan.com',
    rpcOnly: false,
  },
  [ChainId.polygon]: {
    name: 'Polygon POS',
    publicJsonRPCUrl: ['https://polygon-rpc.com'],
    publicJsonRPCWSUrl: 'wss://polygon-rpc.com',
    cachingServerUrl: 'https://cache-api-polygon.aave.com/graphql',
    cachingWSServerUrl: 'wss://cache-api-polygon.aave.com/graphql',
    protocolDataUrl: 'https://api.thegraph.com/subgraphs/name/aave/aave-v2-matic',
    baseAsset: 'MATIC',
    baseAssetWrappedAddress: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
    explorerLink: 'https://polygonscan.com',
    rpcOnly: true,
    bridge: {
      brandColor: '130, 71, 229',
      name: 'Polygon PoS Bridge',
      url: 'https://wallet.matic.network/bridge/',
      logo: polygonBridgeLogo,
    },
  },
  [ChainId.mumbai]: {
    name: 'Mumbai',
    publicJsonRPCUrl: ['https://rpc-mumbai.maticvigil.com'],
    publicJsonRPCWSUrl: 'wss://rpc-mumbai.maticvigil.com',
    protocolDataUrl: 'https://api.thegraph.com/subgraphs/name/aave/aave-v2-polygon-mumbai',
    baseAsset: 'MATIC',
    baseAssetWrappedAddress: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
    explorerLink: 'https://explorer-mumbai.maticvigil.com',
    rpcOnly: true,
    isTestnet: true,
  },
  [ChainId.fuji]: {
    name: 'Fuji',
    publicJsonRPCUrl: ['https://api.avax-test.network/ext/bc/C/rpc'],
    publicJsonRPCWSUrl: 'wss://api.avax-test.network/ext/bc/C/rpc',
    protocolDataUrl: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v2-fuji',
    baseUniswapAdapter: '0x0',
    baseAsset: 'AVAX',
    baseAssetWrappedAddress: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
    explorerLink: 'https://cchain.explorer.avax-test.network',
    rpcOnly: true,
    usdMarket: true,
    isTestnet: true,
    bridge: {
      brandColor: '232, 65, 66',
      name: 'Avalanche Bridge',
      url: 'https://bridge.avax.network/',
      logo: avalancheBridgeLogo,
    },
  },
  [ChainId.avalanche]: {
    name: 'Avalanche',
    publicJsonRPCUrl: ['https://api.avax.network/ext/bc/C/rpc'],
    publicJsonRPCWSUrl: 'wss://api.avax.network/ext/bc/C/rpc',
    protocolDataUrl: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v2-avalanche',
    cachingServerUrl: 'https://cache-api-avalanche.aave.com/graphql',
    cachingWSServerUrl: 'wss://cache-api-avalanche.aave.com/graphql',
    baseUniswapAdapter: '0x0',
    baseAsset: 'AVAX',
    baseAssetWrappedAddress: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    explorerLink: 'https://cchain.explorer.avax.network',
    rpcOnly: false,
    usdMarket: true,
    bridge: {
      brandColor: '232, 65, 66',
      name: 'Avalanche Bridge',
      url: 'https://bridge.avax.network/',
      logo: avalancheBridgeLogo,
    },
  },
  [ChainId.arbitrum_rinkeby]: {
    name: 'Arbitrum Rinkeby',
    publicJsonRPCUrl: ['https://rinkeby.arbitrum.io/rpc'],
    publicJsonRPCWSUrl: 'wss://rinkeby.arbitrum.io/rpc',
    protocolDataUrl: '',
    baseUniswapAdapter: '0x0',
    baseAsset: 'ARETH',
    baseAssetWrappedAddress: '0xd7680C4cfe94CBBea7A0345d7061020c27403986',
    explorerLink: 'https://testnet.arbiscan.io/',
    rpcOnly: true,
    usdMarket: true,
    isTestnet: true,
    bridge: {
      brandColor: '40, 160, 239',
      name: 'Arbitrum Bridge',
      url: 'https://bridge.arbitrum.io',
      logo: arbitrumBridgeLogo,
    },
  },
} as const;
