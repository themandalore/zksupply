pragma solidity >=0.4.21 <0.6.0;

//import "chainlink/contracts/ChainlinkClient.sol";
import "./RangeProofValidator.sol";

contract ZkSensors is RangeProofValidator{
  mapping(uint => bytes32) idToSensorReport;
  mapping(uint => bytes) idToZkProof;
  mapping(uint => bool) isVerified;
  address owner;



  constructor() public {
    owner = msg.sender;
  }

  modifier restricted() {
    if (msg.sender == owner) _;
  }

  function senssorReport(uint _id, bytes32 _hash) public {
    idToSensorReport[_id] = _hash;
  }

  // function submitProof(bytes memory _zkproof) public{



  // }

  // function verifyProof(uint _id) public returns(bool){

  // }


}
