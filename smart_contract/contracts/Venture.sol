//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Venture {
    event Transfer(
        address indexed from, 
        address indexed to, 
        uint256 value
    );

    event Approval(
        address indexed venturer, 
        address indexed investor, 
        uint256 value
    );

    // Stating of variables
    string public name;
    string public symbol;
    uint256 public decimals = 0;
    address public venturerAddress;
    uint256 public listedTimestamp;
    
    // totalSupply indicates the current total number of shares distributed
    uint256 public totalSupply;
    mapping(address => uint256) private _balances;

    // targetCapital indicates the desired amount of funds from crowdfunding
    uint256 public targetCapital;
    mapping(address => uint256) investment;
    
    address[] public investors;
    address[] private _shareholders;

    // int for indication of crowdfunding status
    uint8 public status;

    constructor(string memory name_, string memory symbol_, uint256 targetCapital_, address venturerAddress_) {
        name = name_;
        symbol = symbol_;
        targetCapital = targetCapital_;
        venturerAddress = venturerAddress_;
        listedTimestamp = block.timestamp;
        status = 0;
    }

    // MODIFIER
    modifier authorized() {
        require (msg.sender == venturerAddress, "WARNING! UNAUTHORIZED!");
        _;
    }

    function invest() public payable {
        require(status == 0, "Venture Crowdfunding has ended.");
        if (investment[msg.sender] == 0) {
            investors.push(msg.sender);
        }
        investment[msg.sender] += msg.value;
    }

    function withdraw(uint256 amount) public authorized {
        require(status == 1, "Venture Crowdfunding ongoing.");
        payable(venturerAddress).transfer(amount);
    }

    function concludeVentureFunding() public authorized {
        require(status == 0, "Venture Project has ended its financing stage. Thank you for the support!");
        if ((listedTimestamp + 86400 * 180 >= block.timestamp) && (address(this).balance >= targetCapital)) {
            // Venture Crowdfunding still ongoing
            status = 1;
            _releaseFund();
        } else {
            // Venture Crowdfunding concluded
            status = 2;
            _refundInvestors();
        }
    }

    // Function to release crowdfunded funds to Venture Project Manager
    function _releaseFund() internal authorized {
        _mint(address(this).balance);
        for (uint256 i = 0; i < investors.length; i++) {
            address investorAddress = investors[i];
            _transfer(address(this), investorAddress, investment[investorAddress]);
        }
    }

    // Function to refund all crowdfunded funds to investors once venture project does not hit target
    function _refundInvestors() internal authorized {
        for (uint256 i = 0; i < investors.length; i++) {
            address investorAddress = investors[i];
            payable(investorAddress).transfer(investment[investorAddress]);
        }
    }

    // Transfer utility function to facilitate the transfer of ETH on network
    function _transfer(address sender, address recipient, uint256 amount) internal {
        require(_balances[sender] >= amount, "Insufficient ETH Balance!");
        if (_balances[recipient] == 0) {
            _shareholders.push(recipient);
        }
        _balances[sender] -= amount;
        _balances[recipient] += amount;
        emit Transfer(sender, recipient, amount);
    }

    // Minting function
    function _mint(uint256 sharesOffered) internal authorized {
        totalSupply += sharesOffered;
        _balances[address(this)] += sharesOffered;
        emit Transfer(address(0), address(this), sharesOffered);
    }

    // Retrieving information of contract on network
    function getVentureInformation() public view returns (string memory, string memory, uint256, uint256, address, uint256, uint256, uint8) {
        return (
            name,
            symbol,
            totalSupply,
            listedTimestamp,
            venturerAddress,
            address(this).balance,
            targetCapital,
            status
        );
    }
}