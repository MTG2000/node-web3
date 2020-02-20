pragma solidity ^0.6.0;

import "@openzeppelin/contracts/ownership/Ownable.sol";
import "./Patient.sol";

contract PatientsFactory is Ownable {
    mapping(address => address) public addressToPatient;
    Patient[] patients;
    uint256 patientsNum = 0;

    function newPatient(address _address) external {
        require(addressToPatient[_address] == address(0), "Address Taken");
        Patient patient = new Patient();
        //set the ownership of the patient contract to him
        patient.transferOwnership(_address);
        //reserve an address for him and add the Contract to the array
        addressToPatient[_address] = address(patient);
        patients.push(patient);
        patientsNum++;
    }

}
