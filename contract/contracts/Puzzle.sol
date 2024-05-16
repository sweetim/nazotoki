//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Puzzle {
  struct PuzzleItem {
    string title;
    string description;
    string uri;
    PuzzleAnswer answers;
  }

  struct PuzzleAnswer {
    string answers_1;
    string answers_2;
    string answers_3;
    string answers_4;
  }

  uint public itemIndex;
  mapping(uint => PuzzleItem) public items;

  constructor() {
    itemIndex = 0;
  }

  function createItem(PuzzleItem calldata item) public {
    items[itemIndex] = item;
    itemIndex += 1;
  }

  function getItem(uint index) public view returns(PuzzleItem memory) {
    return items[index];
  }
}
