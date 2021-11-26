
// import ifansLogo from '../assets/logo-icon.svg';

export const defaultChainId = 1;

export const rpcUrls = {
  1: 'https://mainnet.infura.io/v3/' + process.env.REACT_APP_INFURA_PROJECT_ID,
  4: 'https://rinkeby.infura.io/v3/' + process.env.REACT_APP_INFURA_PROJECT_ID
}

export const networkNames = {
  1: 'Ethereum Mainnet',
  4: 'Rinkeby Test Network'
}

export const addresses = {
  venusNFT: {
    1: '0xD8e27b891a03C88F5bd432B772f45Ad65562Da42',
    4: '0x657BA089732287d7CD95AD31461F5c112e142c6d'
  },
}
