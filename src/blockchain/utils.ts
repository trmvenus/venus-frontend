import Web3 from 'web3';
import { addresses, defaultChainId, rpcUrls } from './constants';
import { BigNumber } from "bignumber.js";
import VenusNFT from './contracts/VenusNFT';

export const createWeb3 = (provider) => {

  var realProvider;

  if (typeof provider === 'string') {
    if (provider.includes('wss')) {
      realProvider = new Web3.providers.WebsocketProvider(
        provider
      );
    } else {
      realProvider = new Web3.providers.HttpProvider(
        provider
      );
    }
  } else {
    realProvider = provider;
  }

  return new Web3(realProvider);
}

export const getDefaultWeb3 = () => {
  return createWeb3(rpcUrls[defaultChainId]);
}

export const getDefaultContractOptions = () => {
  const web3 = getDefaultWeb3();
  return { 
    web3, 
    chainId: defaultChainId, 
    account: null 
  };
}

export const BNtoNum = (value, decimal = 18) => {
  return new BigNumber(value).shiftedBy(-decimal).toNumber();
}

export const NumToBN = (value, decimal = 18) => {
  return new BigNumber(value).shiftedBy(decimal);
}

export const toFixed = (num, digit) => {
  if (isNaN(num)) return 0;
  var fixed_num = Number(num).toFixed(digit)
  return Number(fixed_num.toString());
}

export const getDateStr = (dateObj) => {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = monthNames[dateObj.getMonth()];
  const day = String(dateObj.getDate()).padStart(2, '0');
  const year = dateObj.getFullYear();
  const output = month  + ' ' + day  + ', ' + year;
  return output;
}

export const getPercent = (salesData) => {
  if (salesData.isEnded) 
    return 0;

  return toFixed(salesData.amountRaised / salesData.fundingGoal * 100, 1);
}

export const getVenusInfo = async () => {
  const venusNFT = new VenusNFT(getDefaultContractOptions(), addresses.venusNFT[defaultChainId]);

  const totalSupply = await venusNFT.call("totalSupply");

  return {
    totalSupply: BNtoNum(totalSupply, 0),
  };
}
