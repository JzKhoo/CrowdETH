import web3 from "./web3";
import contracts from "./build/contracts.json"

const Venture = (ventureAddress) => {
    return new web3.eth.Contract(contracts.Venture.abi, ventureAddress);
};

export { Venture };