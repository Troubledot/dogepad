// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import '@openzeppelin/contracts/utils/math/SafeMath.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import "./ERC721A.sol";

contract NFT is Ownable, ERC721A, ReentrancyGuard {
  using SafeMath for uint256;

  uint256 public immutable maxPerAddressDuringMint;
  uint256 public immutable maxPerAddressOnce;
  uint256 public publicPrice = 99 * 10 ** 18;
  uint256 public publicSaleStartTime;
  mapping(address => uint256) public allowlist;
  IERC20 public usdt;

  constructor(
    uint256 maxBatchSize_,
    uint256 maxPerAddressOnce_,
    uint256 collectionSize_,
    uint256 publicSaleStartTime_,
    address usdtAddress_
  ) ERC721A("NBC IDO PassCard", "NBC IDO PassCard", maxBatchSize_,collectionSize_) {
    maxPerAddressDuringMint = maxBatchSize_;
    maxPerAddressOnce = maxPerAddressOnce_;
    publicSaleStartTime = publicSaleStartTime_;
    usdt = IERC20(usdtAddress_);
  }

  modifier callerIsUser() {
    require(tx.origin == msg.sender, "The caller is another contract");
    _;
  }

  function publicSaleMint(uint256 quantity)
    external
    payable
  {
    require( quantity <= maxPerAddressOnce, "can not mint this many one time" );
    require(totalSupply() + quantity <= collectionSize, "Reached max supply");
    require(
      numberMinted(msg.sender) + quantity <= maxPerAddressDuringMint,
      "Can not mint this many"
    );
    require(block.timestamp >= publicSaleStartTime, "Has not yet started");
    usdt.transferFrom(msg.sender,address(this), quantity * publicPrice);
    _safeMint(msg.sender, quantity);
  }

  function seedAllowlist(address[] memory addresses, uint256[] memory numSlots)
    external
    onlyOwner
  {
    require(
      addresses.length == numSlots.length,
      "addresses does not match numSlots length"
    );
    for (uint256 i = 0; i < addresses.length; i++) {
      allowlist[addresses[i]] = numSlots[i];
    }
  }

  function allowlistMint() external payable callerIsUser {
    require(block.timestamp >=  publicSaleStartTime, "mint has not started or has ended");
    require(allowlist[msg.sender] > 0, "not eligible for allowlist mint");
    require(totalSupply() <= collectionSize, "reached max supply");
    _safeMint(msg.sender, allowlist[msg.sender]);
    allowlist[msg.sender] = 0;
  }

  string private _baseTokenURI;

  function _baseURI() internal view virtual override returns (string memory) {
    return _baseTokenURI;
  }

  function setBaseURI(string calldata baseURI) external onlyOwner {
    _baseTokenURI = baseURI;
  }

  function setPublicSaleStartTime(uint256 saleStartTime) public onlyOwner{
        publicSaleStartTime = saleStartTime;
  }

  function withdrawMoney() external onlyOwner nonReentrant {
    (bool success, ) = msg.sender.call{value: address(this).balance}("");
    require(success, "Transfer failed.");
  }

  function setOwnersExplicit(uint256 quantity) external onlyOwner nonReentrant {
    _setOwnersExplicit(quantity);
  }

  function numberMinted(address owner) public view returns (uint256) {
    return _numberMinted(owner);
  }

  function getOwnershipData(uint256 tokenId)
    external
    view
    returns (TokenOwnership memory)
  {
    return ownershipOf(tokenId);
  }
}