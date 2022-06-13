// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract NewCoin {
    address admin;
    ERC20 erc;

    string _name;
    string _symbol;
    uint256 _amount;

    mapping(string => ERC20) coinRef;

    function create(
        string memory name,
        string memory symbol,
        uint256 amount
    ) public {
        _name = name;
        _symbol = symbol;
        _amount = amount;
        erc = new ERC20(name, symbol);
        erc._mint(msg.sender, amount * 10**22);
        coinRef[_name] = erc;
    }

    function transferTo(
        address to,
        uint256 amount,
        string memory name
    ) external {
        erc = coinRef[name];
        erc.transfer(to, amount);
    }

    function transferFromAcc(
        address from,
        address to,
        uint256 amount,
        string memory name
    ) public returns (bool) {
        erc = coinRef[name];
        erc.approve(to, 30);
        return erc.transferFrom(from, to, amount);
    }

    function checkBalance(address account, string memory name)
        external
        returns (uint256)
    {
        erc = coinRef[name];
        return erc.balanceOf(account);
    }

    function checkSymobol(string memory name) external returns (string memory) {
        erc = coinRef[name];
        return erc.symbol();
    }
}
