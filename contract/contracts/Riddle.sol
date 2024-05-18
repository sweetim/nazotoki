//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { Strings } from "@openzeppelin/contracts/utils/Strings.sol";

contract Riddle {
  struct RiddleItem {
    string title;
    string description;
    string uri;
    RiddleAnswer answers;
  }

  struct RiddleAnswer {
    string answer_1;
    string answer_2;
    string answer_3;
    string answer_4;
  }

  uint public itemIndex;

  mapping(uint => RiddleItem) public items;
  mapping(address => uint) public rankings;

  constructor() {
    itemIndex = 0;
  }

  function createItem(RiddleItem calldata item) public {
    items[itemIndex] = item;
    itemIndex += 1;
  }

  function getItem(uint index) public view returns(RiddleItem memory) {
    return items[index];
  }

  function submitAnswer(uint index, string calldata answer) public returns (bool) {
    RiddleItem memory riddleItem = items[index];
    bool isCorrect = keccak256(bytes(riddleItem.answers.answer_1)) == keccak256(bytes(answer));

    if (isCorrect) {
      uint currentRanking = rankings[msg.sender];
      rankings[msg.sender] = currentRanking + 1;
    }

    return isCorrect;
  }
}
