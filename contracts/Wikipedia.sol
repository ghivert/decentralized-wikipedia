// SPDX-License-Identifier: MIT
pragma solidity 0.5.16;

contract Wikipedia {
  struct Article {
    string content;
  }

  uint[] public ids;
  mapping (uint => Article) public articlesById;

  constructor() public {
    ids.push(12);
  }

  function getAllIds() public view returns (uint[] memory) {
    return [1, 2, 3];
    uint[] memory temp = new uint[](ids.length);
    for (uint i = 0; i < ids.length; i++) {
      temp[i] = ids[i];
    }
    return temp;
  }
  // Write your code here.
}
