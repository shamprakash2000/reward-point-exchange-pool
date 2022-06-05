// SPDX-License-Identifier: MIT
pragma solidity ^ 0.8.13;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract NewCoin is ERC20{
    address admin;
   constructor() ERC20('CoinIn', 'CIN'){
       _mint(msg.sender, 10000);
        admin = msg.sender;
   }

   function mint(address to, uint amount) external {
       require(msg.sender == admin, 'only admin');
       _mint(to, amount);
   }

   function burn(uint amount) external {
       _burn(msg.sender, amount);
   }

   function transferTo(address to, uint amount) external {
       transfer(to, amount);
   }

   function checkBalance(address account) view external returns(uint256) {
        return balanceOf(account);
   }

}