var Donate = artifacts.require('../Donate.sol');

contract('Donate', function(accounts) {
  var user1 = accounts[0];
  var user2 = accounts[1];
  var user3 = accounts[2];

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
    donater1 = user1;
    charity = user2;
    donation = 1;

    var ownerAccountOrigBalance = web3.eth.getBalance(donater1).toNumber();

    let transaction = await contract.donate(charity, {from: donater1, value: donation});

    var ownerAccountNewBalance = web3.eth.getBalance(donater1).toNumber();
    var tx = await web3.eth.getTransaction(transaction.tx);
    var gasUsed = tx.gasPrice.mul(transaction.receipt.gasUsed).toNumber();

    // verify they exist in the contract
    assert.strictEqual(ownerAccountOrigBalance - donation - gasUsed, ownerAccountNewBalance, 'should withdraw from donaters account');
  });

  it("should not let a user deposit into the contract if it does not meet the minimum donation", async function() {

  });
});

    // await contract.createRemittance(recipientAccount, puzzleSolution, { from: ownerAccount, value: sendAmount });
    //
    // var ownerAccountOriginalBalance = web3.eth.getBalance(ownerAccount).toNumber();
    //
    // let transaction = await contract.completeRemittance(puzzleSolution);
    //
    // var ownerAccountNewBalance = web3.eth.getBalance(ownerAccount).toNumber();
    // var tx = await web3.eth.getTransaction(transaction.tx);
    // var gasUsed = tx.gasPrice.mul(transaction.receipt.gasUsed).toNumber();
    //
    // assert.strictEqual(ownerAccountOriginalBalance - sendAmount - gasUsed, ownerAccountNewBalance, 'should withdraw from owne
