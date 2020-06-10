pragma solidity >=0.5.0;

contract Ether {
    string public functionCalled;

    function sendEther() external payable {
        functionCalled = "sendEther";
    }

    fallback() external payable {
        functionCalled = "fallback";
    } 
}
