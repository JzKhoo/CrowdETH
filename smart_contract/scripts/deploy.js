const fs = require("fs");
const path = require("path");
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');


const provider = new HDWalletProvider(
    'phrase join goat thank congress build twist lucky gown dilemma excess owner',  // Metamask Test Wallet Secret
    'https://rinkeby.infura.io/v3/eb9378b8c88543f29d1f148f28043a6d' // Rinkeby Endpoint Testnet
);

const web3 = new Web3(provider);

const { VentureContractFactory } = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../build/contracts.json"), "utf-8")
    );

const deployContract = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const ventureContractFactory = await new web3.eth.Contract(VentureContractFactory.abi)
        .deploy({ data: VentureContractFactory.evm.bytecode.object })
        .send({ gas: '10000000', from: accounts[0] });
    
    const ventureContractFactoryAddress = ventureContractFactory.options.address;
    console.log('Contract deployed to', ventureContractFactoryAddress);
    provider.engine.stop();
}

deployContract();