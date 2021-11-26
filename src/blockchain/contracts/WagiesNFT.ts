
import Contract from './Contract';
import abi from '../abis/VenusNFT.json';

class VenusNFT extends Contract {
  constructor(options, address) {
    super(options, "VenusNFT", abi, address);
  }
}

export default VenusNFT;
