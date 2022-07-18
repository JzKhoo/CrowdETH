import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    web3 = new Web3(window.ethereum);
} else {
    web3 = new Web3("https://rinkeby.infura.io/v3/eb9378b8c88543f29d1f148f28043a6d");
}

web3.eth.transactionBlockTimeout = 100;

export default web3;