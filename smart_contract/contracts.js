import web3 from "./web3";
import contracts from "./build/contracts.json"

const Venture = (ventureAddress) => {
    return new web3.eth.Contract(contracts.Venture.abi, ventureAddress);
};

const VentureContractFactory = new web3.eth.Contract(
    contracts.VentureContractFactory.abi,
    "0x3224ca1B98f8A643A2a3C12BEc7F7FDA17B65024"
);

export { Venture, VentureContractFactory };