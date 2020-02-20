pragma solidity ^0.6.0;

import "@openzeppelin/contracts/ownership/Ownable.sol";
import "./Record.sol";

contract Patient is Ownable {
    // constructor() public {}
    Record[] public records;

    function newRecord(
        string calldata _data,
        string calldata _encryptedKey1, //for the owner
        string calldata _encryptedKey2 //for the clinic
    ) external {
        //Should add Check if the sender is a clinic
        Record record = new Record(
            _data,
            owner(),
            _encryptedKey1,
            msg.sender,
            _encryptedKey2
        );
        records.push(record);
    }
}
