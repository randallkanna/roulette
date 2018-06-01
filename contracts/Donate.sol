pragma solidity ^0.4.4;


contract Donate {
  address public owner;
  uint256 public minimumDonation;
  uint256 public totalDonated;
  uint256 public numberOfDonations;
  uint256 public maxAmountOfDonations = 100;
  address[] public donaters;

  struct Donater {
    uint256 amountDonated;
    uint256 numberSelected;
    address charity;
  }

  mapping(address => Donater) public donaterInfo;

  constructor() {
    owner = msg.sender;
  }

  function donate(address charity) public payable {
    // TODO - require() // that charity exists
    require(!checkDonaterExists(msg.sender));
    require(msg.value >= minimumDonation);

    donaterInfo[msg.sender].amountDonated = msg.value;
    donaterInfo[msg.sender].charity = charity;

    numberOfDonations++;
    donaters.push(msg.sender);
    totalDonated += msg.value;

    if (numberOfDonations >= maxAmountOfDonations) generateCharityWinner();
  }

  function checkDonaterExists(address donater) public constant returns(bool) {
    for(uint256 i = 0; i < donaters.length; i++){
      if(donaters[i] == donater) return true;
    }

    return false;
  }

  function generateCharityWinner() public {
   /* address charitySelected =  */

   /* sendCharityFunds(charitySelected); */
  }

  function kill() public {
    if(msg.sender == owner) selfdestruct(owner);
  }
}
