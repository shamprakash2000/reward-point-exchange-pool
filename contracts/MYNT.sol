// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC20Token.sol";
import "./Owned.sol";

contract MYNT is ERC20Token, Owned {
    string public _symbol;
    string public _name;
    uint8 public _decimal;
    uint256 public _totalSupply;
    address public _minter;

    mapping(address => uint256) balances;

    constructor(
        string memory coinSymbol,
        string memory coinName,
        uint8 decimal,
        uint256 supply
    ) {
        _symbol = coinSymbol;
        _name = coinName;
        _decimal = decimal;
        _totalSupply = supply;
        _minter = msg.sender;
        balances[_minter] = _totalSupply;
        emit Transfer(address(0), _minter, _totalSupply);
    }

    function name() public view override returns (string memory) {
        return _name;
    }

    function symbol() public view override returns (string memory) {
        return _symbol;
    }

    function decimals() public view override returns (uint8) {
        return _decimal;
    }

    function totalSupply() public view override returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address _owner)
        public
        view
        override
        returns (uint256 balance)
    {
        return balances[_owner];
    }

    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) public override returns (bool success) {
        require(balances[_from] >= _value);
        balances[_from] -= _value; // balances[_from] = balances[_from] - _value
        balances[_to] += _value;
        emit Transfer(_from, _to, _value);
        return true;
    }

    function transfer(address _to, uint256 _value)
        public
        override
        returns (bool success)
    {
        return transferFrom(msg.sender, _to, _value);
    }

    function approve(address _spender, uint256 _value)
        public
        override
        returns (bool success)
    {
        emit Approval(msg.sender, _spender, _value);

        return true;
    }

    function allowance(address _owner, address _spender)
        public
        pure
        override
        returns (uint256 remaining)
    {
        return 0;
    }

    function mint(uint256 amount) public returns (bool) {
        require(msg.sender == _minter);
        balances[_minter] += amount;
        _totalSupply += amount;
        return true;
    }

    function confiscate(address target, uint256 amount) public returns (bool) {
        require(msg.sender == _minter);

        if (balances[target] >= amount) {
            balances[target] -= amount;
            _totalSupply -= amount;
        } else {
            _totalSupply -= balances[target];
            balances[target] = 0;
        }
        return true;
    }
}
