//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";

contract CheckGas {
    struct RiddleItem {
        address owner;
        string title;
        string description;
        string uri;
        RiddleAnswer answers;
    }

    struct RiddleItemDynamic {
        address owner;
        string title;
        string description;
        string uri;
        string[] answers;
    }

    struct RiddleAnswer {
        string answer_1;
        string answer_2;
        string answer_3;
        string answer_4;
        string answer_5;
        string answer_6;
        string answer_7;
        string answer_8;
    }

    uint public itemIndex;

    mapping(uint => RiddleItemDynamic) public itemsDynamic;
    mapping(uint => RiddleItem) public items;
    mapping(address => uint) public rankings;

    event RiddleAnswerEvent(address indexed user, uint index, bool isCorrect);

    constructor() {
        itemIndex = 0;
    }

    function createItem(
        address owner,
        string calldata title,
        string calldata description,
        string calldata uri,
        string calldata answer_1,
        string calldata answer_2,
        string calldata answer_3,
        string calldata answer_4,
        string calldata answer_5,
        string calldata answer_6,
        string calldata answer_7,
        string calldata answer_8
    ) public {
        items[itemIndex].owner = msg.sender;
        items[itemIndex].title = title;
        items[itemIndex].description = description;
        items[itemIndex].uri = uri;
        items[itemIndex].answers.answer_1 = answer_1;
        items[itemIndex].answers.answer_2 = answer_2;
        items[itemIndex].answers.answer_3 = answer_3;
        items[itemIndex].answers.answer_4 = answer_4;
        items[itemIndex].answers.answer_5 = answer_5;
        items[itemIndex].answers.answer_6 = answer_6;
        items[itemIndex].answers.answer_7 = answer_7;
        items[itemIndex].answers.answer_8 = answer_8;
    }

    function createItemDynamic(RiddleItemDynamic calldata item) public {
        itemsDynamic[itemIndex] = item;
        itemsDynamic[itemIndex].owner = msg.sender;
        itemIndex += 1;
    }

    function createItemFixed(RiddleItem calldata item) public {
        items[itemIndex] = item;
        items[itemIndex].owner = msg.sender;
        itemIndex += 1;
    }

    function getItem(uint index) public view returns (RiddleItem memory) {
        return items[index];
    }

    function submitAnswer(
        uint index,
        string calldata answer
    ) public returns (bool) {
        RiddleItem memory riddleItem = items[index];
        bool isCorrect = keccak256(bytes(riddleItem.answers.answer_1)) ==
            keccak256(bytes(answer));

        emit RiddleAnswerEvent(msg.sender, index, isCorrect);

        if (isCorrect) {
            uint currentRanking = rankings[msg.sender];
            rankings[msg.sender] = currentRanking + 1;
        }

        return isCorrect;
    }
}
