import Web3 from 'web3';
import { addresses } from './constants';
import VenusNFT from './contracts/VenusNFT';
import { BNtoNum, NumToBN } from './utils';

export default class Web3Wrapper {

  web3: Web3;
  chainId: number;
  account: string;
  wrapperOptions: any;

  // Contracts
  venusNFT: VenusNFT;

  constructor(web3, chainId, account, options = {}) {
    this.web3 = web3;
    this.chainId = chainId;
    this.account = account;

    this.wrapperOptions = {
      web3, chainId, account,
      ...options
    }

    this.venusNFT = new VenusNFT(this.wrapperOptions, addresses.venusNFT[this.chainId]);
  }

  async getAccountData() {
    const venusBalance = await this.venusNFT.call("balanceOf", this.account);
    const ethBalance = await this.web3.eth.getBalance(this.account);
    const venusTotalSupply = await this.venusNFT.call("totalSupply");

    return {
      venusBalance: venusBalance,
      ethBalance: BNtoNum(ethBalance, 18),
      venusTotalSupply: venusTotalSupply,
    }
  }

  async mint(amount) {
    try {
      const tx = await this.venusNFT.send("mintGenesisNFT", {value: NumToBN(amount * 8, 16)}, amount.toString());
      return tx;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
