pragma solidity 0.5.16;

contract Wikipedia {
  struct Article {
    string content;
  }

  mapping (uint => Article) public articlesById;

  constructor() public {
    Article memory newArticle = Article("Hello");
    articlesById[0] = newArticle;
  }

  function articleContent() public view returns (string memory) {
    return articlesById[0].content;
  }

  // Write your code here.
}
