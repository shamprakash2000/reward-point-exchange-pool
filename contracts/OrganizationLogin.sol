// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract OrganizationLogin {
    mapping(string => string) public details;

    function add(string memory name, string memory password) public {
        details[name] = password;
    }

    function login(string memory name, string memory password)
        public
        view
        returns (bool)
    {
    if(keccak256(bytes(details[name])) == keccak256(bytes(password)))
            return true;
        else return false;
    }
}
