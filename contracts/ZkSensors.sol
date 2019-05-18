pragma solidity >=0.4.21 <0.6.0;

//import "chainlink/contracts/ChainlinkClient.sol";
import "./RangeProofValidator.sol";

contract ZkSensors is RangeProofValidator{
  mapping(uint => bytes) idToSensorReport;
  mapping(uint => bytes) idToZkProof;


  function senssorReport(uint _id, bytes memory _hash) public {
    idToSensorReport[_id] = _hash;
  }


  function verifyProof(uint _id,bytes memory _proof) public returns(bool res){
    uint _lower = 0;
    uint _upper = 3;
    res = validate(_lower,_upper,idToSensorReport[_id],_proof);
    if(res){
      idToZkProof[_id] = _proof;
    }
  }
  
}
