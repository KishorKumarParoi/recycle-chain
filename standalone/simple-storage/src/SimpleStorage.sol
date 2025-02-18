// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract SimpleStorage {
  // State variables
  uint256 public number;
  address public immutable owner; // Immutable variable, set only once during contract deployment
  uint256 public constant MAX_NUMBER = 1000; // Constant variable, cannot be changed

  // Event to emit when the number is updated
  event NumberUpdated(uint256 newNumber);

  // Modifier to restrict access to the owner
  modifier onlyOwner() {
    require(msg.sender == owner, 'Caller is not the owner');
    _;
  }

  // Constructor to set the owner
  constructor() {
    owner = msg.sender;
  }

  // Function to set a new number
  function setNumber(uint256 newNumber) public onlyOwner {
    require(newNumber <= MAX_NUMBER, 'Number exceeds maximum limit');
    number = newNumber;
    emit NumberUpdated(newNumber); // Emit the event when the number is updated
  }

  // Function to increment the number by 1
  function increment() public onlyOwner {
    require(number < MAX_NUMBER, 'Number exceeds maximum limit');
    number++;
    emit NumberUpdated(number); // Emit the event when the number is incremented
  }

  // Function to decrement the number by 1
  function decrement() public onlyOwner {
    require(number > 0, 'Number must be greater than 0');
    number--;
    emit NumberUpdated(number); // Emit the event when the number is decremented
  }

  // Function to reset the number to 0
  function reset() public onlyOwner {
    number = 0;
    emit NumberUpdated(number); // Emit the event when the number is reset
  }

  // Function to get the current number (view function)
  function getNumber() public view returns (uint256) {
    return number;
  }

  // Function to get the owner address (pure function)
  function getOwner() public pure returns (address) {
    return address(0); // Just a placeholder, as pure functions cannot access state variables
  }
}
