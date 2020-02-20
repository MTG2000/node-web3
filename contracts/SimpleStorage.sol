pragma solidity ^0.6.0;

contract SimpleStorage {
    string public value = "Hello";
    mapping(address => uint256) addressToValue; //the key used to encrypt the data encrypted with the public key

    function setValue(uint256 _value) external payable {
        require(msg.value >= 10000, "No Enougn Ether");
        addressToValue[msg.sender] = _value;
    }

    function getValue() external view returns (uint256) {
        return addressToValue[msg.sender];
    }

}
