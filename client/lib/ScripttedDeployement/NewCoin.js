export const NewCoin = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract NewCoin is ERC20 {
    address admin;

    constructor(
        string memory name,
        string memory symbol,
        uint256 amount
    ) ERC20(name, symbol) {
        _mint(msg.sender, amount * 10**18);
        admin = msg.sender;
    }

    function mint(address to, uint256 amount) external {
        require(msg.sender == admin, "only admin");
        _mint(to, amount);
    }

    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }

    function transferTo(address to, uint256 amount) external {
        transfer(to, amount);
    }

    function checkBalance(address account) external view returns (uint256) {
        return balanceOf(account);
    }

    function checkSymobol() external view returns (string memory) {
        return symbol();
    }
}

`