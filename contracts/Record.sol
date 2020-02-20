pragma solidity ^0.6.0;

import "@openzeppelin/contracts/ownership/Ownable.sol";

contract Record {
    string public data;
    mapping(address => string) addressToEncryptedKeys; //the key used to encrypt the data encrypted with the public key

    constructor(
        string memory _data,
        address _address1,
        string memory _encryptedKey1,
        address _address2,
        string memory _encryptedKey2
    ) public {
        data = _data;
        addressToEncryptedKeys[_address1] = _encryptedKey1;
        addressToEncryptedKeys[_address2] = _encryptedKey2;
    }

}
