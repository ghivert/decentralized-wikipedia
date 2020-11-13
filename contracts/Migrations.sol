// SPDX-License-Identifier: MIT
pragma solidity 0.5.16;

contract Migrations {
  address public owner;
  // solhint-disable-next-line
  uint public last_completed_migration;

  modifier restricted() {
    if (msg.sender == owner) _;
  }

  constructor() public {
    owner = msg.sender;
  }

  function setCompleted(uint completed) public restricted {
    last_completed_migration = completed;
  }
}
