pragma solidity >=0.4.21 <0.6.0;
pragma experimental ABIEncoderV2; // solium-disable-line no-experimental 
//import "chainlink/contracts/ChainlinkClient.sol";
//import "./RangeProofValidator.sol";

contract ZkSensors{

  struct Details {
        uint timestamp_c1;
        uint timestamp_c2;
        uint orientation_c1;
        uint orientation_c2;
        uint ephemeralkey_c1;
        uint ephemeralkey_c2;
  }


  mapping(bytes32 => Details[]) idToSensorReport;
  mapping(bytes32 => bytes) idToZkProof;
  bytes32[] sensorIds;

  event SensorReport(bytes32 _id,uint _tc1, uint _tc2, uint _oc1, uint _oc2, uint _ec1, uint _ec2);
  event ProofStored(bytes32 _id, bytes _proof);
  event FailedProof(bytes32 _id, bytes _proof);

  function sensorReport(bytes32 _id, uint _tc1, uint _tc2, uint _oc1, uint _oc2, uint _ec1, uint _ec2) public {
    uint len = idToSensorReport[_id].length;
    idToSensorReport[_id].push(Details({
      timestamp_c1: _tc1,
      timestamp_c2: _tc2,
      orientation_c1: _oc1,
      orientation_c2: _oc2,
      ephemeralkey_c1: _ec1,
      ephemeralkey_c2: _ec2
    }));
    if(len == 0){
         sensorIds.push(_id); 
    }
    emit SensorReport(_id, _tc1,_tc2,_oc1,_oc2,_ec1,_ec2);
  }


  function storeProof(bytes32 _id,bytes memory _proof) public returns(bool res){
    idToZkProof[_id] = _proof;
    emit ProofStored(_id,_proof);
  }

  function getAllIds() public view returns(bytes32[] memory){
    return sensorIds;
  }

    function getSensorIdsLength() public view returns(uint){
    return sensorIds.length;
  }

  function getDetailsByIdAndIndex(bytes32 _id, uint _index) public view returns(uint,uint,uint,uint,uint,uint){
    Details storage _d =  idToSensorReport[_id][_index];
    return (_d.timestamp_c1,_d.timestamp_c2,_d.orientation_c1,_d.orientation_c2,_d.ephemeralkey_c1,_d.ephemeralkey_c2);
  }

  function getNumberOfReportsById(bytes32 _id) public view returns(uint){
    return idToSensorReport[_id].length;
  }
  function getZkProof(bytes32 _id) public view returns(bytes memory){
    return idToZkProof[_id];
  }
}
