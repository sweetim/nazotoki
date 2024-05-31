//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { Strings } from "@openzeppelin/contracts/utils/Strings.sol";

contract Riddle {
  struct RiddleItem {
    address owner;
    string title;
    string description;
    string uri;
    string[] answers;
  }

  uint public itemIndex;

  mapping(uint => RiddleItem) public items;
  mapping(address => uint) public rankings;

  event RiddleAnswerEvent(address indexed user, uint index, bool isCorrect);

  constructor() {
    itemIndex = 0;
  }

  function createItem(RiddleItem calldata item) public {
    items[itemIndex] = item;
    items[itemIndex].owner = msg.sender;
    itemIndex += 1;
  }

  function getItem(uint index) public view returns(RiddleItem memory) {
    return items[index];
  }

  function submitAnswer(uint index, string calldata answer) public returns (bool) {
    RiddleItem memory riddleItem = items[index];
    bool isCorrect = keccak256(bytes(riddleItem.answers[0])) == keccak256(bytes(answer));

    emit RiddleAnswerEvent(msg.sender, index, isCorrect);

    if (isCorrect) {

      uint currentRanking = rankings[msg.sender];
      rankings[msg.sender] = currentRanking + 1;
    }

    return isCorrect;
  }
}
