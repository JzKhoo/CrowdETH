// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "./Venture.sol";

contract VentureContractFactory {
    address[] public VentureAddresses;

    event ListVenture(address indexed ventureAddress);

    function listVenture(string calldata name, string calldata symbol, uint256 targetCapital) public {
        Venture v = new Venture(name, symbol, targetCapital, msg.sender);
        VentureAddresses.push(address(v));
        emit ListVenture(address(v));
    }

    function getVentureAddresses() public view returns (address[] memory) {
        return VentureAddresses;
    }

}