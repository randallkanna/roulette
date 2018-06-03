var Donate = artifacts.require('../Donate.sol');

contract('Donate', function(accounts) {
  var donater1 = accounts[0];
  var donater2 = accounts[1];
  var charity = accounts[2];
  var standardTestDonation = 2;

  beforeEach(function() {
    return Donate.new()
    .then(function(instance) {
      contract = instance;
    });
  });

  it("should assert true", function(done) {
    var donate = Donate.deployed();
    assert.isTrue(true);
    done();
  });

  it("should let a user deposit ether into the contract as a valid donater and subtract funds from their account", async function() {
    var ownerAccountOriginalBalance = web3.eth.getBalance(donater1).toNumber();

    let transaction = await contract.donate(charity, {from: donater1, value: standardTestDonation});

    var ownerAccountNewBalance = web3.eth.getBalance(donater1).toNumber();
    var tx = await web3.eth.getTransaction(transaction.tx);
    var gasUsed = tx.gasPrice.mul(transaction.receipt.gasUsed).toNumber();

    assert.strictEqual(ownerAccountOriginalBalance - standardTestDonation - gasUsed, ownerAccountNewBalance, 'should withdraw from donaters account');
    // TO DO - verify they exist in the contract struct and have been inputted correctly
  });

  it("should let a user submit a charity as a potential winner", async function() {
    // TO DO: verify the charity exists in the contract struct
  });

  it("should not let the same user donate twice", async function() {
    try {
      await contract.donate(charity, {from: donater1, value: standardTestDonation});
      await contract.donate(charity, {from: donater1, value: standardTestDonation});
      assert.ok(false, 'should throw an error when the same user tries to use contract')
    } catch(error) {
      assert.ok(true, 'expected throw')
    }
  });

  it("should properly transfer funds to the winning charity", async function() {
    await contract.donate(charity, {from: donater1, value: standardTestDonation});

    let charityAccountBalance = web3.eth.getBalance(charity).toNumber();

    await contract.transferFundsToCharity(charity);

    let charityAccountNewBalance = web3.eth.getBalance(charity).toNumber();

    assert.strictEqual(charityAccountNewBalance, charityAccountNewBalance + standardTestDonation, 'transfers proper amount')
  });
});
