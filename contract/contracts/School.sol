//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract School {
  struct SchoolMetadata {
    address owner;
    string name;
    string description;
  }

  mapping(address => SchoolMetadata) public schoolMetadatas;
  mapping(address => string[]) public questionsBank;

  modifier onlyBootloader() {
        require(
            msg.sender == schoolMetadatas[msg.sender].owner,
            "Only owner of school can access"
        );
        // Continue execution if called from the bootloader.
        _;
    }

  function createSchool(string calldata name, string calldata description) public {
    schoolMetadatas[msg.sender] = SchoolMetadata(msg.sender, name, description);
  }

  function getSchoolMetadata(address owner) public view returns(SchoolMetadata memory) {
    return schoolMetadatas[owner];
  }

  function registerQuestions(string calldata questionId) public onlyBootloader {
    questionsBank[msg.sender].push(questionId);
  }

  function getAllQuestions(address owner) public view returns(string[] memory) {
    return questionsBank[owner];
  }
}
